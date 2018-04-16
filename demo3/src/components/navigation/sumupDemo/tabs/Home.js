/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

import HeaderButton from '../HeaderButton'

export default class Home extends Component {

  render() {
    const {navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <HeaderButton onPress={ ()=> navigate('DrawerOpen')} />

        <Text>Hello everyone!</Text>

        <Button
          onPress={()=> navigate('Settings')}
          title='Open Settings tab'
          />

        <Button
          onPress={()=> navigate('Modal')}
          title='Open Modal'
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
});
