import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, WebView } from 'react-native';

// 模糊图片组件
import BlurImage from '../../components/BlurImage'

export default class MovieDetailsWeb extends React.Component {

  static defaultProps = {
    movieData: {}
  };

  // 点击返回按钮
  handleClickBack = () => {
    this.props.navigator.pop()
  };

  jsCode = `
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js";
    document.body.appendChild(script);
    $(function () {
      // 隐藏 header
      $('#subject_page > header').hide();
      // 隐藏 封面下面的两个按钮
      $('#status').hide();
      // 隐藏 星星
      $('#base > div.r > p').css({
        fontSize: '20px'
      }).text('${this.props.movieData.title}');
      // 封面下边距调整
      $('#base > div.cover').css({ marginBottom: '0px' });
      // 信息区域上边距调整
      $('#intro').css({  marginTop: '10px' });
      // 整体页面容器样式调整
      $('#subject_page').css({ marginBottom: '0px' });
      // body调整 增加下面的留白
      $('body').css({
         paddingTop: '0px',
         paddingBottom: '48px',
         backgroundColor: 'rgba(0, 0, 0, 0)'
      });
      // 隐藏最下面的两个链接
      $('#hot > section:nth-child(5)').hide()
      $('#hot > section:nth-child(6)').hide()
      $('#base > div.r').css({ color: '#FFF' })
      $('#base > div.cover').css({ border: '1px solid #FFF' })
    })
  `

  render() {
    return (
      <View style={StylesMovieDetailsWeb.body}>
        {/*背景层*/}
        <View style={StylesMovieDetailsWeb.absolute}>
          <BlurImage uri={this.props.movieData.images.large}/>
        </View>
        {/*内容层*/}
        <View style={StylesMovieDetailsWeb.container}>
          <WebView
            style={StylesMovieDetailsWeb.containerWeb}
            scalesPageToFit={false}
            source={{uri: this.props.movieData.mobile_url}}
            injectedJavaScript={this.jsCode}
          />
        </View>
        <View style={StylesMovieDetailsWeb.footer}>
          <TouchableOpacity onPress={this.handleClickBack}>
            <View style={StylesMovieDetailsWeb.footerBtn}>
              <Image source={require('../../image/icon/btn/back.png')}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleClickBack}>
            <View style={StylesMovieDetailsWeb.footerBtnText}>
              <Text style={StylesMovieDetailsWeb.footerBtnTextText}>原始网页</Text>
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
  containerWeb: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  // footer
  footer: {
    position: 'absolute',
    height: 48,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerBtn: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerBtnText: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
  footerBtnTextText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)'
  }
})