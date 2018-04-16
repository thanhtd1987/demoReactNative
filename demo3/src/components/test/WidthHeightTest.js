/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class WidthHeightTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
        <View style={ styles.view1}></View>
        <View style={ styles.view2}></View>
        <View style={ styles.view3}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
    // flex: 1,
    height: 400,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    margin: 20,
  },
  view1: {
    // flex: 30,
    width: 50,
    height: 50,
    backgroundColor: 'lightseagreen',
    // marginRight: 5,
  },
  view2: {
    // flex: 30,
    // width: 50,
    height: 50,
    backgroundColor: 'lightgoldenrodyellow'
  },
  view3: {

    width: 50,
    height: 50,
    backgroundColor: 'blue'
  },
});
