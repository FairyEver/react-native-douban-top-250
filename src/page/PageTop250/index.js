import React from 'react';
// import { StyleSheet, View, NavigatorIOS } from 'react-native';

import MovieList from '../../components/MovieList'

export default class App extends React.Component {
  handlePress = (id) => {
    this.navigatorPush()
  };
  navigatorPush = () => {
    this.props.navigator.push({
      title: 'Hello',
      component: MovieList
    })
  };
  render() {
    return (
      <MovieList onPress={this.handlePress}/>
    );
  }
};
