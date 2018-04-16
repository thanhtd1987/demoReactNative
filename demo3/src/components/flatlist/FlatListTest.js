/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Alert,
  TouchableHighlight,
  Platform,
} from 'react-native';
import flatListData from '../../../data/flatListData'
import Swipeout from 'react-native-swipeout'
import AddModal from './AddModal'
import FlatListItem from './FlatListItem'
import EditModal from './EditModal'

export default class FlatListTest extends Component {
  constructor(props){
    super(props)
    this.state = {
      deleteRowKey: null,

    }
    this._onPressAdd = this._onPressAdd.bind(this) //this trong _onPressAdd se tuong duong voi this=FlatListTest
  }

  refrestFlatList = (activeKey) => {
    this.setState({deleteRowKey: activeKey})
    this.refs.flatList.scrollToEnd()
  }

  _onPressAdd = ()=> {
    // alert('add item')
    this.refs.addModal.showAddModal()
  }  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableHighlight
            style={{marginRight: 10}}
            underlayColor='tomato'
            onPress={this._onPressAdd}
            >
            <Image style={{width: 35, height: 35}} source={require('../../../images/ic_add.png')}></Image>
          </TouchableHighlight>
        </View>

        <FlatList
          ref={'flatList'}
          data={flatListData}
          renderItem={({item, index})=>{
            // console.log(`item= ${JSON.stringify(item)} index=${index}`)
            return(
              <FlatListItem item={item} index={index} parentFlatList={this}>

              </FlatListItem>
            )
          }}
          >

        </FlatList>

        <AddModal ref={'addModal'} parentFlatList={this}>
        </AddModal>

        <EditModal ref={'editModal'} parentFlatList={this}>
        </EditModal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == 'ios'? 34: 0,
  },
  topBar: {
    backgroundColor: 'tomato',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

  }
});
