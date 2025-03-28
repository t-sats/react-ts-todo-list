import React, {ChangeEvent, useEffect, useState} from 'react';
import TodoForm from './TodoForm';

type TodoProps = {
    id: number,
    text: string,
    completed: boolean
};

const TodoList = () => {

    const [todos, setTodos] = useState<TodoProps[]>([]);

    const [text, setText] = useState('');

    const [editingId, setEditingId] = useState<number | null>(null);

    const [editText, setEditText] = useState<string>('');

    useEffect(() => {
        const savedTodos: string | null = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos))
        };
    }, []);

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos))
        };
    }, [todos]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const addTodo = () => {

        if (!text.trim()) return;

        const newText: TodoProps = {
            id: Date.now(),
            text: text,
            completed: false
        };

        setTodos([...todos, newText]);
        setText('');
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const startEditing = (todo: TodoProps) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const saveEditedTodo = () => {
    if (editText.trim() === '') return;

    setTodos(todos.map(todo =>
      todo.id === editingId ? { ...todo, text: editText } : todo
    ));
    setEditingId(null);
  };

  const cancelEditing = () => {
    setEditingId(null);
  };

    return (
        <>
            <TodoForm
                text={text}
                handleChange={handleChange}
                addTodo={addTodo}
            />
            <ul>
                {todos.map((todo) =>
                    <li key={todo.id}>
                        {editingId === todo.id ? (
                            <div>
                                <input
                                    type='text'
                                    value={editText}
                                    onChange={handleEditChange}
                                />
                                <button onClick={saveEditedTodo}>Save changes</button>
                                <button onClick={cancelEditing}>Cancel</button>
                            </div>
                        ) : (
                            <>
                              <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                                <button onClick={() => toggleTodo(todo.id)}>Mark as completed Todo</button>
                                <button onClick={() => startEditing(todo)}>Edit Todo</button>
                                <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
                            </>
                        )}

                    </li>
                )}
            </ul>
        </>
    )
};

export default TodoList;
