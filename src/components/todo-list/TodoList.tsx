import React, { ChangeEvent, useEffect, useState } from 'react';
import TodoForm from '../todo-form/TodoForm';
import TodoEditForm from '../todo-edit-form/TodoEditForm';
import TodoListItem from '../todo-list-item/TodoListItem';

import './TodoList.css';

type TodoProps = {
    id: number,
    text: string,
    completed: boolean
};

const TodoList = () => {

    const [todos, setTodos] = useState<TodoProps[]>(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [text, setText] = useState('');

    const [editingId, setEditingId] = useState<number | null>(null);

    const [editText, setEditText] = useState<string>('');

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
            <div className='todo-container'>
                {todos.map((todo) =>
                    <div key={todo.id} className='todo-item'>
                        {editingId === todo.id ? (
                            <TodoEditForm
                                text={editText}
                                handleChange={handleEditChange}
                                saveEditedTodo={saveEditedTodo}
                                cancelEditing={cancelEditing}
                            />
                        ) : (
                            <TodoListItem
                                className={todo.completed ? 'completed' : ''}
                                text={todo.text}
                            >
                                <div className='actions'>
                                    <button onClick={() => toggleTodo(todo.id)}>Completed</button>
                                    <button onClick={() => startEditing(todo)}>Edit Todo</button>
                                    <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
                                </div>
                            </TodoListItem>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default TodoList;
