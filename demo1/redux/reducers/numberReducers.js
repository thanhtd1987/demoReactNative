import {INC_NUM, DEC_NUM} from '../actions/actionTypes'
let initNumber = 0

export default function (number = initNumber, action){
  switch (action.type) {
    case INC_NUM:
      return number + 1
    case DEC_NUM:
      return number - 1
    default:
      return number
  }
}
