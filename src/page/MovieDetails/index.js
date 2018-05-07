import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={{marginTop: 100}}>
          {this.props.id}
        </Text>
      </View>
    );
  }
};
