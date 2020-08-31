import React from "react";
import {useTodoList} from "../../context/TodoListItemsContext";

const TodoListItem = ({ item }) => {
    const { removeItem, doneSwitcher } = useTodoList();
    return(
        <div className="group-list">
            <input
                className="group-list-item"
                type="checkbox"
                checked={ item.done }
                onChange={ () => doneSwitcher(item.id) } />
            <h4 className="group-list-item">{ item.label }</h4>
            <button
                className="btn btn-outline-danger"
                onClick={ () => removeItem(item.id) }
                >delete</button>
        </div>
    )
}

export default TodoListItem;