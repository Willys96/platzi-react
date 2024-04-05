import React, { useState } from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {    

    return ( 
        <input 
        className="TodoSearch" 
        placeholder="Cortar cebolla" 
        value={searchValue}
        onChange={
            ( event )=> { //    => Uso de eventos +
                
                // console.log('Escribiste en TODO Search');
                // console.log( event );
                // console.log( event.target );
                // console.log( event.target. value );
                setSearchValue( event.target.value );
                
            }
        }
        />
    );
}

export { TodoSearch };