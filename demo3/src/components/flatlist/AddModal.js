/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Platform,
} from 'react-native';
import Modal from 'react-native-modalbox'
import flatListData from '../../../data/flatListData'

var screen = Dimensions.get('window')

export default class AddModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTeaName: '',
      newTeaDescription: ''
    }
  }

  showAddModal= () => {
    this.refs.myModal.open()
  }

  render() {
    return (
      <Modal ref={'myModal'}
        style={styles.container}
        position='center'
        backdrop={true}
        // onClosed={ ()=>{ alert('Modal closed!') } }
        >
        <Text style={{fontWeight: 'bold', color: 'mediumseagreen'}}>
          New Tea's infomation
        </Text>

        <TextInput
          placeholder='Name of tea'
          style={styles.input}
          onChangeText={(text)=> this.setState({newTeaName: text})}
          value={this.state.newTeaName}
          ></TextInput>

      <TextInput
          placeholder='Description of tea'
          style={styles.input}
          onChangeText={(text)=> this.setState({newTeaDescription: text})}
          value={this.state.newTeaDescription}
          ></TextInput>

        <Text style={styles.save}
          onPress={ ()=> {
            if(this.state.newTeaName.length == 0 || this.state.newTeaDescription.length == 0) {
              alert('You must enter name & Description of tea')
              return
            } else {
              console.log('press save')
              let newKey= flatListData.lenght + 1
              const newTea = {
                key: `${newKey}`,
                name: this.state.newTeaName,
                imageUrl: "https://www.womensbeanproject.com/wp-content/uploads/2014/03/MangoPeachTea.png",
                foodDescription: this.state.newTeaDescription
              }
              flatListData.push(newTea)
              this.props.parentFlatList.refrestFlatList(newKey)
              this.refs.myModal.close()
            }
          }}
          >
          Save
        </Text>

      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: Platform.OS == 'ios'? 30: 20,
    shadowRadius: 10,
    width: screen.width - 80,
    height: 200,
    alignItems: 'center' ,
  },
  save: {
    width: 100,
    padding: 5,
    marginTop: 10,
    backgroundColor: 'mediumseagreen',
    color: 'white',
    textAlign: 'center',
    borderRadius: 5,
  },
  input: {
    width: screen.width - 120,
    height: 40,
    marginTop: 10,
  }
});
