import {combineReducers} from 'redux'
import taskReducers from './taskReducer'
import numberReducers from './numberReducers'

const allReducers = combineReducers({
  taskReducers,
  //you can add more here
  numberReducers
})

export default allReducers
