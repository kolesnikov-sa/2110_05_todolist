import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Components/Todolist/Todolist";

type FilterType = 'all' | 'active' | 'completed';

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML & CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: true},
        {id: 4, title: 'Rest API', isDone: false},
        {id: 5, title: 'GraphQL', isDone: false}
    ]);

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
    }

    let [filter, setFilter] = useState<FilterType>('completed');

    let tasksForTodoList = tasks;

    if (filter === 'active') {
        tasksForTodoList = tasks.filter(task => task.isDone === false)
    }

    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(task => task.isDone === true)
    }

    function changeFilter(value: FilterType ) {
        setFilter(value);
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasksForTodoList} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
