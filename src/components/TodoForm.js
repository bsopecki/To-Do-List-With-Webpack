import React from 'react';
class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { content: '' }
    }

    handleChange(e) {
        this.setState({ content: e.target.value })
    }

    handleClick() {
        this.props.addTodo(this.state.content)
    }

    render() {
        return <div>
            <input type="text" value={this.state.content} onChange={this.handleChange.bind(this)} />
            <button onClick={this.handleClick.bind(this)}>Add task to do</button>
        </div>
    }
}


export default TodoForm;