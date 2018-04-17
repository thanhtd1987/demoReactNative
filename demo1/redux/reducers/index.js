import {combineReducers} from 'redux'
import taskReducers from './taskReducer'

const allReducers = combineReducers({
  taskReducers,
  //you can add more here
})

export default allReducers
