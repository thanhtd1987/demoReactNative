import {combineReducers} from 'redux'
import taskReducers from './taskReducer'
import numberReducers from './numberReducers'
import teaScreen from './teaReducers'

const allReducers = combineReducers({
  taskReducers,
  //you can add more here
  numberReducers,
  ...teaScreen
})

export default allReducers
