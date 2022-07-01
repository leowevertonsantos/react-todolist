import React from 'react';
import styles from "./Todo.module.css";

import TrashIcon from "../../../../assets/icons/trash.svg";
import { ITodo } from '../../../../models/todo';

interface TodoProps {
    todo: ITodo;
    handleDeleteTodo: (id: string) => void,
    handleChecked: (id: string) => void,
}

export function Todo({ todo, handleDeleteTodo, handleChecked }: TodoProps) {

    function handleCheckTodo() {
        handleChecked(todo.id);
    }

    return (
        <div className={styles.todo}>
            <div className={styles.info}>
                <label className={styles.containerCheckbox}>
                    <input type="checkbox" onChange={handleCheckTodo} checked={todo.isChecked}
                    />
                    <span className={styles.checkmark}></span>
                </label>
                <p className={todo.isChecked ? styles.lineThrough : ''}> {todo.description}</p>
            </div>

            <div className={styles.buttonRemove} onClick={() => handleDeleteTodo(todo.id)}><img src={TrashIcon} alt="Icone de Excluir todo" /></div>
        </div>
    )
}
