import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

// 公用
import unit from '../../unit'

// 电影列表
import MovieList from '../../components/MovieList'

// 电影详情页
import MovieDetails from '../MovieDetails'

export default class SearchRes extends React.Component {

  // 点击了列表上某项
  handlePress = (movieData) => {
    this.props.navigator.push({
      title: movieData.title,
      component: MovieDetails,
      passProps: {
        movieData: movieData
      }
    })
  };

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
          <MovieList
            url={'https://api.douban.com/v2/movie/search'}
            urlSuffix={`&q=${this.props.searchText}`}
            onPress={this.handlePress}
          />
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
    height: 50,
    backgroundColor: unit.COLOR.GREEN,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentHeaderBackBth: {
    position: 'absolute',
    top: 0,
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
