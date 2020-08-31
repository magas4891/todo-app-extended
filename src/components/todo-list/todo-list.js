import React from "react";
import TodoListItem from "../todo-list-item";
import { useTodoList } from "../../context/TodoListItemsContext";

const TodoList = () => {
    const { listItems } = useTodoList();

    const todoListItem = listItems.map(item => {
        return (
            <li key={ item.id } className="list-group-item">
                <TodoListItem  item={ item } />
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            { todoListItem }
        </ul>
    )
}

export default TodoList;