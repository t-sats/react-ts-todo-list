import './style.css';
import TodoList from './components/todo-list/TodoList';

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
