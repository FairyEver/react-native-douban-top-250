import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, WebView } from 'react-native';

export default class MovieDetailsWeb extends React.Component {

  static defaultProps = {
    url: 'https://www.baidu.com'
  };

  // 点击返回按钮
  handleClickBack = () => {
    this.props.navigator.pop()
  };

  render() {
    return (
      <View style={StylesBrowser.body}>
        {/*内容层*/}
        <View style={StylesBrowser.container}>
          <WebView
            style={StylesBrowser.containerWeb}
            source={{uri: this.props.url}}
          />
        </View>
        <View style={StylesBrowser.footer}>
          <TouchableOpacity onPress={this.handleClickBack}>
            <View style={StylesBrowser.footerBtn}>
              <Image source={require('../../image/icon/btn/back.png')}></Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const StylesBrowser = StyleSheet.create({
  body: {
    flex: 1
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
  }
})