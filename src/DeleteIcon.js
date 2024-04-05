import React from "react";
import { TodoIcon } from "./TodoIcon";

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
