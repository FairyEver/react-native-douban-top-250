import React from 'react';
import { StyleSheet, View, Text, WebView  } from 'react-native';

// 列表为空的时候显示的组件
export default class WebViewComponent extends React.Component {

  static defaultProps = {
    url: 'http://www.baidu.com'
  };

  constructor (props) {
    super(props);
  };

  jsCode = `
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js";
    document.body.appendChild(script);
    $(function () {
      $('#subject_page > header').hide();
      $('body').css({
         paddingTop: '0px'
      });
      $('#subject_page').css({
         marginBottom: '0px'
      });
    })
  `

  render () {
    return (
      <View style={StylesWebViewComponent.body}>
        <WebView
          style={StylesWebViewComponent.body}
          scalesPageToFit={false}
          source={{uri: this.props.url}}
          injectedJavaScript={this.jsCode}
        />
      </View>
    )
  };

};

const StylesWebViewComponent = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }
});