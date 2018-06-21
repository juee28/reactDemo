import React from 'react';

const TodoList = (props) => {
    return (
        <div className="TodoList">
            <ul className="listnone todo-list">
                {
                    props.todoList.map((todo) =>
                        <li key={todo.id} className={todo.isFinished ? 'inactive' : 'active'}>
                            <input type="checkbox" defaultChecked={todo.isFinished} onChange={(e) => props.handleChange(todo.id, e)} />
                            {todo.todo}
                            <span className="removeBtn" onClick={(e) => props.handleRemove(todo.id, e)}>X</span>
                        </li>
                    )
                }
            </ul>
        </div>

    );
}

export default TodoList;
