import * as React from 'react';
import style from './App.module.css';
import TodoList from '../components/todo-list';

const App: React.FC = () => {
    const [todos, setTodos] = React.useState(['hello','nir']);
    console.log(todos);
    return (
        <div>
        <div className={style.root}>
            App Test
        </div>
        <TodoList todos={todos}/>
        </div>
    );
};

export default App;