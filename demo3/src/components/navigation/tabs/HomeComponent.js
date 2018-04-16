/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {
  Home,
  Setting,
  Info,
  Cloud
} from '../../../../constant/screenName'
import HeaderComponent from '../HeaderComponent'

export default class HomeComponent extends Component {

  static navigationOptions = ({navigation})=> {
    let tabBarLabel = 'Home'
    let tabBarIcon = drawerIcon = () => {
      return <Icon name='md-home' size={20} color='purple' />
    }

    return {tabBarLabel, tabBarIcon, drawerIcon}
  }

  _move2Setting(){
    // const {navigate} = this.props.navigation
    console.log('press move setting')
    this.props.navigation.navigate(Setting)
    // this._move2Setting.bind(this)
  }

  render() {
const { navigation} = this.props
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <HeaderComponent {...this.props} />

        <View style={styles.container}>
          <Text>I'm the HomeComponent component</Text>
          <Icon name='md-home' size={25} color='purple' />
          <Text style={styles.button}
            onPress={()=>{navigation.navigate(Setting)}}
            >Go to Setting</Text>
          <Button
            title="Go to Settings"
            onPress={() => this.props.navigation.navigate('Settings')}
          />
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
    backgroundColor: 'palegreen'
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
