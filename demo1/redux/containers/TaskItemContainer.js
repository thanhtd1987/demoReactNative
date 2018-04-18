import {connect} from 'react-redux';
import {toggleTask} from '../actions'
import TaskItemComponent from '../../components/TODOAppRedux/TaskItemComponent'

const mapDispatchToProps = (dispatch)=> {
  return {
    onToggleItem: (taskId) => {
      dispatch(toggleTask(taskId))
    }
  }
}

const TaskItemContainer = connect(null, mapDispatchToProps)(TaskItemComponent)
export default TaskItemContainer
