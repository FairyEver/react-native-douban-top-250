import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, AlertIOS } from 'react-native';

// 搜索结果页面
import SearchRes from '../SearchRes'

// 公用
import unit from '../../unit'

export default class SearchPage extends React.Component {

  state = {
    searchText: ''
  };

  // 文字改变
  handleTextChange = (text) => {
    this.setState({
      searchText: text
    })
  };

  // 点击了搜索按钮
  handlePressSearchBtn = () => {
    if (this.state.searchText) {
      this.props.navigator.push({
        title: 'SearchRes',
        component: SearchRes,
        passProps: {
          searchText: this.state.searchText
        }
      });
    } else {
      AlertIOS.alert(
        '似乎少了点什么',
        '请问你要搜索什么呢？哪怕一个字也好'
      )
    }
  };

  componentDidMount () {
    console.log(this.props.navigator)
  };

  render() {
    return (
      <View style={StylesSearchPage.body}>
        <View style={StylesSearchPage.contentHeader}>
          <TextInput
            style={StylesSearchPage.textInput}
            autoCorrect={false} // 关闭自动修正
            clearButtonMode={'always'}
            keyboardType={'web-search'} // 键盘类型
            placeholder={'搜索'}
            onChangeText={this.handleTextChange} // 文字改变
            onSubmitEditing={this.handlePressSearchBtn} // 提交
          />
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
    height: 60,
    backgroundColor: unit.COLOR.GREEN
  },
  textInput: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 40,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  contentBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
