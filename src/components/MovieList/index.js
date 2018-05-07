import React from 'react';
import {FlatList, View, Text, Image, StyleSheet, findNodeHandle} from 'react-native';
import { BlurView } from 'react-native-blur';

import Loading from '../Loading'

import MovieListItem from '../MovieListItem'

// API地址
const API_LIST = 'https://api.douban.com/v2/movie/top250';

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
      count: 10
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
  // 滚动到底部了
  handleEndReached = () => {
    this.getData();
  };
  // 列表项目被点击了 继续向上一层传播
  handlePress = (MovieData) => {
    if (this.props.onPress) {
      this.props.onPress(MovieData)
    }
  };
  render () {
    return (
      <FlatList
        ListEmptyComponent={Loading}
        data={this.state.list}
        onEndReachedThreshold={0.5}
        onEndReached={this.handleEndReached}
        renderItem={({item}) => {
          return (
            <MovieListItem data={item} onPress={this.handlePress}/>
          )
        }}
      />
    );
  }
};