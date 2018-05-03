import React from 'react';
import { StyleSheet, View, Text, TabBarIOS } from 'react-native';

import base64Icon from './src/icon'

import PageTop from './src/page/Top'

import PageNewMovie from './src/page/NewMovie'

export default class App extends React.Component {
  state = {
    activeTab: 'top'
  };
  render() {
    return (
      <TabBarIOS
        tintColor="#FF0066"
      >
        <TabBarIOS.Item
          title="TOP250"
          icon={require('./src/image/icon/tabbar/fire-normal.png')}
          selectedIcon={require('./src/image/icon/tabbar/fire-active.png')}
          selected={this.state.activeTab === 'top'}
          onPress={() => {this.setState({activeTab: 'top'})}}
        >
          <PageTop />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="新片榜"
          icon={require('./src/image/icon/tabbar/new-normal.png')}
          selectedIcon={require('./src/image/icon/tabbar/new-active.png')}
          selected={this.state.activeTab === 'new'}
          onPress={() => {this.setState({activeTab: 'new'})}}
        >
          <PageNewMovie />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="正在热映"
          icon={require('./src/image/icon/tabbar/now-normal.png')}
          selectedIcon={require('./src/image/icon/tabbar/now-active.png')}
          selected={this.state.activeTab === 'now'}
          onPress={() => {this.setState({activeTab: 'now'})}}
        >
          <Text>Search</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="即将上映"
          icon={require('./src/image/icon/tabbar/coming-normal.png')}
          selectedIcon={require('./src/image/icon/tabbar/coming-active.png')}
          selected={this.state.activeTab === 'coming'}
          onPress={() => {this.setState({activeTab: 'coming'})}}
        >
          <Text>Search</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="搜索"
          icon={require('./src/image/icon/tabbar/search-normal.png')}
          selectedIcon={require('./src/image/icon/tabbar/search-active.png')}
          selected={this.state.activeTab === 'search'}
          onPress={() => {this.setState({activeTab: 'search'})}}
        >
          <Text>Search</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
});