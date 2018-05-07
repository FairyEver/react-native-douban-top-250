import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import Rating from '../Rating'

import BlurImage from '../BlurImage'

// 列表的每一项
export default class TopListItem extends React.Component {

  static defaultProps = {
    // 模式 默认是列表模式 还可以是 header
    // header 模式下没有背景图
    mode: 'list'
  };

  // 当点击了这项后
  handlePress = (MovieData) => {
    if (this.props.onPress) {
      this.props.onPress(MovieData)
    }
  };

  render () {
    return (
      <TouchableOpacity onPress={() => {this.handlePress(this.props.movieData)}} activeOpacity={0.9}>
        <View style={StylesTopListItem.body}>
          <View style={StylesTopListItem.absolute}>
            <BlurImage uri={this.props.movieData.images.large}></BlurImage>
          </View>
          {/*信息层*/}
          <View style={StylesTopListItem.layerInfo}>
            <Image
              style={StylesTopListItem.cover}
              source={{uri: this.props.movieData.images.large}}
            />
            <View style={StylesTopListItem.infoGroup}>
              <Text style={StylesTopListItem.title} numberOfLines={1}>
                {this.props.movieData.title}
              </Text>
              <Text style={StylesTopListItem.subTitle} numberOfLines={1}>
                {this.props.movieData.original_title} {this.props.movieData.year}
              </Text>
              <Text style={StylesTopListItem.genres}>
                {this.props.movieData.genres.join(' ')}
              </Text>
              <Rating average={this.props.movieData.rating.average} stars={Number(this.props.movieData.rating.stars)}/>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  };
}
const StylesTopListItem = StyleSheet.create({
  body: {
    height: 200,
    position: 'relative'
  },
  absolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  layerInfo: {
    ...this.absolute,
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
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10
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
  }
})