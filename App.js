import React from 'react';
import { StyleSheet, View, NavigatorIOS } from 'react-native';
// top250列表
import TopList from './src/components/TopList'

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: TopList,//要跳转的板块
          title: '经典电影排行',
          leftButtonTitle:'左边',   // 实例化左边按钮
          onLeftButtonPress:() => {alert('左边')},  // 左边按钮点击事件
          rightButtonTitle:'右边',  // 实例化右边按钮
          onRightButtonPress:() => {alert('右边')} , // 右边按钮点击事件
          //当然图片设置的方式也是一样的，只需要调用 leftButtonIcon 和 'rightButtonIcon` 即可
        }}
        renderScene={(route,navigator) => {
          let Component = route.component; // 获取路由内的板块
          return <Component {...route.params} navigator={navigator} /> // 根据板块生成具体组件
        }}
        //属性
        // navigationBarHidden={true}      // 隐藏导航栏
        shadowHidden={true} // 隐藏导航栏下面的阴影
        tintColor='#333' // 按钮的颜色
        titleTextColor='#333' // 导航栏标题的文字颜色
        translucent={false} // 决定导航栏是否半透明(注：当不半透明时页面会向下移动导航栏等高的距离,以防止内容被遮盖)
        interactivePopGestureEnabled={false} // 决定是否启用滑动返回手势
        style={{flex:1}} // 此项不设置,创建的导航控制器只能看见导航条而看不到界面
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});