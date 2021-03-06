import {ADD_NEW_TASK, TOGGLE_ONE_TASK} from './actionTypes'
let newTaskId = 0

//action: 'add new task'
export const addNewTask = (inputTaskName)=> {
  return {
    type: ADD_NEW_TASK,
    taskId: newTaskId++,
    taskName: inputTaskName
  }
}
//action: 'toggle task'
export const toggleTask = (taskId)=> {
  return {
    type: TOGGLE_ONE_TASK,
    taskId: taskId,
  }
}

import {INC_NUM, DEC_NUM} from './actionTypes'

export function increaseNumber () {
  return {
    type: INC_NUM
  }
}

export function decreaseNumber () {
  return {
    type: DEC_NUM
  }
}
