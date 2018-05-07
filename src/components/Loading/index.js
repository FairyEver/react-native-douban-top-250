import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator  } from 'react-native';

// 列表为空的时候显示的组件
export default class Loading extends React.Component {
  constructor (props) {
    super(props);
  };
  render () {
    return (
      <View style={StylesLoading.body}>
        <ActivityIndicator />
        <Text>loading</Text>
      </View>
    )
  }
};

const StylesLoading = StyleSheet.create({
  body: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});