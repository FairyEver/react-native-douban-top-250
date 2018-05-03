import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

import Loading from './Loading'

// API地址
const API_LIST = 'https://api.douban.com/v2/movie/top250';



// 列表的每一项
class TopListItem extends React.Component {
  constructor (props) {
    super(props)
  };
  render () {
    return (
      <View style={TopListItemStyles.body}>
        <Image
          style={TopListItemStyles.image}
          source={{uri: this.props.data.images.large}}
        />
        <View style={TopListItemStyles.infoGroup}>
          <Text style={TopListItemStyles.title} numberOfLines={1}>{this.props.data.title}</Text>
          <Text style={TopListItemStyles.genres}>{this.props.data.genres.join(' ')}</Text>
        </View>
      </View>
    )
  };
}
const TopListItemStyles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    width: 27 * 3,
    height: 40 * 3,
    borderRadius: 2
  },
  infoGroup: {
    marginLeft: 10
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center'
  },
  genres: {
    color: '#333',
    fontSize: 10,
    textAlign: 'center'
  }
});



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
            key: Math.random() * 10000000000
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
        style={{marginBottom: 64}}
        numColumns={3}
        ListEmptyComponent={Loading}
        data={this.state.list}
        onEndReachedThreshold={0.5}
        onEndReached={this.handleEndReached}
        renderItem={({item}) => <TopListItem data={item} />}
      />
    );
  }
}