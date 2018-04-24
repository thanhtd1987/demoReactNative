import {
  ADD_TEA, EDIT_TEA, DELETE_TEA, ADD_TEA_LIST,
  TOGGLE_LOADING, CHANGING_ITEM, UPDATE_SELECTED_ITEM
} from './actionTypes'

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
