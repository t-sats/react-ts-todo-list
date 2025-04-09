import TodoList from './components/todo-list/TodoList';
import { ThemeContextProvider } from './contexts/ThemeContext';
import ToggleTheme from './components/toggle-theme/ToggleTheme';

import './styles/style.css';

function App() {

  return (
    <>
      <div className='container'>
        <h1>React + TypeScript Todo List</h1>
          <ThemeContextProvider>
              <ToggleTheme/>
          </ThemeContextProvider>
          <TodoList/>
      </div>
    </>
  );
};

export default App;
