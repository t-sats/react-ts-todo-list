import { ChangeEvent } from 'react';

import './TodoForm.css';

type TodoFormProps = {
    text: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    addTodo: () => void
};

const TodoForm = ({ text, handleChange, addTodo } : TodoFormProps) => {
    return (
        <div className='form-container'>
            <input
                value={text}
                onChange={handleChange}
                placeholder={'Add Todo item'}
            />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
};

export default TodoForm;
