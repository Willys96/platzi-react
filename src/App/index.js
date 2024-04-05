//import logo from './platzi.webp';
//import './App.css';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';

// const defaultTodos = [
// 	{ text: 'Corta cebolla', completed: true },
// 	{ text: 'Tomar el curso de Intro a React.js', completed: false },
// 	{ text: 'Llorar con la Llorona', completed: false },
// 	{ text: 'LALALALALA', completed: false },
// ];
// localStorage.setItem('TODOS_V1', defaultTodos);
//localStorage.removeItem('TODOS_V1');  


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
		<AppUI
			completedTodos = { completedTodos }
			totalTodos = { totalTodos }
			searchValue = { searchValue }
			setSearchValue = { setSearchValue }
			searchedTodos = { searchedTodos }
			completeTodo={ completeTodo }
			eliminarTodo={ eliminarTodo }
		/>
	);
	
}


export default App;
