import React from 'react';
import { Text, TabBarIOS } from 'react-native';

export default class PageTabBar extends React.Component {
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
          icon={require('../../image/icon/tabbar/fire-normal.png')}
          selectedIcon={require('../../image/icon/tabbar/fire-active.png')}
          selected={this.state.activeTab === 'top'}
          onPress={() => {this.setState({activeTab: 'top'})}}
        >
          <Text style={{marginTop: 100}}>TOP250</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="新片榜"
          icon={require('../../image/icon/tabbar/new-normal.png')}
          selectedIcon={require('../../image/icon/tabbar/new-active.png')}
          selected={this.state.activeTab === 'new'}
          onPress={() => {this.setState({activeTab: 'new'})}}
        >
          <Text>新片榜</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="正在热映"
          icon={require('../../image/icon/tabbar/now-normal.png')}
          selectedIcon={require('../../image/icon/tabbar/now-active.png')}
          selected={this.state.activeTab === 'now'}
          onPress={() => {this.setState({activeTab: 'now'})}}
        >
          <Text>Search</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="即将上映"
          icon={require('../../image/icon/tabbar/coming-normal.png')}
          selectedIcon={require('../../image/icon/tabbar/coming-active.png')}
          selected={this.state.activeTab === 'coming'}
          onPress={() => {this.setState({activeTab: 'coming'})}}
        >
          <Text>Search</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="搜索"
          icon={require('../../image/icon/tabbar/search-normal.png')}
          selectedIcon={require('../../image/icon/tabbar/search-active.png')}
          selected={this.state.activeTab === 'search'}
          onPress={() => {this.setState({activeTab: 'search'})}}
        >
          <Text>Search</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}