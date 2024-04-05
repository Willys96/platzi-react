import logo from './platzi.webp';
//import './App.css';
import React, { useEffect } from 'react';
import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from "./TodoSearch"
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// const defaultTodos = [
// 	{ text: 'Corta cebolla', completed: true },
// 	{ text: 'Tomar el curso de Intro a React.js', completed: false },
// 	{ text: 'Llorar con la Llorona', completed: false },
// 	{ text: 'LALALALALA', completed: false },
// ];
// localStorage.setItem('TODOS_V1', defaultTodos);
//localStorage.removeItem('TODOS_V1');  

function useLocalStorage( itemName, initialValue  ) {
	
	const localStorageItem = localStorage.getItem(itemName); 
	let parsedItem;
	
	if ( !localStorageItem ) {
		localStorage.setItem( itemName, JSON.stringify( initialValue ) );
		parsedItem = initialValue;
	} else {
		parsedItem = JSON.parse( localStorageItem ); 
	}
	
	const [ item, setItem ] = React.useState( parsedItem );

	const saveItem = ( newItem ) => {
		localStorage.setItem(itemName, JSON.stringify( newItem ));
		setItem( newItem );	
	}
	
	return [ item,  saveItem ];
}

function App() {
	//Estados React
	const [ todos, saveTodos ] = useLocalStorage( 'TODOS_V1', [] );
	const [ searchValue, setSearchValue ] = React.useState( '' );
	

	//Estados derivados
	const completedTodos = todos.filter( todo => !!todo.completed).length; // !!todo.completed (doble negación) => obliga a retornar un valor booleano independientemente del tipo de variable que es todo.completed. TRUE siempre que sea diferente de undefined, null, o false 
	const totalTodos = todos.length;
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
			todo => todo.text == text 
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
			todo => todo.text == text 
		); 
		newTodos.splice( todoIndex, 1 );
		
		saveTodos( newTodos );
	}
	

	return (
		// <div className="App">
		//<React.Fragment>

		<>
			<TodoCounter 
				completed={ completedTodos } 
				total={ totalTodos } 
			/>
			<TodoSearch
				searchValue={ searchValue }
				setSearchValue={ setSearchValue }
			/>

			<TodoList>
				{
					// defaultTodos						
					searchedTodos
						.map( 
							todo => (
								<TodoItem 
									key={ todo.text } 
									text={ todo.text } 
									completed={ todo.completed } 
									onComplete={ () => completeTodo( todo.text )  }
									eliminarTodo={ () => eliminarTodo( todo.text ) }
								/>
							)
						)
				}
				{/* {[<TodoCounter/>, <TodoList/>]} */}
			</TodoList>

			<CreateTodoButton />
		</>

		//</React.Fragment>
		// </div>
	);
}


export default App;
