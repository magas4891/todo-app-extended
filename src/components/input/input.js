import React, { useState } from "react";
import { useTodoList } from "../../context/TodoListItemsContext";

const Input = () => {

    const { addItem } = useTodoList();

    const [ label, setLabel ] = useState('');

    function submitHandler(e) {
        e.preventDefault();
        addItem(label);
        setLabel('');
    }

    function addLabel(e) {
        setLabel(e.target.value);
    }

    return (
        <form className="item-add-form d-flex" onSubmit={ submitHandler }>
            <input className="form-control" type="text" value={ label } onChange={ addLabel } />
            <button className="btn btn-outline-secondary">send</button>
        </form>
    )
}

export default Input;