import React from 'react';
import { StyleSheet, View, Text, Image, findNodeHandle } from 'react-native';
import { BlurView } from 'react-native-blur';

// API地址
const API_PATH = 'https://api.douban.com/v2/movie/subject/';

export default class MovieDetails extends React.Component {

  static defaultProps = {
    // 默认参数 默认是肖申克的救赎 避免出错
    id: '1292052',
    image: ''
  };

  state = {
    viewRef: null,
    loaded: false,
    data: {}
  };

  // 获取数据
  getData = () => {
    fetch(`${API_PATH}${this.props.id}`)
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
        <Image
          ref={(img) => { this.backgroundImage = img; }}
          source={{uri: this.props.image}}
          style={StylesMovieDetails.absolute}
          onLoadEnd={this.imageLoaded.bind(this)}
        />
        <BlurView
          style={StylesMovieDetails.absolute}
          viewRef={this.state.viewRef}
          blurType="dark"
          blurAmount={10}
        />
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
    height: 200,
    backgroundColor: '#333'
  },
  containerBody: {
    flex: 1,
    backgroundColor: '#666'
  }
})