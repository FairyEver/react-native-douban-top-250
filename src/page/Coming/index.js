import React from 'react';

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
      <MovieList
        type={'coming'}
        url={'https://api.douban.com/v2/movie/coming_soon'}
        onPress={this.handlePress}
      />
    );
  }
};
