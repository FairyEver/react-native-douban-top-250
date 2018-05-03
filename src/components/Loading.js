import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator  } from 'react-native';

// 列表为空的时候显示的组件
export default class extends React.Component {
  constructor (props) {
    super(props);
  };
  render () {
    return (
      <View style={LoadingStyles.body}>
        <ActivityIndicator />
      </View>
    )
  }
};

const LoadingStyles = StyleSheet.create({
  body: {
    marginTop: 100
  }
});