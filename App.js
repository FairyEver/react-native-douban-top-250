import React from 'react';
import { StyleSheet, View, NavigatorIOS } from 'react-native';

import PageTop from './src/page/Top'

import PageNewMovie from './src/page/NewMovie'

export default class App extends React.Component {
  render() {
    return (
      <PageNewMovie />
    );
  }
}

const styles = StyleSheet.create({
});