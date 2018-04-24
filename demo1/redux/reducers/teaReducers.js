import {ADD_TEA, EDIT_TEA, DELETE_TEA, ADD_TEA_LIST} from '../actions/actionTypes'

let initstates = {
  teas: [],
  lastEditedId: -1,
}

const teaReducers = (states = initstates, action) => {
  switch (action.type) {
    case ADD_TEA:
      return {
        teas: [
          ...states.teas,
          {
            id: states.teas.length + 1,
            name: action.teaName,
            image: action.teaUrl,
            description: action.teaDes
          }
        ],
        lastEditedId : states.teas.length + 1
      }

    case ADD_TEA_LIST:
      return {
        ...states,
        teas: [...states.teas, ...action.teas]
      }

    case EDIT_TEA:
      return {
        teas: states.teas.map( (tea)=> (tea.id === action.id)
              ? {...tea, name : action.teaName, description : action.teaDes}
              : tea
        ),
        lastEditedId: action.teaId
      }

    case DELETE_TEA:
      return {
        teas: states.teas.filter( tea => tea.id !== action.teaId),
        lastEditedId: action.teaId
      }

    default:
      return states

  }
}

import {TOGGLE_LOADING, CHANGING_ITEM, UPDATE_SELECTED_ITEM} from '../actions/actionTypes'

let initDisplaying = {
  refreshing: false,
  changingItems: false,
  selectedItem: null,
}
const displayReducers = (displayer = initDisplaying, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...displayer,
        refreshing: action.toggle
      }

      case CHANGING_ITEM:
        return {
          ...displayer,
          changingItems: action.changing
        }

      case UPDATE_SELECTED_ITEM:
        return {
          ...displayer,
          selectedItem: action.selected
        }

    default:
      return displayer
  }
}

export default teaScreenReducers = {teaReducers, displayReducers}
