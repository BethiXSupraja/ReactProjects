import { TodoCard } from "./TodoCard";

export function TodoList(props){
    const {todos , selectedTab } = props

    
    const filterTodoList = selectedTab === 'All' ?
    todos:
    selectedTab === 'Completed' ?
    todos.filter(val=> val.complete):
    todos.filter(val=> !val.complete)

    return(
        <>
        {
            filterTodoList.map((todo,todoIndex)=>{
                const tempTodoIndex = todos.findIndex(val => val.input == todo.input)
                console.log(tempTodoIndex)
                return (
                    <TodoCard key={todoIndex} 
                    todoIndex ={tempTodoIndex}
                    {...props}
                    todo ={todo}
                    />
                )
            }

            )
        }
            
        </>
    )
}