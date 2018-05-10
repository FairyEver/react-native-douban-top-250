import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import unit from '../../unit/index.js';

export default class Banner extends React.Component {

  static defaultProps = {
    // 默认参数
    type: 'top250'
  };

  state = {
    // state
  };

  chooseBanner = () => {
    switch (this.props.type) {
      case 'top250': return (
        <View style={StylesBanner.top250}>
          <Image source={require('../../image/banner/top250.png')}></Image>
        </View>
      ); break;
      case 'na': return (
        <View style={StylesBanner.na}>
          <Image source={require('../../image/banner/na-rankings.png')}></Image>
        </View>
      ); break;
      default: return ''; break;
    }
  };

  render() {
    return(
      <View style={StylesBanner.body}>
        {
          this.chooseBanner()
        }
      </View>
    )
  };
};
const pub = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}

const StylesBanner = StyleSheet.create({
  body: {
    height: 100,
    marginTop: -20,
  },
  top250: {
    ...pub,
    backgroundColor: unit.COLOR.TOP250
  },
  na: {
    ...pub,
    backgroundColor: unit.COLOR.PURPLE
  }
});