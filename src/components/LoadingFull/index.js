import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

export default class LoadingFull extends React.Component {

  static defaultProps = {
    // 默认参数
    text: 'Loading ...'
  };

  render() {
    return (
      <View style={StylesLoadingFull.body}>
        {/*loading*/}
        <ActivityIndicator />
        {/*显示的文字*/}
        <Text style={StylesLoadingFull.text}>
          { this.props.text }
        </Text>
      </View>
    );
  };

};

const StylesLoadingFull = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 10,
    color: '#FFF'
  }
});