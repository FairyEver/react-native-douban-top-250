import React from 'react';
import { StyleSheet, View, Text, Image, findNodeHandle } from 'react-native';
import { BlurView } from 'react-native-blur';

// 模糊图片组件
import BlurImage from '../../components/BlurImage'

// API地址
const API_PATH = 'https://api.douban.com/v2/movie/subject/';

export default class MovieDetails extends React.Component {

  static defaultProps = {
    movieData: {}
  };

  state = {
    viewRef: null,
    loaded: false,
    data: {}
  };

  // 获取数据
  getData = () => {
    fetch(`${API_PATH}${this.props.movieData.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res
        })
        this.setState({
          loaded: true
        })
        console.log(res)
      });
  };

  imageLoaded = () => {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  };

  // [生命周期] 组件已经加载完成
  componentDidMount () {
    this.getData()
  };

  render() {
    return (
      <View style={StylesMovieDetails.body}>
        {/*背景层*/}
        <View style={StylesMovieDetails.absolute}>
          <BlurImage uri={this.props.movieData.images.large}/>
        </View>
        {/*内容层*/}
        <View style={StylesMovieDetails.containerHeader}>

        </View>
        <View style={StylesMovieDetails.container}>
          <View style={StylesMovieDetails.containerHeader}></View>
          <View style={StylesMovieDetails.containerBody}></View>
        </View>
      </View>
    );
  }
};

const StylesMovieDetails = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 60,
    position: 'relative'
  },
  absolute: {
    position: 'absolute',
    top: -50,
    bottom: -50,
    left: -50,
    right: -50
  },
  container: {
    flex: 1,
    marginTop: 60
  },
  containerHeader: {
    height: 200
  },
  containerBody: {
    flex: 1
  }
})