import TodoList from './components/todo-list/TodoList';

import './style.css';

function App() {

  return (
    <>
      <div className='container'>
        <h1>React + TypeScript Todo List</h1>
          <TodoList/>
      </div>
    </>
  );
};

export default App;
