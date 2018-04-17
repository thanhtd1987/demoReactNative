/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
//redux
// import {createStore} from 'redux';
// import {Provider} from 'react-redux'
//
// import allReducers from '../../redux/reducers'

import AddContainer from '../../redux/containers/AddContainer'
import TaskListContainer from '../../redux/containers/TaskListContainer'

export default class TODOApp extends Component {
  render() {
    return (
      <View style={{flex: 1,}} >
        <AddContainer />
        <TaskListContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
