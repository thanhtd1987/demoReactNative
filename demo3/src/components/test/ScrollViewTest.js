/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
  ViewPagerAndroid,
} from 'react-native';

const isHorizontal = true //enable horizontal ScrollView

class ViewPager extends Component {
  render() {
    return (
        <ViewPagerAndroid
          style={{flex: 1}}
          initialPage={2}
          onPageScroll={(event)=> {
            // console.log(`offset=${event.nativeEvent.offset}`)
          }}
          onPageScrollStateChanged={(state)=>{
            console.log(`Scrolling state: ${state}`)
          }}
          onPageSelected={(event)=> {
            console.log(`Scroll page=${event.nativeEvent.position}`)
          }}
          >

          <View style={{backgroundColor: 'lightseagreen'}}>
            <Text style={styles.text}>page 4</Text>
          </View>
          <View style={{backgroundColor: 'cyan'}}>
            <Text style={styles.text}>page 5</Text>
          </View>
          <View style={{backgroundColor: 'yellow'}}>
            <Text style={styles.text}>page 6</Text>
          </View>
        </ViewPagerAndroid>
    );
  }
}

class HorrizontalScroll extends Component {
  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
      <ScrollView style={styles.container}
        maximumZoomScale={3}
        horizontal={isHorizontal}
        pagingEnabled={isHorizontal}
        showsHorizontalScrollIndicator={isHorizontal}
        onMomentumScrollBegin={()=>{
          // alert('begin scrolling')
        }}
        onMomentumScrollEnd={()=>{
          // alert('end scrolling')
        }}
        ongScroll={(event)=>{
          let logdata = `Scroll to x = ${event.nativeEvent.contentOffset.x} y = ${event.nativeEvent.contentOffset.y}`
          console.log(logdata)
        }}
        scrollEventThrottle={10}
        >
        <Image source={require('../../../images/girl.jpg')}
          style={{width: screenWidth, height: screenWidth * 960/720}}
          >
        </Image>
        <Text style={{fontSize: 20,
            width: screenWidth,
            color: 'white',
            backgroundColor: 'green',
            textAlign: 'center'}}>
          Hello boy!
        </Text>
        <TextInput style={{padding: 10, width: screenWidth,borderWidth: 2}}
          placeholder='input text'>
        </TextInput>
        <View style={{padding: 10,width: screenWidth, backgroundColor: 'purple'}}
          >
          <Text style={{fontSize: 20,
              color: 'white',
              textAlign: 'center'}}>
            Texxtttt
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default class ScrollViewTest extends Component {
  render() {
    return (
      <ViewPager ></ViewPager>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center'
  }
});
