import React, {useContext, useState} from "react";

const TodoListItemsContext = React.createContext();

export const useTodoList = () => {
    return useContext(TodoListItemsContext);
}

export const TodoListItemsProvider = ({ children }) => {
    const [ id, setId ] = useState(3)
    const [ todoData, setTodoData ] = useState([
        createItem(1,'first'),
        createItem(2, 'second'),
        createItem(3, 'third'),

    ]);

    function createItem(nextId, label) {
        return (
            {
                id: nextId,
                label: label,
                done: false
            }
        )
    }

    const addItem = label => {
        const nextId = id + 1;
        setId(prevState => prevState + 1);
        setTodoData((prevState) => {
                const data = createItem(nextId, label);
                const newState = [...prevState]
                newState.push(data);
                return newState;
            }
        );
    }

    const removeItem = id => {
        setTodoData(prevState => {
            const idx = prevState.findIndex(el => el.id === id)
            const before = prevState.slice(0, idx);
            const after = prevState.slice(idx + 1, todoData.length);
            const newState = [...before, ...after];
            return newState;
            }
        )
    }

    const doneSwitcher = id => {
        setTodoData(prevState => {
            const idx = prevState.findIndex(el => el.id === id);
            const item = todoData[idx];
            const newItem = {...item, done: !item['done']}
            return [
                ...prevState.slice(0, idx),
                newItem,
                ...prevState.slice(idx + 1, prevState.length)];
            }
        )
    }

    return(
        <TodoListItemsContext.Provider value={{
            listItems: todoData,
            addItem,
            removeItem,
            doneSwitcher
        }} >
            { children }
        </TodoListItemsContext.Provider>
    )
}