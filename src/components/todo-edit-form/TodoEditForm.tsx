import React, { ChangeEvent } from 'react';

import './TodoEditForm.css';

export type TodoEditFormProps = {
    text: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    saveEditedTodo: () => void,
    cancelEditing: () => void,
};

const TodoEditForm = ({ text, handleChange, saveEditedTodo, cancelEditing } : TodoEditFormProps) => {
    return (
        <div className='edit-item'>
            <input
                type='text'
                value={text}
                onChange={handleChange}
            />
            <button onClick={saveEditedTodo}>Save</button>
            <button onClick={cancelEditing}>Cancel</button>
        </div>
    )
};

export default TodoEditForm;
