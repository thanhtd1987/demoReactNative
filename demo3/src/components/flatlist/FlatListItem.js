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
import EditModal from './EditModal'

export default class FlatListItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeRowKey: null,
      editKey: 0
    }
  }

  _refresdEditedItem = () => {
    this.setState((preState)=> {
      return { editKey : preState.editKey + 1}
    })
  }

  render() {
    const swipeSetting = {
      onClose: (secId, rowId, direction)=>{
        if(this.state.activeRowKey != null) {
          this.setState({activeRowKey: null})
        }
      },
      onOpen: (secId, rowId, direction)=>{
        this.setState({activeRowKey: this.props.key})
      },
      right:[
        {
          onPress: ()=>{
            this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this)
          },
          text: 'Update', type: 'primary'
        },
        {
          onPress: ()=>{
            // const deleteKey =  this.state.activeRowKey
            Alert.alert(
              'Alert',
              'Are you sure?',
              [
                {text:'NO', onPress: ()=> console.log('Cancel pressd'), style: 'cancel'},
                {text:'YES', onPress: ()=> {
                  flatListData.splice(this.props.index, 1)
                  this.props.parentFlatList.refrestFlatList(this.state.activeRowKey)
                }}
              ],
              {cancelable: true}
            )
          },
          text: 'Delete', type: 'delete'
        }
      ],
      left: [
        {
          onPress: ()=>{

          },
          text: 'secondary', type: 'secondary'
        },
        {
          onPress: ()=>{

          },
          text: 'default', type: 'default'
        }
      ],
      rowId: this.props.index,
      sectionId: 1,
      autoClose: true,
      buttonWidth: 50,
    }

    return (
      <Swipeout {...swipeSetting}>
        <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'mediumseagreen',
            borderBottomWidth: 2,
            borderBottomColor: 'white'
            // backgroundColor: this.props.index % 2 == 0? 'cyan': 'green'
          }}>
          <Image source={{uri: this.props.item.imageUrl}}
            style={{width: 100, height: 100, margin: 5}}
            >
          </Image>
          <View
            style={{flex: 1}}
            >
            <Text style={styles.itemStyle}>{this.props.item.name}</Text>
            <Text style={styles.itemStyle}>{this.props.item.foodDescription}</Text>
          </View>
        </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyle: {
    flex: 50,
    padding: 10,
    fontSize: 16,
    color: 'white',
  },
})
