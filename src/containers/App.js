import React from 'react';
import style from './App.css';
import uuid from 'uuid';
import Title from '../components/Title';
import Todos from '../components/TodoList';
import { hot } from 'react-hot-loader';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'clean room'
            }, {
                id: 2,
                text: 'wash the dishes'
            }, {
                id: 3,
                text: 'feed my cat'
            }],
            title: 'Webpack loaders'
        };

    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({ data });
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({ data: remainder });
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title props={this.state.title} />
                <Todos data={this.state.data} removeTodo={this.removeTodo.bind(this)} />
            </div>
        );
    }
}

export default hot(module)(App);