import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 最外层的容器
  container: {
    flex: 1,
    marginTop: 20,
  },
  // 首页列表
  topListContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#fff',
  },
  // 首页列表里的列表项目
  topListItem: {
    flex: 1,
    margin: 5,
  },
  // 首页列表项目里的图片
  topListItemImage: {
    height: 160,
    borderRadius: 2
  },
  topListItemTitle: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});