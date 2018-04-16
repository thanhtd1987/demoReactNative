/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {MainScreen, DetailScreen, ThirdScreen } from '../../../../constant/screenName'

export default class DetailComponent extends Component {
  static navigationOptions = ({navigation})=> {
    let headerTitle = 'Detail screen'
    let headerStyle= {backgroundColor: 'turquoise', borderBottomColor: 'purple'}
    let headerTitleStyle = {color: 'steelblue'}
    let headerTinColor = {color: 'purple'}
    return{headerTitle, headerStyle, headerTinColor, headerTitleStyle}
  }
  render() {
    console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`)
    let paramm = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <Text>I'm the DetailComponent component</Text>

        <Text >{paramm.name}</Text>
        <Text >{paramm.age}</Text>

        <Text style={styles.button}
          onPress={()=>{this.props.navigation.navigate(ThirdScreen)}}
          >go to Third</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan'
  },
  button: {
    backgroundColor: 'indianred',
    color: 'white',
    fontSize: 18,
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    margin: 10
  }
});
