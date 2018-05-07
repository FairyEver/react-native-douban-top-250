import React from 'react';
import {View, Text, Image, StyleSheet, findNodeHandle} from 'react-native';
import { BlurView } from 'react-native-blur';

import Rating from '../Rating'

// 列表的每一项
export default class TopListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewRef: null };
  };
  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  };
  render () {
    return (
      <View style={styleTopListItem.body}>
        {/*背景*/}
        <Image
          ref={(img) => { this.backgroundImage = img; }}
          source={{uri: this.props.data.images.large}}
          style={styleTopListItem.absolute}
          onLoadEnd={this.imageLoaded.bind(this)}
        />
        <BlurView
          style={styleTopListItem.absolute}
          viewRef={this.state.viewRef}
          blurType="dark"
          blurAmount={10}
        />
        {/*前景*/}
        <View
          style={styleTopListItem.layerInfo}
        >
          <Image
            style={styleTopListItem.cover}
            source={{uri: this.props.data.images.large}}
          />
          <View
            style={styleTopListItem.infoGroup}
          >
            <Text style={styleTopListItem.title} numberOfLines={1}>
              {this.props.data.title}
            </Text>
            <Text style={styleTopListItem.subTitle} numberOfLines={1}>
              {this.props.data.original_title} {this.props.data.year}
            </Text>
            <Text style={styleTopListItem.genres}>
              {this.props.data.genres.join(' ')}
            </Text>
            <Rating
              average={this.props.data.rating.average}
              stars={Number(this.props.data.rating.stars)}
            />
          </View>
        </View>
      </View>
    )
  };
}

const styleTopListItem = StyleSheet.create({
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