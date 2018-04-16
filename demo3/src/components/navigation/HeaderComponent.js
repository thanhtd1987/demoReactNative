/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class HeaderComponent extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Icon
          style={{margin: 10}}
          name={'md-menu'}
          size={26}
          color='purple'
          onPress={ ()=> {
            const {navigate} =  this.props.navigation
            navigate('DrawerOpen')
          }}
          ></Icon>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //position: 'absolute'
    // ...StyleSheet.absoluteFillObject,
    // top: 20,
    // left: 5,
    backgroundColor :'aqua',
    height: 45
  },
});
