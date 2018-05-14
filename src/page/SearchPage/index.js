import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

// 搜索结果页面
import SearchRes from '../SearchRes'

// 公用
import unit from '../../unit'

export default class SearchPage extends React.Component {
  handlePressSearchBtn = () => {
    this.props.navigator.push({
      title: 'SearchRes',
      component: SearchRes,
      passProps: {}
    });
  };
  render() {
    return (
      <View style={StylesSearchPage.body}>
        <View style={StylesSearchPage.contentHeader}>
          <View style={StylesSearchPage.textInputGroup}>
            <TextInput
              style={StylesSearchPage.textInput}
              autoCorrect={false} // 关闭自动修正
              keyboardType={'web-search'} // 键盘类型
              placeholder={'搜索'}
              onChangeText={(text) => console.log(text)}
            />
            <TouchableOpacity onPress={this.handlePressSearchBtn} style={StylesSearchPage.textInputBtn}>
              <Image source={require('../../image/icon/page/search/search-btn-icon.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={StylesSearchPage.contentBody}>
          <Text>搜索历史功能将会在以后更新</Text>
        </View>
      </View>
    );
  }
};
const StylesSearchPage = StyleSheet.create({
  body: {
    flex: 1
  },
  contentHeader: {
    paddingTop: 20,
    backgroundColor: unit.COLOR.GREEN
  },
  textInputGroup: {
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 40,
    margin: 10,
    marginRight: 0,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  textInputBtn: {
    width: 40,
    backgroundColor: '#FFF',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  contentBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
