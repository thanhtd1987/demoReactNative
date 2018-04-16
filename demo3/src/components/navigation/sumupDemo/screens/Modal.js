/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import HeaderButton from '../HeaderButton'

export default class Modal extends Component {
  render() {
    const {goBack} = this.props.navigation
    return (
      <View style={styles.container}>
        <HeaderButton
          icon='md-close'
          onPress={()=> goBack()}
          />

        <Text style={{fontSize: 20, marginVertical: 20}}>
          I'm the Modal component</Text>

        <Button
          onPress={()=>goBack()}
          title='Close me!'
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
