//import logo from './platzi.webp';
//import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
// 	{ text: 'Corta cebolla', completed: true },
// 	{ text: 'Tomar el curso de Intro a React.js', completed: false },
// 	{ text: 'Llorar con la Llorona', completed: false },
// 	{ text: 'LALALALALA', completed: false },
// ];
// localStorage.setItem('TODOS_V1', defaultTodos);
//localStorage.removeItem('TODOS_V1');  


function App() {
	
	return(
		<TodoProvider>
			<AppUI/>
		</TodoProvider>
	);
	
}


export default App;
