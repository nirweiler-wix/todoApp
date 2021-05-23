import * as React from 'react';
import style from './App.module.css';
import TodoList from '../components/todo-list';
import TodoInput from '../components/todo-input'

const App: React.FC = () => {
    const [todos, setTodos] = React.useState(['A','B']);
    const [showList, setShowList] = React.useState(true);
    const [showInput, setShowInput] = React.useState(false);
    console.log(todos);

    const addNewTodo = (newTodo : string) => {
        console.log(newTodo);
        const updatedTodos = [...todos];
        updatedTodos.unshift(newTodo);
        setTodos(updatedTodos);
        console.log(todos);
        setShowList(true);
        setShowInput(false);
    }

    const onClickAddTodo = () =>{
        setShowInput(true);
        setShowList(false);
    }
    return (
        <div className={style.container}>
        {showList && <TodoList todos={todos}/>}
        {showInput && <TodoInput onSubmit={addNewTodo}/>}
        <button className={style.addButton} onClick={onClickAddTodo}>+</button>
        </div>
    );
};

export default App;