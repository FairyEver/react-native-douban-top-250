import React from 'react';
import { View, Text, TabBarIOS } from 'react-native';

import unit from '../../unit/index.js';

import PageTop250 from '../PageTop250';

export default class AppIndex extends React.Component {

  state = {
    activeTab: 'top',
    tintColor: unit.COLOR.TOP250
  };

  // 切换tab
  toggleTab = (tabName) => {
    let color = ''
    switch (tabName) {
      case 'top': color = unit.COLOR.TOP250; break;
      case 'new': color = unit.COLOR.PURPLE; break;
      case 'now': color = unit.COLOR.YELLOW; break;
      case 'coming': color = unit.COLOR.BLUE; break;
      default: color = unit.COLOR.GREEN; break;
    };
    this.setState({
      activeTab: tabName,
      tintColor: color
    })
  };

  render () {
    return (
      <View style={{flex: 1}}>
        <TabBarIOS tintColor={this.state.tintColor}>
          <TabBarIOS.Item
            title="TOP250"
            icon={require('../../image/icon/tabbar/fire-normal.png')}
            selectedIcon={require('../../image/icon/tabbar/fire-active.png')}
            selected={this.state.activeTab === 'top'}
            onPress={() => {this.toggleTab('top')}}>
            <PageTop250 navigator={this.props.navigator}/>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="新片榜"
            icon={require('../../image/icon/tabbar/new-normal.png')}
            selectedIcon={require('../../image/icon/tabbar/new-active.png')}
            selected={this.state.activeTab === 'new'}
            onPress={() => {this.toggleTab('new')}}>
            <Text>新片榜</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="正在热映"
            icon={require('../../image/icon/tabbar/now-normal.png')}
            selectedIcon={require('../../image/icon/tabbar/now-active.png')}
            selected={this.state.activeTab === 'now'}
            onPress={() => {this.toggleTab('now')}}>
            <Text>Search</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="即将上映"
            icon={require('../../image/icon/tabbar/coming-normal.png')}
            selectedIcon={require('../../image/icon/tabbar/coming-active.png')}
            selected={this.state.activeTab === 'coming'}
            onPress={() => {this.toggleTab('coming')}}>
            <Text>Search</Text>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="搜索"
            icon={require('../../image/icon/tabbar/search-normal.png')}
            selectedIcon={require('../../image/icon/tabbar/search-active.png')}
            selected={this.state.activeTab === 'search'}
            onPress={() => {this.toggleTab('search')}}>
            <Text>Search</Text>
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }

}
