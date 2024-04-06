import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext'

const estilos = {
    backgroundColor: 'red'
};

function TodoCounter( { total, completed } ) {

    const { 
        completedTodos, 
        totalTodos 
    } =React.useContext( TodoContext )

    return ( 
        // <h1 style={ estilos }>   => estilos en línea mediante una variable
        // <h1 style={{             => estilos en línea directamente en el elemento
        //     fontSize: '24px',
        //     textAlign: 'center',
        //     margin: 0,
        //     padding: '48px',
        // }}>

        completedTodos != totalTodos || totalTodos == 0 
        ?
            <h1 className="TodoCounter">                          
                    Has completado <span>{ completedTodos }</span> de <span>{ totalTodos }</span> TODOS
            </h1>
        :
            <h1 className="TodoCounter">                          
                Felicitades haz completados todos los TODOS pendientes!!!
            </h1>
        
    );
}

export { TodoCounter };