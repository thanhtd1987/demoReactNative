/* @flow */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

import {connect, Provider} from 'react-redux';
import {bindActionCreators, createStore} from 'redux';

import * as actionName from '../redux/actions/index'
import allReducers from '../redux/reducers'

class CountNumber extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.number} >
          <Text style={{fontSize: 80, color: 'red', fontWeight: 'bold'}}>{this.props.number}</Text>
        </View>

        <View style={{flex: 1}}>
          <View style={styles.count}>
            <Button
              title='Increase'
              onPress={ () => {this.props.actions.increaseNumber()} } />
          </View>

          <Button style={[styles.count]}
            title='Decrease'
            color='red'
            onPress={ () => {this.props.actions.decreaseNumber()} }
            />
        </View>
      </View>
    );
  }
}


//redux: config container, connect Component with Props
const mapStateToProps = (state)=> ({ number: state.numberReducers  })

const mapDispatchToProps = (dispatch)=> ({
  actions:bindActionCreators(actionName, dispatch)
})

//connected obj
const Container = connect(mapStateToProps, mapDispatchToProps)(CountNumber)

export default class MyComponent extends Component {
  render() {
    let store = createStore(allReducers)
    return (
      <Provider store={store} >
        <Container />
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  number: {
    flex: 1,
    backgroundColor: 'khaki',
    justifyContent: 'center',
    alignItems: 'center'
  },
  count: {
    alignItems: 'stretch',
    height: 40,
    marginTop: 10
  },

});
