/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
} from 'react-native';

import sectionListData from '../../../data/sectionListData'

class SectionListItem extends Component{
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <View style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'lightseagreen',
          borderBottomWidth: 1,
          borderColor: 'white',

        }}>
        <Text style={{fontSize: 16, color: 'midnightblue', marginLeft: 10, marginRight: 10}}>
          {this.props.item.name}
        </Text>

        <Text style={{fontSize: 16, color: 'dodgerblue', marginLeft: 10, marginRight: 10}}>
          {this.props.item.description}
        </Text>
      </View>
    );
  }
}

class SectionHeader extends Component{
  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#1a9ea5'}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white', margin: 10}}
          >{this.props.section.title}
        </Text>
      </View>
    );
  }
}

export default class BasicSectionList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={ ({item, index})=> <SectionListItem item={item} index={index}></SectionListItem> }
          renderSectionHeader={ ({section})=> <SectionHeader section={section}></SectionHeader>}
          sections={sectionListData}
          keyExtractor={ (item, index)=> item.name}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
