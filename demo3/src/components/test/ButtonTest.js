/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Button from 'react-native-button';

export default class ButtonTest extends Component {

  _onPressButton = () => {
      Alert.alert("Day la button, nhung ko phai cua react-native, lib ngoai do");
    }
    _onPressButton2 = () => {
        alert("On Press button");
      }


  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={ this._onPressButton}
          style={ styles.button}
          >Press me!
        </Button>

        {/*component nay chi co tac dung khi khai bao onPress*/}
        <TouchableHighlight
          onPress={this._onPressButton2}
          underlayColor='red'
          onShowUnderlay={()=> {
            // Alert.alert('onShowUnderlay button')
          }}
          >
          <View >
            <Image style={{width: 100, height: 30}}
              source={require('../../.././images/bg_button.png')}>
            </Image>

            <Text style={{backgroundColor: 'green', margin: 5, fontSize: 20}}>Highlight</Text>
          </View>
        </TouchableHighlight>

        {/*test ko co hieu luc dvoi useForeground*/}
        <TouchableNativeFeedback
          onPress={this._onPressButton2}
          useForeground={true}
          >
          <View style={{backgroundColor: 'cyan', width: 300, height: 25}}>
            <Text style={{textAlign: 'center', margin: 5}}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>

        {/*khi ko set thi activeOpacity=0.2 by default*/}
        <TouchableOpacity
          onPress={this._onPressButton2}
          activeOpacity={0.5}
          >
          <View style={{backgroundColor: 'purple', width: 200, height: 25, marginTop: 10}}>
            <Text style={{textAlign: 'center', margin: 5}}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableWithoutFeedback
          onLongPress={this._onPressButton2}
          onPressIn={()=> {
            alert('press in');
          }}
          onPressOut={()=> {
            alert('press out');
          }}
          disabled={true}
          >
          <View style={{backgroundColor: 'red', width: 250, height: 25, marginTop: 10}}>
            <Text style={{textAlign: 'center', margin: 5}}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5
  }
});
