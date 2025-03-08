export function Header(props){

    const {todos} = props
    const todoLength =todos.length
    const isTasksPlural = todoLength !=1
    const taskOrTasks = isTasksPlural ? "Tasks" : "Task"
    return(
        <header>
            <h1 className = "text-gradient">You have {todoLength} open {taskOrTasks}.</h1>
        </header>
    )
}