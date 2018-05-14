import React from 'react';
import { View, StyleSheet } from 'react-native';

// 电影列表
import MovieList from '../../components/MovieList'

// 电影详情页
import MovieDetails from '../MovieDetails'

export default class Coming extends React.Component {
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
  render() {
    return (
      <View style={Styles.body}>
        <MovieList
          type={'coming'}
          url={'https://api.douban.com/v2/movie/coming_soon'}
          onPress={this.handlePress}
        />
      </View>
    );
  }
};
const Styles = StyleSheet.create({
  body: {
    flex: 1,
    marginBottom: 49
  }
});
