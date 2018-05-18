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
          interactivePopGestureEnabled={true}
          navigationBarHidden={false}
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
    flex: 1,
    backgroundColor: '#000'
  },
  navigator: {
    flex: 1,
    marginTop: 20
  }
})