/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import HeaderComponent from '../HeaderComponent'

export default class InfoComponent extends Component {

  static navigationOptions = ({navigation})=> {
    let tabBarLabel = 'Info'
    let tabBarIcon = drawerIcon = () => {
      return <Icon name='md-information-circle' size={25} color='purple' />
    }
    return {tabBarLabel, tabBarIcon, drawerIcon }
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <HeaderComponent {...this.props} />

        <View style={styles.container}>
          <Text>I'm the InfoComponent component</Text>
          <Icon name='md-information-circle' size={25} color='purple' />
          <Text style={styles.button}
            onPress={ ()=> { this.props.navigation.goBack()}} >Go to Home</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  button: {
    backgroundColor: 'mediumorchid',
    color: 'white',
    fontSize: 18,
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    margin: 10
  }
});
