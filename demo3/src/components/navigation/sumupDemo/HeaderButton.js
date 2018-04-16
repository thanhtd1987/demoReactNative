/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class HeaderButton extends Component {

  static defaultProps = {
    icon: 'md-menu'
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon.Button
          name={this.props.icon}
          size={26}
          backgroundColor='aqua'
          onPress={this.props.onPress}
          ></Icon.Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //position: 'absolute'
    ...StyleSheet.absoluteFillObject,
    top: 0,
    left: 0
  },
});
