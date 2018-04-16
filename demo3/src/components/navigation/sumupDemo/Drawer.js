/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

export default class Drawer extends Component {
  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Header</Text>

        <Button onPress={ ()=>{navigate('Profile', {user: 'Thanhtd'})}}
          title='Open Modal'
          >
        </Button>

        <Button onPress={ ()=>{navigate('Modal')}}
          title='Close me!'
          >
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginVertical: 20
  }
});
