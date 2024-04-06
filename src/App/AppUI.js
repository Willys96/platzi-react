import React from "react";
import { TodoCounter } from "../TodoCounter"
import { TodoSearch } from "../TodoSearch"
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoContext } from "../TodoContext";


function AppUI() {
    return (
		// <div className="App">
		//<React.Fragment>

		<>
			<TodoCounter />
			<TodoSearch/>

			<TodoContext.Consumer>
				{
					({
						loading,
						error,
						searchedTodos,
						completeTodo,
						eliminarTodo						
					}) => (
						<TodoList>
							{ loading &&  (
								<>
									<TodosLoading />
									<TodosLoading />
									<TodosLoading />
								</>
							)}
							{ error && <TodosError/> }
							{ !loading && searchedTodos.length == 0 && <EmptyTodos/> }
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
					)
				}

			</TodoContext.Consumer>

			<CreateTodoButton />
		</>

		//</React.Fragment>
		// </div>
	);
}

export { AppUI };
