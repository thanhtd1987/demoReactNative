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
        <TouchableOpacity
          style={[styles.container, {backgroundColor: this.props.completed == true? 'darkgreen': 'cyan'}]}
          onPress={()=> { //call action in container
            this.props.onToggleItem(this.props.taskId)
            }}
          >
          <Text 
            >{this.props.taskName}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
});
