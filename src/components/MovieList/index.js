import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, findNodeHandle } from 'react-native';

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
    type: '',
    // 请求数据的地址
    url: '',
    // 地址后缀
    urlSuffix: '',
    // 数据转换函数
    translatorFunction: (data) => data
  };

  constructor (props) {
    super(props);
    // state
    this.state = {
      // 正在请求数据
      loading: false,
      // 列表
      list: []
    };
    // 请求数据时的设置
    this.fetchSetting = {
      start: 0,
      count: 10
    };
    // 请求结束了 请求不到数据了
    this.end = false;
  };

  componentDidMount () {
    // 请求数据
    this.getData();
  };

  // 获取数据
  getData = () => {
    if (this.end) {
      return
    }
    // 开始加载
    this.setState({
      loading: true
    })
    // 获取设置
    const { start, count } = this.fetchSetting;
    const urlSuffix = this.props.urlSuffix
    fetch(`${this.props.url}?start=${start}&count=${count}${urlSuffix}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
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
          // 结束加载
          this.setState({
            loading: false
          });
        } else {
          // 结束加载
          this.end = true;
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false
        });
      })
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

  chooseView = () => {
    if (this.state.list.length > 0) {
      return (
        <FlatList
          refreshing={true}
          ListHeaderComponent={this.props.type ? <Banner type={this.props.type}/> : ''}
          data={this.state.list}
          onEndReachedThreshold={0.5}
          onEndReached={this.handleEndReached}
          renderItem={({item}) => {
            return (
              <MovieListItem movieData={item} onPress={this.handlePress}/>
            )
          }}
        />
      )
    } else if (this.state.list.length === 0 && this.state.loading === true) {
      return (
        <View style={StylesMovieList.card}>
          <Text style={StylesMovieList.cardText}>正在载入</Text>
        </View>
      )
    } else {
      return (
        <View style={StylesMovieList.card}>
          <Text style={StylesMovieList.cardText}>没有数据</Text>
        </View>
      )
    }
  };

  render () {
    return (
      <View style={this.chooseColor()}>
        { this.chooseView() }
      </View>
    );
  }
};

const StylesMovieList = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  top250: {
    flex: 1,
    backgroundColor: unit.COLOR.TOP250
  },
  na: {
    flex: 1,
    backgroundColor: unit.COLOR.PURPLE
  },
  now: {
    flex: 1,
    backgroundColor: unit.COLOR.YELLOW
  },
  coming: {
    flex: 1,
    backgroundColor: unit.COLOR.BLUE
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
})