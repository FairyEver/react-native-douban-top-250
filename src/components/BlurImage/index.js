import React from 'react';
import { StyleSheet, View, Image, findNodeHandle} from 'react-native';
import { BlurView } from 'react-native-blur';

// 列表的每一项
export default class BlurImage extends React.Component {

  static defaultProps = {
    uri: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      viewRef: null
    };
  };

  imageLoaded = () => {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  };

  render () {
    return (
      <View style={StyleBlurImage.body}>
        <Image
          ref={(img) => { this.backgroundImage = img; }}
          source={{uri: this.props.uri}}
          style={StyleBlurImage.absolute}
          onLoadEnd={this.imageLoaded.bind(this)}
        />
        <BlurView
          style={StyleBlurImage.absolute}
          viewRef={this.state.viewRef}
          blurType="dark"
          blurAmount={10}
        />
      </View>
    )
  };
}
const StyleBlurImage = StyleSheet.create({
  body: {
    flex: 1,
    position: 'relative'
  },
  absolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
})