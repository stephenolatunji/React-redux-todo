import React from 'react';
import AddTodo from '../container/AddTodo';
import VisibleTodos from '../container/VisibleTodo';
import DoneTodo from '../container/DoneTodo';
import UndoneTodo from '../container/UndoneTodo';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const App = () => (
    <Router>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/done'>DoneTodo</Link></li>
                <li><Link to='/undone'>Undone</Link></li>
            </ul>
        </nav>
        <div>
            <Switch>
                <Route path='/undone'>
                    <UndoneTodo />
                </Route>
                <Route path='/done'>
                    <DoneTodo />
                </Route>
                <Route path='/'>
                    <AddTodo />
                    <VisibleTodos />
                </Route>
            </Switch>
        </div>
    </Router>   
);
export default App;