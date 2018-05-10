import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, findNodeHandle } from 'react-native';
import { BlurView } from 'react-native-blur';

// 加载
import Loading from '../Loading'

// 顶部导航
import Banner from '../Banner'

// 列表项目
import MovieListItem from '../MovieListItem'

// 公用
import unit from "../../unit";

// 列表
export default class MovieList extends React.Component {

  static defaultProps = {
    // 是哪个列表
    type: 'top250',
    // 请求数据的地址
    url: '',
    // 数据转换函数
    translatorFunction: (data) => data
  };

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
    fetch(`${this.props.url}?start=${start}&count=${count}`)
      .then(res => res.json())
      .then(res => {
        // 在参数里传递进来数据转换方法
        const subjects = this.props.translatorFunction(res.subjects || []);
        if (subjects.length > 0) {
          // 加上 key
          const newData = subjects.map(e => ({
            ...e,
            key: String(Math.random() * 10000000000)
          }));
          this.setState({
            list: [...this.state.list, ...newData]
          });
          this.fetchSetting.start += count;
        } else {
          this.end = true;
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
      this.props.onPress(MovieData);
    }
  };

  chooseColor = () => {
    switch (this.props.type) {
      case 'top250': return  StylesMovieList.top250; break;
      case 'na': return  StylesMovieList.na; break;
      case 'now': return  StylesMovieList.now; break;
      case 'coming': return  StylesMovieList.coming; break;
      default: return StylesMovieList.default; break;
    }
  };

  render () {
    return (
      <FlatList
        style={this.chooseColor()}
        ListEmptyComponent={Loading}
        ListHeaderComponent={<Banner type={this.props.type}/>}
        data={this.state.list}
        onEndReachedThreshold={0.5}
        onEndReached={this.handleEndReached}
        renderItem={({item}) => {
          return (
            <MovieListItem movieData={item} onPress={this.handlePress}/>
          )
        }}
      />
    );
  }
};

const StylesMovieList = StyleSheet.create({
  default: {
    backgroundColor: '#FFF'
  },
  top250: {
    backgroundColor: unit.COLOR.TOP250
  },
  na: {
    backgroundColor: unit.COLOR.PURPLE
  },
  now: {
    backgroundColor: unit.COLOR.YELLOW
  },
  coming: {
    backgroundColor: unit.COLOR.BLUE
  }
})