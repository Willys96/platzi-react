import React from "react";
import { TodoCounter } from "../TodoCounter"
import { TodoSearch } from "../TodoSearch"
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';


function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    eliminarTodo
}) {
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

export { AppUI };
