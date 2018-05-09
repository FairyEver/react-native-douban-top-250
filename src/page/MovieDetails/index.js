import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

// 居中显示的 loading 组件
import LoadingFull from '../../components/LoadingFull'

// 模糊图片组件
import BlurImage from '../../components/BlurImage'

// 封面和简要信息
import MovieCoverInfo from '../../components/MovieCoverInfo'

export default class MovieDetails extends React.Component {

  static defaultProps = {
    // movieData 一定要包含 id
    movieData: {}
  };

  state = {
    // 正在请求数据
    loading: false,
    // 请求到的数据
    data: {}
  };

  // 获取数据
  getData = () => {
    // 设置为加载中状态
    this.setState({
      loading: true
    });
    // 开始请求数据
    fetch(`https://api.douban.com/v2/movie/subject/${this.props.movieData.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          loading: false,
          data: res
        });
      });
  };

  // [生命周期] 组件已经加载完成
  componentDidMount () {
    // 获取数据
    this.getData();
  };

  handleClickBack = () => {
    console.log(this.props)
    this.props.navigator.pop()
  };

  render() {
    return (
      <View style={StylesMovieDetails.body}>
        {/*背景层*/}
        <View style={StylesMovieDetails.absolute}>
          <BlurImage uri={this.props.movieData.images.large}/>
        </View>
        {/*内容层*/}
        <View style={StylesMovieDetails.container}>
          {/*标题*/}
          <View style={StylesMovieDetails.containerHeader}>
            <MovieCoverInfo movieData={this.props.movieData}/>
          </View>
          {/*下面的内容区域*/}
          <View style={StylesMovieDetails.containerBody}>
            {
              this.state.loading ?
              <LoadingFull /> :
              <ScrollView style={StylesMovieDetails.containerBodyScrollView}>
                <View>
                  {
                    (this.state.data.summary || '').split('\n').map(e => {
                      return <Text key={e} style={StylesMovieDetails.containerSummary}>        { e }</Text>
                    })
                  }
                </View>
              </ScrollView>
            }
          </View>
        </View>
        <TouchableOpacity onPress={this.handleClickBack}>
          <View style={StylesMovieDetails.footer}>
            <Text style={StylesMovieDetails.footerText}>返回</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

const StylesMovieDetails = StyleSheet.create({
  body: {
    flex: 1,
    position: 'relative',
    marginTop: 20
  },
  absolute: {
    position: 'absolute',
    top: -50,
    bottom: -10,
    left: -10,
    right: -10
  },
  // 页面
  container: {
    flex: 1
  },
  // 页面头部
  containerHeader: {
    height: 200
  },
  // 页面容器 主要的内容在这里
  containerBody: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderTopColor: 'rgba(255, 255, 255, 0.4)',
    borderTopWidth: 0.5
  },
  containerBodyScrollView: {
    flex: 1,
    padding: 10
  },
  containerSummary: {
    color: '#FFF'
  },
  // 页面容器 主要的内容在这里
  footer: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderTopColor: 'rgba(255, 255, 255, 0.5)',
    borderTopWidth: 0.5
  },
  footerText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.5)'
  }
})