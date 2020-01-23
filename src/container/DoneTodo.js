import { connect } from 'react-redux';
import TodoList  from '../components/TodoList';

const mapStateToProps = state => ({
    todos: state.todos.filter(t => t.completed)
})

export default connect(mapStateToProps)(TodoList);