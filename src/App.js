import logo from './platzi.webp';
//import './App.css';
import React from 'react';
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

function App() {
	const localStorageTodos = localStorage.getItem('TODOS_V1'); 
	let parsedTodos;

	if ( !localStorageTodos ) {
		localStorage.setItem( 'TODOS_V1', JSON.stringify( [] ) );
		parsedTodos = [];
	} else {
		parsedTodos = JSON.parse( localStorageTodos ); 
	}

	//Estados React
	const [ todos, setTodos ] = React.useState( parsedTodos );
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

	const saveTodos = ( newTodos ) => {
		localStorage.setItem('TODOS_V1', JSON.stringify( newTodos ));
		setTodos( newTodos );	
	}

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
