import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

// 模糊图片组件
import BlurImage from '../BlurImage'

// 封面和简要信息
import MovieCoverInfo from '../MovieCoverInfo'

// 列表的每一项
export default class TopListItem extends React.Component {

  static defaultProps = {
    //
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
          <MovieCoverInfo movieData={this.props.movieData}/>
        </View>
      </TouchableOpacity>
    )
  };
}
const StylesTopListItem = StyleSheet.create({
  body: {
    height: 200
  },
  absolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
})