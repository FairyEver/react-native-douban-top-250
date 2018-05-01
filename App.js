import React from 'react';
import { View } from 'react-native';
// 样式
import styles from './src/style'
// top250列表
import TopList from './src/components/TopList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TopList />
      </View>
    );
  }
}