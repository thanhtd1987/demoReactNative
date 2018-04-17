import {connect} from 'react-redux';
import {toggleTask} from '../actions'
import TaksItemComponent from '../../components/TODOAppRedux/TaskItemComponent'

const mapDispatchToProps = (dispatch)=> {
  return {
    onToggleItem: (taskId) => {
      dispatch(toggleTask(taskId))
    }
  }
}

const TaskItemContainer = connect(mapDispatchToProps)(TaksItemComponent)
export default TaskItemContainer
