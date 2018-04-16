/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class Blink extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      showText: true
    };
    var taskToDo = () => {
      // this.state = "ablalb" //ko cho phep, only on constructor
      this.setState(previousState => {
        return {
          showText: !previousState.showText
        };
      });
    };

    const timeToBlink = 1000; //ms
    setInterval(taskToDo , timeToBlink);
  }

  render() {
    let textToDisplay = this.state.showText ? this.props.inputText: ' ';
    return (
      <View style={styles.container}>
        <Text>{textToDisplay}</Text>
      </View>
    );
  }
}

export default class TextBlink extends Component<{}> {

  render() {
    return (
      <View>
        <Blink inputText="sao roi may"></Blink>
        <Blink inputText="tao ok, thank"></Blink>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
