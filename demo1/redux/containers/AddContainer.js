import AddComponent from '../../components/TODOAppRedux/AddComponent'
import {addNewTask} from '../actions'
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onClickAdd: (inputTaskName) => {
      dispatch(addNewTask(inputTaskName))
    }
  }
}

const AddContainer = connect(mapStateToProps, mapDispatchToProps)(AddComponent)
export default AddContainer
