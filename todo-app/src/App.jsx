import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import {useState ,useEffect} from "react"


function App() {

  //   const todos = [
  // { input: 'Hello! Add your first todo!', complete: true },
  // { input: 'Get the groceries!', complete: false },
  // { input: 'Learn how to web design', complete: false },
  // { input: 'Say hi to gran gran', complete: true },
  //    ]

  const [todos, setTodos ] = useState([{ input: 'Hello! Add your first todo!', complete: true }])
  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddtodo(newTodo){
    const newTodoList = [...todos,{input: newTodo , complete: false }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)

  }
  function handleCompletedTodo(index){
    //update/edit/modify
    let newTodoList = [...todos]
    let completeTodo = todos[index]
    completeTodo['complete'] = true //modified it
    newTodoList[index] = completeTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)

  }
  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val,valIndex)=>{
      return valIndex !== index

    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)

  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    console.log('here')
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])
  

  return (
   
      <>
        <Header todos ={todos}/>
        <Tabs selectedTab ={selectedTab} setSelectedTab ={setSelectedTab} todos ={todos}/>
        <TodoList handleCompletedTodo={handleCompletedTodo} handleDeleteTodo={handleDeleteTodo} selectedTab ={selectedTab} todos ={todos}/>
        <TodoInput handleAddtodo ={handleAddtodo}/>
      
      </>
     
  )
}

export default App
