import { connect } from 'react-redux';
import { toggleTodo } from '../Actions';
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => (
    {
        toggleTodo: id => dispatch(toggleTodo(id))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList); 