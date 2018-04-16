/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class StyleTest extends Component {
  render() {
    return (
      <View style={styles.orginContainer}>
        <View style={styles.container}>
          <Text style={ styles.text1} >StyleTest</Text>
          <Text style={ styles.text2} >Text 2</Text>
          <Text style={ [styles.text1, styles.text2]}> multi style</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  orginContainer: {
    alignItems: 'center',
    backgroundColor: 'green'
  },
  container: {
    marginTop: 10,
    backgroundColor: 'yellow',
    borderWidth: 2,
    borderColor: 'red'
  },
  text1: {
    margin: 10,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'blue'
  },
  text2: {
    color: 'blue',
    fontSize: 30
  }
});
