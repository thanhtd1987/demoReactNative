/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Greating extends Component<{}> {
  render() {
    let greatingStr= `
    ${this.props.name}. How are you?
    `

    return (
      <View style= { styles.container}>
        <Text style={ styles.text1, styles.text2 }
          >{greatingStr}</Text>
      </View>
    );
  }
}

export default class MultiGreating extends Component<{}> {
  render() {
    return (
      <View
        style={ styles.orginContainer}
        >
        <Greating name="thanhtd"></Greating>
        <Greating name="bin"></Greating>
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
    fontSize: 20
  },
  text2: {
    color: 'blue',
    fontSize: 30
  }
});
