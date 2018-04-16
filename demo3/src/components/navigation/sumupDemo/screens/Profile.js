/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

export default class Profile extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#FFF'
    }
  }

  render() {
    const {navigate, state: {params} } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text>This is {params.user} s Profile component</Text>

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
