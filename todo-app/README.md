# TodoList React App - Project Overview
[🌐 Live Demo](https://taskmate-app-ec6a05.netlify.app/) • [📂 GitHub Repo](https://github.com/BethiXSupraja/ReactProjects/edit/main/todo-app)

##  Introduction

**React** is a JavaScript framework used predominantly to develop dynamic web apps. React works primarily with JavaScript and then HTML and CSS. This project uses **Vite.js** to initialize and build the React app.
A dynamic and responsive Todo List application built with **React** and **Vite.js**. This project demonstrates modern web development practices using reusable components, state management, and local storage for data persistence.

---
## 🎯 Project Objective

The goal of this project is to explore **modern front-end development** practices with React, including:

- Component-based architecture
- State management with hooks
- Data persistence using `localStorage`
- User experience design with tab-based navigation

---

##  Features
### Add New Tasks 
Write your thoughts down with an easy-to-use input field.

### Tab-Based Filtering 
Switch between:
- `Open`: tasks yet to be completed
- `Completed`: tasks you've checked off
- `All`: full task history

### Delete Functionality
Remove tasks you no longer need, instantly.

### Mark as Complete  
A single click toggles a task’s completion status.

### Stateful Components 
Each component is state-aware and dynamically updates the UI.

### localStorage Sync 
Your tasks stay even after you close the browser.

### Custom CSS Styling  
Crafted with `fanta.css` and `index.css` to ensure a clean, responsive look.

### Responsive Design 
Fully usable across desktops, tablets, and mobile devices.

---

###  Project Initialization

```bash
npm init vite@latest todo-app
cd todo-app
npm install
npm run dev
```
---

### Project Structure
```
todo-app/
│
├── node_modules/          # npm packages
├── public/
│   └── vite.svg           # Static assets like videos, images
│
├── src/
│   ├── assets/            # Static files generated by Vite
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Tabs.jsx
│   │   ├── TodoList.jsx
│   │   ├── TodoCard.jsx
│   │   └── TodoInput.jsx
│   ├── App.jsx            # Root component (functional)
│   ├── main.jsx           # Injects App.jsx to index.html
│   ├── fanta.css          # Element styling by @somalijames
│   └── index.css          # Layout styling
│
├── .gitignore
├── eslint.config.js
├── index.html             # Root HTML file with `div#root` and script to main.jsx
├── package.json           # Config, scripts, dependencies
├── package-lock.json      # Locked versions of npm packages
├── vite.config.js         # Vite configuration
└── README.md

```
---

## Tech Stack

| Category     | Technology      |
|--------------|-----------------|
| Frontend     | React, JSX      |
| Build Tool   | Vite.js         |
| Styling      | CSS             |
| State Mgmt   | React Hooks     |
| Icons        | Font Awesome    |
| Persistence  | localStorage    |


---

## Component Breakdown

| Component     | Description                                               |
|---------------|-----------------------------------------------------------|
| `App.jsx`     | Manages state and connects all components                 |
| `Header.jsx`  | Displays total open tasks                                 |
| `Tabs.jsx`    | Tab navigation for filtering tasks                        |
| `TodoList.jsx`| Filters and maps tasks to cards                           |
| `TodoCard.jsx`| Shows individual todo item with actions                   |
| `TodoInput.jsx`| Input field and add button for new tasks                |

---

### React Functional Components - Overview

*   Functional components in React encapsulate logic in a modular and reusable manner.
*   They return **JSX** (JavaScript + HTML).
*   Easy to modify and handle multiple tasks.
*   Export components to be rendered as HTML-like tags in parent components.
*   import { Header } from "./components/Header";
---
### App.jsx

*   Root component, maintains core state:
    *   todos (list of tasks)
    *   selectedTab (filter state: Open, Completed, All)
*   Wrap JSX in **React Fragments** instead of <div>:
```
  <>
  {/\* Children \*/}
  </>
```
*   Declares and passes down **handler functions**:
  ```
    <Header todos={todos} />
     <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
     <TodoList todos={todos} selectedTab={selectedTab} handleCompletedTodo=  
     {handleCompletedTodo} handleDeleteTodo={handleDeleteTodo} />
    <TodoInput handleAddtodo={handleAddtodo} />
```
---
### React Hooks Used

**useState**
const \[todos, setTodos\] = useState(\[\]);
const \[selectedTab, setSelectedTab\] = useState("Open");
*   Used to manage reactive, immutable state.

**useEffect**
```
useEffect(() => {

if (!localStorage || !localStorage.getItem('todo-app')) return;

let db = JSON.parse(localStorage.getItem('todo-app'));

setTodos(db.todos);

}, \[\]);
```
*   Loads todos from localStorage once when app mounts.
---
### LocalStorage (Data Persistence)
**Save data function:**
```
function handleSaveData(currTodos) {
localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }));
}
```

**Called in:**
*   handleAddtodo
*   handleCompletedTodo
*   handleDeleteTodo
---
### Header.jsx

**Purpose:**
Displays the number of open tasks and whether to use “Task” or “Tasks”.

**Code:**
```
export function Header(props) {
const { todos } = props;
const todoLength = todos.length;
const taskOrTasks = todoLength !== 1 ? "Tasks" : "Task";
return (
<header>
<h1 className="text-gradient">You have {todoLength} open {taskOrTasks}.</h1>
</header>
);
}
```
---
### Tabs.jsx

**Purpose:**
Displays tabs (All, Open, Completed) with counts.

**Key Concepts:**
*   Mapping tabs from an array
*   Button click sets selectedTab
*   Uses props: { todos, selectedTab, setSelectedTab }

**Code:**
```
<nav className="tab-container">
{
tabs.map((tab, tabIndex) => {
const numbOfTasks = tab === 'All' ? todos.length :
tab === 'Open' ? todos.filter(val => !val.complete).length :
todos.filter(val => val.complete).length;
return (
<button key={tabIndex}
onClick={() => setSelectedTab(tab)}
className={"tab-button " + (tab === selectedTab ? 'tab-selected' : '')}>
<h4>{tab}<span>({numbOfTasks})</span></h4>
</button>
);
})
}
<hr />
</nav>
```
---
### TodoList.jsx

**Purpose:**
Filters and renders the list of tasks via <TodoCard />.

**Key Concepts:**
*   Props used: { todos, selectedTab, handleCompletedTodo, handleDeleteTodo }
*   Filters based on selectedTab
*   Uses .map() to render TodoCard for each filtered item.
*   Ensures original index is found using:
*   const tempTodoIndex = todos.findIndex(val => val.input === todo.input);

**Code Snippet:**
```
const filterTodoList = selectedTab === 'All' ? todos :
selectedTab === 'Completed' ? todos.filter(val => val.complete) :
todos.filter(val => !val.complete);
return (
<>
{filterTodoList.map((todo, todoIndex) => {
const tempTodoIndex = todos.findIndex(val => val.input === todo.input);
return (
<TodoCard
key={todoIndex}
todoIndex={tempTodoIndex}
{...props}
todo={todo}
/>
);
})}
</>
);
```
---
### TodoCard.jsx

**Purpose:**
Displays a single task with "Done" and "Delete" buttons.

**Props used:**
*   todo
*   handleCompletedTodo
*   handleDeleteTodo
*   todoIndex

**Code:**
```
<div className="card todo-item">
<p>{todo.input}</p>
<button onClick={() => handleCompletedTodo(todoIndex)} disabled={todo.complete}>
<h6>Done</h6>
</button>
<button onClick={() => handleDeleteTodo(todoIndex)}>
<h6>Delete</h6>
</button>
</div>
```
---
### TodoInput.jsx

**Purpose:**
Handles task input and passes new todo to parent.

**State:**
const \[inputValue, setInputValue\] = useState('');

**Props:**
const { handleAddtodo } = props;

**Code:**
```
<div className="input-container">
<input
value={inputValue}
onChange={(e) => setInputValue(e.target.value)}
placeholder="Add Task"
/>
<button onClick={() => {
if (!inputValue) return;
handleAddtodo(inputValue);
setInputValue('');
}}>
<i className="fa-solid fa-plus"></i>
</button>
</div>
```
---
### Handler Functions in App.jsx

**Add Todo:**
```
function handleAddtodo(newTodo) {
const newTodoList = \[...todos, { input: newTodo, complete: false }\];
setTodos(newTodoList);
handleSaveData(newTodoList);
}
```

**Mark Todo as Completed:**
```
function handleCompletedTodo(index) {
let newTodoList = \[...todos\];
newTodoList\[index\] = { ...todos\[index\], complete: true };
setTodos(newTodoList);
handleSaveData(newTodoList);
}
```
**Delete Todo:**
```
function handleDeleteTodo(index) {
const newTodoList = todos.filter((\_, i) => i !== index);
setTodos(newTodoList);
handleSaveData(newTodoList);
}
```

---
##  Conclusion

The **React ToDo App** is a practical and hands-on implementation of various key concepts in React, including functional components, state management using `useState`, data persistence with `localStorage`, and the use of **props** to handle inter-component communication. By breaking down the app into small, modular components, this project showcases the power of **React's component-based architecture**, which allows for a highly maintainable and scalable application.

### Key Learnings

1.  **Component-Based Architecture**:
*   Dividing the app into smaller, reusable components made it easier to manage the UI and logic.
 *   Each component, like `TodoCard` and `Tabs`, is designed to handle a specific task, making them easy to debug and extend.
        
2.  **React State Management**:
 *   Mastered the use of `useState` for handling both the list of tasks and tab selections.
 *   Gained proficiency in managing reactive state to ensure the app reflects user changes immediately.
        
3.  **Persistence with `localStorage`**:
 *   Learned how to persist data between page reloads using the browser’s `localStorage`.
 *   Implemented the `useEffect` hook to initialize the app state by loading previously saved todos.
        
4.  **React Hooks**:
 *   Used `useEffect` to fetch and save data, enhancing the app’s lifecycle management.
*   Improved app performance by controlling side effects and reducing unnecessary re-renders.
        
5.  **UI/UX Design**:   
*   Focused on simplicity and functionality to ensure the user interface was intuitive and responsive.
  *   Implemented tab filters for easy task management and a clean layout for a better user experience.
        

* * *

## Obstacles and Challenges

1.  **State Sync with `localStorage`**:
     *   One major challenge was ensuring that the app correctly reflected state changes and persisted them to `localStorage`. Initially, there were issues where changes weren’t immediately reflected after reloading the app, which was resolved by ensuring proper state management and `useEffect` synchronization.
        
2.  **Filtering Todos Dynamically**:
    *   Implementing the tab filtering functionality (`All`, `Open`, `Completed`) required careful handling of conditional rendering and mapping. This was tricky when filtering tasks based on their completion status, especially with the need to update the UI dynamically.
        
3.  **Optimizing Component Rendering**:
     *   Another challenge was optimizing the rendering of `TodoCard` components when the list became larger. Ensuring that the UI didn’t freeze while handling updates was solved by utilizing proper React key management and breaking down the task list into smaller parts.
        
4.  **Form Handling and Validation**:
     *   Properly managing the task input form to avoid empty or invalid inputs was tricky at first. Implementing basic validation (e.g., preventing the addition of empty tasks) was crucial for a smoother user experience.
        
5.  **Responsive Layout**:
    *   Making sure the layout was responsive across different devices presented a challenge, especially ensuring that the app looked good on both large screens and mobile devices. This was tackled using flexible CSS layouts and media queries.
        

* * *

##  Future Enhancements

*   **User Authentication**: Add user login functionality to enable personalized todo lists.  
*   **Enhanced UI**: Integrate modern UI libraries (e.g., Material-UI or Bootstrap) for better design and usability.  
*   **Task Categories**: Implement categories for tasks (e.g., Work, Personal) for better organization.   
*   **Drag-and-Drop Support**: Allow users to reorder tasks through drag-and-drop functionality.
   

* * *

