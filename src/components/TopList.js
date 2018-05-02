import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';
// 样式
import styles from '../style'

// API地址
const API_LIST = 'https://api.douban.com/v2/movie/top250?start=0&count=9';

// 列表为空的时候显示的组件
const EmptyDisplay = () => {
  return (
    <Text>正在载入</Text>
  );
}

// 列表的每一项
class ListItem extends React.Component {
  constructor (props) {
    super(props)
  };
  render () {
    console.log(this.props.data.images.large)
    return (
      <View style={styles.topListItem}>
        <Image
          style={styles.topListItemImage}
          resizeMode="cover"
          source={{uri: this.props.data.images.large}}
        />
        <Text
          style={styles.topListItemTitle}
          numberOfLines={1}
        >
          {this.props.data.title}
        </Text>
      </View>
    )
  };
}

// 列表
export default class extends React.Component {
  constructor (props) {
    super(props);
    this.getData();
    this.state = {
      list: []
    };
  };
  // 获取数据
  getData = () => {
    fetch(API_LIST)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          list: res.subjects.map(e => ({
            ...e,
            key: e.title
          }))
        })
      });
  };
  render() {
    return (
      <View style={styles.topListContainer}>
        <FlatList
          numColumns={3}
          ListEmptyComponent={EmptyDisplay}
          data={this.state.list}
          renderItem={({item}) => <ListItem data={item} />}
        />
      </View>
    );
  }
}