/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  StyleSheet,
} from 'react-native';

export default class InputTest extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      typedText : 'please type your text',
      typedPassword: ''
    };
  }

  componentWillMount() {
    this.keyboardDidShowListener =  Keyboard.addListener('keyboardDidShow', ()=> {
      this.setState( ()=> {
        return {typedText: 'keyboard is shown'};
      })
    });
    this.keyboardDidHideListener =  Keyboard.addListener('keyboardDidHide', ()=> {
      this.setState( ()=> {
        return {typedText: 'keyboard is hidden'};
      })
    });

  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={ styles.input}
          keyboardType='email-address'
          placeholder='Enter your mail'
          placeholderTextColor='blue'
          onChangeText= {
            (text) => {
              this.setState(
                (preState)=> {
                  return {
                    typedText: text
                  };
                }
              );
            }
          }
        ></TextInput>
      <Text style={{marginLeft: 10, color: 'brown'}}>{this.state.typedText}</Text>
      <TextInput
        style={ styles.input}
        keyboardType='default'
        placeholder='Enter your password'
        placeholderTextColor='gray'
        secureTextEntry={true}
        autoFocus={true}
        returnKeyType='previous'
onSubmitEditing={Keyboard.dissmiss}
        onChangeText={
          (text) => {
            this.setState(
              (preState)=> {
                return {
                  typedPassword: text
                };
              }
            );
          }
        }
        ></TextInput>
      <Text style={{marginLeft: 10, color: 'brown'}}>{this.state.typedPassword}</Text>

      <TextInput
        style={ styles.inputMulti}
        multiline={true}
        borderBottomColor='green'
        borderBottomWidth={2}
        borderLeftColor='green'
        borderLeftWidth={2}
        selectTextOnFocus={true}
        returnKeyType='previous'
        borderBottomRightRadius={20}
        borderBottomLeftRadius={10}

        ></TextInput>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'violet',
    margin: 10,
  },
  inputMulti: {
    height: 100,
    borderWidth: 1,
    borderColor: 'violet',
    margin: 10,
    alignContent: 'flex-end'
  }
});
;
