import React from 'react';
import style from './TodoList.css';


const Todos = ({ data, removeTodo }) => {

    const todoList = data.length ? (
        data.map(data => {
            return (
                <ul key={data.id}>
                    <li onClick={() => { removeTodo(data.id) }}>{data.text}</li>
                </ul>
            )
        })
    ) : (
            <p className={style.center}>You have no todo's left, yay!</p>
        );
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}
export default Todos;
