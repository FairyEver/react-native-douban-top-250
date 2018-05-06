import React from 'react';
import { View, StyleSheet, NavigatorIOS } from 'react-native';

// 首页
import AppIndex from './src/page/AppIndex'

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={{
          title: '全球电影精享',
          component: AppIndex
        }}>
      </NavigatorIOS>
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
})