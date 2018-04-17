/* @flow */

import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import TaskItemContainer from '../../redux/containers/TaskItemContainer'

export default class TaskListComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }
  render() {
    return (
      <FlatList style={styles.container}
        data={this.state.tasks}
        renderItem={ ({item, index})=> {
          return (
            <TaskItemContainer {...item} >

            </TaskItemContainer>
          )}
        }
        >

      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,

  },
});
