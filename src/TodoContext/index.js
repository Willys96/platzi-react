import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }){

    //Estados React
	//const [ todos, saveTodos ] = useLocalStorage( 'TODOS_V1', [] );
	const { 
		item: todos, 
		saveItem:  saveTodos,
		loading,
		error 
	} = useLocalStorage( 'TODOS_V1', [] );
	const [ searchValue, setSearchValue ] = React.useState( '' );
	

	/** 
	 * Estados derivados
	 * !!todo.completed (doble negación) => obliga a retornar un valor booleano independientemente del tipo de variable que es todo.completed. 
	 * TRUE siempre que sea diferente de undefined, null, o false 
	 */
	const completedTodos = todos.filter( todo => !!todo.completed).length; 
	const totalTodos = todos.length;

	
	/** OJO OJO
	 * este hook se ejecuta al final de todos lo procesos y solo una vez si el segundo armento no existe o es un array vacío.
	 * Si el array no esta vacío el hook se ejecutaría también cada vez que uno de sus elementos cambia.
	 * => muy útil para procesos asincronos => ...Loading...
	 */
	/*React.useEffect( 
		() => {
			console.log('Loooooooooog 2');
		},
		[ totalTodos, completedTodos ]
	);*/


	const searchedTodos = todos.filter( 
		( todo ) => {
			return todo.text.toLowerCase().includes( searchValue.toLowerCase() );
		}

		// Codigo identico al anterior
		// ( todo ) => (
		// 	todo.text.toLowerCase().includes( searchValue.toLowerCase() )
		// )		
	);	

	const completeTodo = ( text ) => {
		const newTodos = [ ...todos ];
		const todoIndex = newTodos.findIndex( 
			todo => todo.text === text 
		);
		newTodos[ todoIndex ].completed = true; 
		
		saveTodos( newTodos );
	};

	const eliminarTodo = ( text ) => {
		const newTodos = [ ...todos ];
		// const todosActulizados = newTodos.filter( todo => {
		// 	return todo.text != text;
		// })
		//setTodos( todosActulizados );

		// Método anterior funciona igual de correcto
		const todoIndex = newTodos.findIndex( 
			todo => todo.text === text 
		); 
		newTodos.splice( todoIndex, 1 );
		
		saveTodos( newTodos );
	}

    return(       
        <TodoContext.Provider
            value={{
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                eliminarTodo
            }}
        >
            { children }
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider }