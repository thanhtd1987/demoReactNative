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

export default class EditModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      keyOfTea: '',
      editTeaName: '',
      editTeaDescription: '',
      flatListItem: null
    }
  }

  showEditModal = (editingTea, flatListItem) => {
    console.log(`editingTEA: ${JSON.stringify(editingTea)}`)
    this.setState({
      keyOfTea: editingTea.key,
      editTeaName: editingTea.name,
      editTeaDescription: editingTea.foodDescription,
      flatListItem: flatListItem
    })
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
          Edit Tea's infomation
        </Text>

        <TextInput
          placeholder='Name of tea'
          style={styles.input}
          onChangeText={(text)=> this.setState({editTeaName: text})}
          value={this.state.editTeaName}
          ></TextInput>

      <TextInput
          placeholder='Description of tea'
          style={styles.input}
          onChangeText={(text)=> this.setState({editTeaDescription: text})}
          value={this.state.editTeaDescription}
          ></TextInput>

        <Text style={styles.save}
          onPress={ ()=> {
            if(this.state.editTeaName.length == 0 || this.state.editTeaDescription.length == 0) {
              alert('You must enter name & Description of tea')
              return
            } else {
              var foundIndex = flatListData.findIndex(item => this.state.keyOfTea == item.key)
              if(foundIndex < 0){ return }

              flatListData[foundIndex].name = this.state.editTeaName
              flatListData[foundIndex].foodDescription = this.state.editTeaDescription

              this.state.flatListItem._refresdEditedItem()

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
