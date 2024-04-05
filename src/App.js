import logo from './platzi.webp';
//import './App.css';
import React from 'react';
import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from "./TodoSearch"
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
	{ text: 'Corta cebolla', completed: true },
	{ text: 'Tomar el curso de Intro a React.js', completed: false },
	{ text: 'Llorar con la Llorona', completed: false },
	{ text: 'LALALALALA', completed: false },
];

function App() {
	//Estados React
	const [ todos, setTodos ] = React.useState( defaultTodos );
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
		setTodos( newTodos );	
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
		setTodos( newTodos );
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
