import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// API地址
const API_PATH = 'https://api.douban.com/v2/movie/subject/';

export default class MovieDetails extends React.Component {

  static defaultProps = {
    // 默认参数 默认是肖申克的救赎 避免出错
    id: '1292052'
  };

  state = {
    // state
  };

  // [生命周期] 准备加载组件
  componentWillMount () {};
  // [生命周期] 组件已经加载完成
  componentDidMount () {
    this.getData()
  };
  // [生命周期] 组件收到新的属性
  componentWillReceiveProps (nextProps) {};
  // [生命周期] 新的属性和状态改变
  shouldComponentUpdate (nextState) {};
  // [生命周期] 组件状态或者属性改变
  componentWillUpdate () {};
  // [生命周期] 调用了 render() 更新完成界面
  componentDidUpdate () {};
  // [生命周期] 要被从界面上移除
  componentWillUnmount () {};

  // 获取数据
  getData = () => {
    fetch(`${API_PATH}${this.props.id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
      });
  };

  render() {
    return (
      <View style={StylesMovieDetails.body}>
        <Text>
          new react native file
        </Text>
      </View>
    );
  }
};

const StylesMovieDetails = StyleSheet.create({
  body: {
    flex: 1
  }
})