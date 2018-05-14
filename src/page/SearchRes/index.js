import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

// 公用
import unit from '../../unit'

export default class SearchRes extends React.Component {

  // 点击返回按钮
  handleClickBack = () => {
    this.props.navigator.pop()
  };

  render() {
    return (
      <View style={StylesSearchRes.body}>
        <View style={StylesSearchRes.contentHeader}>
          <TouchableOpacity
            style={StylesSearchRes.contentHeaderBackBth}
            onPress={this.handleClickBack}>
            <Image source={require('../../image/icon/btn/back.png')}/>
          </TouchableOpacity>
          <Text style={StylesSearchRes.contentHeaderTitle}>搜索结果</Text>
        </View>
        <View style={StylesSearchRes.ContentBody}>
          <Text>ContentBody</Text>
        </View>
      </View>
    );
  }
};
const StylesSearchRes = StyleSheet.create({
  body: {
    flex: 1
  },
  contentHeader: {
    paddingTop: 20,
    height: 70,
    backgroundColor: unit.COLOR.GREEN,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentHeaderBackBth: {
    position: 'absolute',
    top: 20,
    left: 0,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentHeaderTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFF'
  },
  ContentBody: {
    flex: 1
  }
})
