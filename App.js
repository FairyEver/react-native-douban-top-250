import React from 'react';
import { View, StyleSheet, StatusBar, NavigatorIOS } from 'react-native';

// 首页
import AppIndex from './src/page/AppIndex'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <StatusBar
          // hidden={true}
          barStyle={'light-content'}
        />
        <NavigatorIOS
          style={styles.navigator}
          // barTintColor={'#000'}
          // titleTextColor={'#FFF'}
          interactivePopGestureEnabled={true}
          navigationBarHidden={true}
          initialRoute={{
            title: '全球电影精享',
            component: AppIndex
          }}>
        </NavigatorIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  navigator: {
    flex: 1
  }
})