import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
// import App from './components/App';
import Calculator from './components/ex_calculator';
//test API requets: GET, POST, PUT, DELETE
import NetworkingDemo from './components/demo/Networking';

//demo Redux by TODO app demo
import TODOApp from './components/TODOAppRedux/TODOApp'

//redux
import {createStore} from 'redux';
import {Provider} from 'react-redux'

import allReducers from './redux/reducers'

let store = createStore(allReducers)
const App = () => (
  <Provider store={store} >
    <TODOApp />
  </Provider>
)

AppRegistry.registerComponent('demo1', () => App)
