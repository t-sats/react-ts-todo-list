import React, { ReactNode } from 'react';

import './TodoListItem.css'

export type TodoListItemProps = {
    text: string,
    className?: string,
    children?: ReactNode
};
const TodoListItem = ({ text, className, children } : TodoListItemProps) => {
    return (
        <div className='todo-list-item-container'>
            <p className={className}>{text}</p>
            {children}
        </div>
    )
};

export default TodoListItem;
