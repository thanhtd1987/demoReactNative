import {
  ADD_TEA, EDIT_TEA, DELETE_TEA, ADD_TEA_LIST,
  TOGGLE_LOADING, CHANGING_ITEM, UPDATE_SELECTED_ITEM
} from './actionTypes'

import { getTeaFromServer, insertNewTeaToServer, editTeaInServer, deleteTeaInServer } from '../../networking/Server';

export function addTeaList(list) {
  return {
    type: ADD_TEA_LIST,
    teas: list
  }
}

export function addTea (name, description, url) {
  return {
    type: ADD_TEA,
    teaName: name,
    teaDes: description,
    teaUrl: url
  }
}

export const editTea = (id, name, description) => {
  return {
    type: EDIT_TEA,
    teaId: id,
    teaName: name,
    teaDes: description
  }
}

export const deleteTea = (id) => ({
  type: DELETE_TEA,
  teaId: id
})

export function toggleLoading (toggle) {
  return {
    type: TOGGLE_LOADING,
    toggle: toggle
  }
}

export const changingItem = (changing)=> ({
  type: CHANGING_ITEM,
  changing: changing
})

export function updateSelectedItem(item) {
  return{
    type: UPDATE_SELECTED_ITEM,
    selected: item
  }
}

export function addMoreTea(newTea){
  return (dispatch) => {
    dispatch(toggleLoading(true))
    insertNewTeaToServer(newTea).then( (result) => {
      //using result
      dispatch(addTea(newTea.name, newTea.description, newTea.image))
      // dispatch({
      //   type: ADD_TEA,
      //   teaName: newTea.name,
      //   teaDes: newTea.description,
      //   teaUrl: newTea.image
      // })
      dispatch(toggleLoading(false))
    }).catch( (error) => {
      dispatch(toggleLoading(false))
      console.log('Add more error: ', error)
    })
  }
}
