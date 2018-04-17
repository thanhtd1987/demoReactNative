/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class TaskItemComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> { //call action in container
          }}
          >
          <Text style={{backgroundColor: this.props.item.completed == true? 'darkgreen': 'cyan'}}
            >{this.props.item.taskName}</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
