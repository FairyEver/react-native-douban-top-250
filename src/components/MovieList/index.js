import React from 'react';
import {FlatList, View, Text, Image, StyleSheet, findNodeHandle} from 'react-native';
import { BlurView } from 'react-native-blur';

import Loading from '../Loading'

// API地址
const API_LIST = 'https://api.douban.com/v2/movie/top250';

class Stars extends React.Component {
  render () {
    return (
      <View style={styleStars.body}>
        <View style={styleStars.average}>
          <Text style={styleStars.averageText}>{this.props.average}</Text>
        </View>
        {
          [...Array(10)].map((e, index) => index + 1).map(e => {
            const average = this.props.average;
            if (e <= average) {
              return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/10.png')} />);
            } else if (e - average < 1) {
              const n = 10 * average - 10 * (e - 1);
              switch (n) {
                case 1: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/1.png')} />); break;
                case 2: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/2.png')} />); break;
                case 3: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/3.png')} />); break;
                case 4: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/4.png')} />); break;
                case 5: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/5.png')} />); break;
                case 6: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/6.png')} />); break;
                case 7: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/7.png')} />); break;
                case 8: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/8.png')} />); break;
                case 9: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/9.png')} />); break;
                default: break;
              }
            } else {
              return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/0.png')} />);
            }
          })
        }
      </View>
    )
  }
}
const styleStars = StyleSheet.create({
  body: {
    flexDirection: 'row',
    marginTop: 5
  },
  average: {
    height: 14,
    borderRadius: 2,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#FECD2F',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  averageText: {
    color: '#000',
    fontSize: 10,
    fontWeight: 'bold'
  },
  star: {
    height: 14,
    width: 14,
    marginRight: 2
  }
})

// 列表的每一项
class TopListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewRef: null };
  };
  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  };
  render () {
    console.log(this.props.data)
    return (
      <View style={styleTopListItem.body}>
        {/*背景*/}
        <Image
          ref={(img) => { this.backgroundImage = img; }}
          source={{uri: this.props.data.images.large}}
          style={styleTopListItem.absolute}
          onLoadEnd={this.imageLoaded.bind(this)}
        />
        <BlurView
          style={styleTopListItem.absolute}
          viewRef={this.state.viewRef}
          blurType="dark"
          blurAmount={10}
        />
        {/*前景*/}
        <View
          style={styleTopListItem.layerInfo}
        >
          <Image
            style={styleTopListItem.cover}
            source={{uri: this.props.data.images.large}}
          />
          <View
            style={styleTopListItem.infoGroup}
          >
            <Text style={styleTopListItem.title} numberOfLines={1}>{this.props.data.title}</Text>
            <Text style={styleTopListItem.subTitle} numberOfLines={1}>{this.props.data.original_title} {this.props.data.year}</Text>
            <Text style={styleTopListItem.genres}>{this.props.data.genres.join(' ')}</Text>
            <Stars average={this.props.data.rating.average} />
          </View>
        </View>
      </View>
    )
  };
}

const styleTopListItem = StyleSheet.create({
  body: {
    height: 200,
    position: 'relative'
  },
  absolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  layerInfo: {
    ...this.absolute,
    flexDirection: 'row'
  },
  cover: {
    margin: 10,
    height: 180,
    width: 180 * 270 / 400,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#FFF'
  },
  infoGroup: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  subTitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 10,
    marginTop: 5
  },
  genres: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    marginTop: 5
  }
})



// 列表
export default class extends React.Component {
  constructor (props) {
    super(props);
    // state
    this.state = {
      list: []
    };
    // 请求数据时的设置
    this.fetchSetting = {
      start: 0,
      count: 18
    };
    // 请求数据
    this.getData();
    // 请求结束了 请求不到数据了
    this.end = false;
  };
  // 获取数据
  getData = () => {
    if (this.end) {
      return
    }
    const { start, count } = this.fetchSetting;
    fetch(`${API_LIST}?start=${start}&count=${count}`)
      .then(res => res.json())
      .then(res => {
        const subjects = res.subjects || []
        if (subjects.length > 0) {
          const newData = res.subjects.map(e => ({
            ...e,
            key: String(Math.random() * 10000000000)
          }));
          console.log(newData)
          this.setState({
            list: [...this.state.list, ...newData]
          });
          this.fetchSetting.start += count;
        } else {
          this.end = true
        }
      });
  };
  handleEndReached = () => {
    this.getData();
  };
  render () {
    return (
      <FlatList
        ListEmptyComponent={Loading}
        data={this.state.list}
        onEndReachedThreshold={0.5}
        onEndReached={this.handleEndReached}
        renderItem={({item}) => <TopListItem data={item} />}
      />
    );
  }
};