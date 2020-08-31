import React from "react";
import Header from "../header";
import Input from "../input";
import TodoList from "../todo-list";
import {TodoListItemsProvider} from "../../context/TodoListItemsContext";


const App = () => {
    return(
        <TodoListItemsProvider>
            <Header />
            <Input />
            <TodoList />
        </TodoListItemsProvider>
    )
}

export default App;