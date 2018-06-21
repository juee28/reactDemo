import React, { Component } from 'react';
import TodoList from './TodoList';
import Todoadd from './Todoadd';
import './Todo.css';
class Todo extends Component {

    constructor(props) {
        super(props);
        this.todoCounter = 0;
        this.inputElement = null;
        this.state = {
            todoList: [

            ],
            messages: {
                msg: '',
                isError: true
            }
        }
    }

    handleChange(id, event) {
        const updatedList = this.state.todoList.filter((todo) => {
            if (todo.id == id) {
                todo.isFinished = event.target.checked;
            }
            return todo;
        });

        this.setState({ todoList: updatedList });

    }

    handleRemove(id) {
        const updatedList = this.state.todoList.filter((todo) => {
            if (todo.id != id)
                return todo;
        });

        this.setState({ todoList: updatedList });

    }

    handleAdd(el, e) {
        debugger
        if (el.value != '') {
            const todo = {
                id: this.todoCounter++,
                todo: el.value,
                isFinished: false
            }
            this.state.todoList.push(todo);
            this.setState({
                todoList: this.state.todoList,
                messages: {
                    ...this.state.messages,
                    msg: 'Successfully added todo in list.',
                    isError: false
                }
            });
            el.value = '';
        } else {
            this.setState({
                messages: {
                    ...this.state.messages,
                    msg: ' Please Enter valid input.',
                    isError: true
                }
            });

        }
        setTimeout(function () {
            this.setState({
                messages: {
                    ...this.state.messages,
                    msg: ''
                }
            });
        }.bind(this), 2000);

    }

    render() {
        return (
            <div>
                <br/>
                <h4 className="text-center">TODO List</h4>
                <div className="Todo text-left">
                    {
                        this.state.messages.msg != '' && <p className={this.state.messages.isError ? 'red error' : 'green error'}>{this.state.messages.msg}</p>
                    }

                    <Todoadd handleAdd={(el, e) => this.handleAdd(el, e)}  />
                    {
                        this.state.todoList.length > 0 && <div> {this.state.todoList.filter((todo) => { if (!todo.isFinished) return todo; }).length} / {this.state.todoList.length}</div>
                    }

                    <TodoList todoList={this.state.todoList} handleChange={(id, e) => this.handleChange(id, e)} handleRemove={(id) => this.handleRemove(id)} />
                </div>
            </div>

        );
    }
}

export default Todo;
