/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import {MainScreen, DetailScreen, ThirdScreen } from '../../../../constant/screenName'

export default class MainComponent extends Component {
  static navigationOptions = ({navigation})=> {
    const {params = {}} = navigation.state
    let headerTitle = 'Main screen'
    let headerTitleStyle = { color: 'purple', textAlign: 'center'}
    let headerRight =(<Text style={{borderRadius: 5,color: 'white', backgroundColor: 'purple', padding: 8, marginRight: 10}}
        onPress= { ()=>params.onSave()}
        >Save</Text>)
    let headerBackTitle = 'Back' //ios only
    return {headerTitle, headerTitleStyle, headerRight, headerBackTitle}
  }

  _onSave() {
    if(this.props.navigation.state.params.isSaving == true){
      return
    } else {
      console.log("press save")
    }
    this.props.navigation.setParams({isSaving: true})
    //do some task in 3s
    setInterval( ()=> {
      console.log("finished tasks")
      this.props.navigation.setParams({isSaving: false})
    }, 3000)
  }

  componentWillMount() {
    this.props.navigation.setParams({onSave: this._onSave.bind(this), isSaving: false})
  }

  render() {
    const { navigation} = this.props
    let dataSendToDetail = {
      name: "Thanhtd",
      age: 20
    }

    let mainView = (navigation.state.params && navigation.state.params.isSaving ==  true)?
        <ActivityIndicator
          style={{flex: 1, opacity: 0.5, backgroundColor: 'seagreen',
             justifyContent: 'center', alignItems: 'center',}}
          size='large'
          color='purple'
          /> :
        <View style={styles.container}>
          <Text>Main screen</Text>

          <Text style={styles.button}
            onPress={ ()=> {
              // this.props.navigate(DetailScreen)
              navigation.navigate(DetailScreen, dataSendToDetail)
            }}
            >go to Detail</Text>
          <Text style={styles.button}
            onPress={()=>{navigation.navigate(ThirdScreen)}}
            >go to Third</Text>
        </View>

    return mainView
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'palegreen'
  },
  button: {
    backgroundColor: 'mediumorchid',
    color: 'white',
    fontSize: 18,
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    margin: 10
  }
});
