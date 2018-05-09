import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

// 模糊图片组件
import BlurImage from '../../components/BlurImage'

import WebView from '../../components/WebView'

export default class MovieDetailsWeb extends React.Component {

  static defaultProps = {
    movieData: {}
  };

  // 点击返回按钮
  handleClickBack = () => {
    this.props.navigator.pop()
  };

  render() {
    return (
      <View style={StylesMovieDetailsWeb.body}>
        {/*背景层*/}
        <View style={StylesMovieDetailsWeb.absolute}>
          <BlurImage uri={this.props.movieData.images.large}/>
        </View>
        {/*内容层*/}
        <View style={StylesMovieDetailsWeb.container}>
          <WebView url={this.props.movieData.mobile_url}></WebView>
        </View>
        <View style={StylesMovieDetailsWeb.footer}>
          <TouchableOpacity onPress={this.handleClickBack}>
            <View style={StylesMovieDetailsWeb.footerBtn}>
              <Image source={require('../../image/icon/btn/back.png')}></Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const StylesMovieDetailsWeb = StyleSheet.create({
  body: {
    flex: 1
  },
  absolute: {
    position: 'absolute',
    top: -50,
    bottom: -10,
    left: -10,
    right: -10
  },
  // 页面
  container: {
    flex: 1
  },
  // footer
  footer: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerBtn: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  }
})