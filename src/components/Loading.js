import React from 'react';
import { StyleSheet, View, Text  } from 'react-native';
import { Spinner } from 'native-base';

// 列表为空的时候显示的组件
export default class extends React.Component {
  constructor (props) {
    super(props);
  };
  render () {
    return (
      <View style={LoadingStyles.body}>
        <Spinner color="#333" />
      </View>
    )
  }
}

const LoadingStyles = StyleSheet.create({
  body: {
    marginTop: 100
  }
})