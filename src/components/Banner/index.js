import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import unit from '../../unit/index.js';

export default class Banner extends React.Component {

  static defaultProps = {
    // 默认参数
  };

  state = {
    // state
  };

  render() {
    return (
      <View style={StylesBanner.bodyTop250}>
        <Image source={require('../../image/banner/top250.png')}></Image>
      </View>
    );
  };
};

const StylesBanner = StyleSheet.create({
  bodyTop250: {
    height: 100,
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: unit.COLOR.TOP250
  }
});