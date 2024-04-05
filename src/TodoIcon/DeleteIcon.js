import React from "react";
import { TodoIcon } from "./";

function DeleteIcon({ eliminarTodo }) {
    return ( 
        <TodoIcon 
            type="delete"
            color="gray"
            onClickIcon={ eliminarTodo }
        />
    );
}

export { DeleteIcon } ;
