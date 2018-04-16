/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {horizontalStatus, horizontalFlatListData} from '../../../data/horizontalFlatListData'
import Icon from 'react-native-vector-icons/Ionicons'

export default class HorizontalFlatListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: '',
      degrees: '',
      status: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => { alert(`touch item ${this.props.item.hour}`) }}
          style={{position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,}}
          ></TouchableOpacity>

        <Text style={styles.time}>{this.props.item.hour}
        </Text>

        <Icon name={(Platform.OS == 'ios')? this.props.item.status.ios: this.props.item.status.android}
          size={30}
          color= 'white' />

        <Text style={styles.degrees}>{this.props.item.degrees} °F
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    width: 90,
    borderColor: 'gray',
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    margin: 20
  },
  degrees: {
    color: 'white'
  }
});
