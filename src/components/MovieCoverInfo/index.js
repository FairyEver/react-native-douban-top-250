import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

// 星星和评分
import Rating from '../Rating'

// 公用
import unit from "../../unit";

export default class MovieCoverInfo extends React.Component {

  static defaultProps = {
    // 默认参数
  };

  state = {
    // state
  };

  starsTransformer = (stars) => {
    const [a, b] = stars;
    const starsNumber = Number(a) * 10 - (b === '0' ? 5 : 0)
    return starsNumber > 0 ? starsNumber : 0
  };

  componentDidMount () {
    console.log(this.props.movieData)
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
          {/*票房*/}
          { this.props.movieData.box ?
            <View style={StylesMovieCoverInfo.boxRow}>
              <View style={StylesMovieCoverInfo.box}>
                <Text style={StylesMovieCoverInfo.boxText}>
                  { this.props.movieData.box } 票房
                </Text>
              </View>
            </View> : ''
          }
          {/*星星*/}
          <Rating average={this.props.movieData.rating.average} stars={this.starsTransformer(this.props.movieData.rating.stars)}/>
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
  boxRow: {
    marginTop: 5,
    alignItems: 'flex-start'
  },
  box: {
    height: 14,
    borderRadius: 2,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: unit.COLOR.STRA,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxText: {
    color: '#000',
    fontSize: 10,
    fontWeight: 'bold'
  },
  casts: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 10,
    marginTop: 5
  }
})