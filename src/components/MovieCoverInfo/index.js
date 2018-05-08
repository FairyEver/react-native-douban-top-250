import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

// 星星和评分
import Rating from '../Rating'

export default class MovieCoverInfo extends React.Component {

  static defaultProps = {
    // 默认参数
  };

  state = {
    // state
  };

  render() {
    return (
      <View style={StylesMovieCoverInfo.body}>
        <Image
          style={StylesMovieCoverInfo.cover}
          source={{uri: this.props.movieData.images.large}}
        />
        <View style={StylesMovieCoverInfo.infoGroup}>
          <Text style={StylesMovieCoverInfo.title} numberOfLines={1}>
            {this.props.movieData.title}
          </Text>
          <Text style={StylesMovieCoverInfo.subTitle} numberOfLines={1}>
            {this.props.movieData.original_title} ( {this.props.movieData.year} )
          </Text>
          <Text style={StylesMovieCoverInfo.genres}>
            {this.props.movieData.genres.join(' ')}
          </Text>
          <Rating average={this.props.movieData.rating.average} stars={Number(this.props.movieData.rating.stars)}/>
          {/*主演*/}
          <Text style={StylesMovieCoverInfo.casts}>{ this.props.movieData.casts.map(e => e.name).join(' | ') }</Text>
        </View>
      </View>
    );
  }
};

const StylesMovieCoverInfo = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row'
  },
  cover: {
    margin: 10,
    height: 180,
    width: 180 * 270 / 400,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#FFF'
  },
  infoGroup: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  subTitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 10,
    marginTop: 5
  },
  genres: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    marginTop: 5
  },
  casts: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 10,
    marginTop: 5
  }
})