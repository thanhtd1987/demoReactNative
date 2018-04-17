/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class AddComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTaskName: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder='input task name'
          onChangeText={ (text)=> { this.setState({newTaskName: text})}}
          />

        <Icon style={{margin: 10}} name='md-add-circle' size={30} color='white'
          onPress={ ()=> {
            if(!this.state.newTaskName.trim()){ return }
            // call click event => container
            this.props.onClickAdd(this.state.newTaskName)
          }}
          ></Icon>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'tomato',
    height: 60,
    alignItems: 'center'
  },
  input: {

    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'transparent',
    color: 'white',
    margin: 5,
    flex: 1,
    padding: 5,
  }
});
