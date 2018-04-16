/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
} from 'react-native';

import HeaderButton from '../HeaderButton'

export default class Settings extends Component {

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <HeaderButton onPress={ ()=> navigate('DrawerOpen')} />

        <Text>Setting tab!</Text>

        <TouchableHighlight style={{margin: 10, backgroundColor: '#2196F3', padding: 10, borderRadius: 3}}
          onPress={()=> navigate('Profile', {user: 'Thanhtd'})}
          >
          <Text style={{color: 'white', fontWeight: 'bold'}}>Open Profile of Thanhtd</Text>
        </TouchableHighlight>

        <Button style={{margin: 10}}
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
