/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  Alert
} from 'react-native';

import HorizontalFlatListItem from './HorizontalFlatListItem'
import {horizontalStatus, horizontalFlatListData} from '../../../data/horizontalFlatListData'

export default class HorizontalFlatList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Image style={styles.imageBg}
            source={require('../../../images/bg_weather.jpg')}
            ></Image>
        </View>

        <Text style={{color: 'black',
          margin: 10,
          fontWeight: 'bold',
          fontSize: 16,
          backgroundColor: 'transparent'}}>
          Weather forecast</Text>

        <View style={{height: 150}} >
          <FlatList
            style={styles.flatlist}
            horizontal={true}
            data={horizontalFlatListData}
            renderItem={ ({item, index})=> {
              return (
                <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>
                </HorizontalFlatListItem>
              )
            }}
            keyExtractor={(item, index)=> item.hour}
            >
          </FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  flatlist: {
    backgroundColor: 'black',
    opacity: 0.5
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  imageBg: {
    flex: 1,
    flexDirection: 'column',
    width: null,
    height: null,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  }
});
