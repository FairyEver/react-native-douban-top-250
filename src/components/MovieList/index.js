import React from 'react';
import {FlatList, View, Text, Image, StyleSheet, findNodeHandle} from 'react-native';
import { BlurView } from 'react-native-blur';

import Loading from '../Loading'

import Stars from '../Stars'

// API地址
const API_LIST = 'https://api.douban.com/v2/movie/top250';

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