/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class Dog extends Component<{}> {
  render() {
    let hello = 'check check vao day';
    const imageSrc = {
      uri: 'https://www.healthypawspetinsurance.com/Images/V3/DogAndPuppyInsurance/Dog_CTA_Desktop_HeroImage.jpg'
    };
    return (
      <View style={styles.container}>
        <Text>{hello}</Text>
        <Image
          source={ imageSrc }
          style={ {width:400, height:200} }
          ></Image>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
