import styles from './Todos.module.css'
import PlusIcon from "../../assets/icons/plus.svg";
import { Listtodo } from './components/Listtodo';
import { ChangeEvent, useState } from 'react';
import { ITodo } from '../../models/todo';
import { v4 } from "uuid";

export function Todos() {
    const [messageTodo, setMessageTodo] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    function handleAddTodo() {
        const newTodo = {
            id: v4(),
            description: messageTodo,
            isChecked: false
        }
        setTodos((todosPreview) => [...todosPreview, newTodo]);
        setMessageTodo('');
    }

    function inputChange(event: ChangeEvent<HTMLInputElement>) {
        setMessageTodo(event.target.value);
    }

    function handleDeleteTodo(id: string) {
        const listTodoWithoutDeletedOne = todos.filter(todo => todo.id !== id);
        setTodos(listTodoWithoutDeletedOne);
    }

    function handleCheckTodo(id: string) {
        const listTodos = todos.map(todo => {
            if (todo.id == id) {
                todo.isChecked = !todo.isChecked;
            }
            return todo;
        });
        setTodos(listTodos);
    }


    return (
        <>
            <div className={styles.container}>

                <div className={styles.formGroup}>
                    <input type="text" placeholder='Adicione uma nova tarefa' value={messageTodo} onChange={inputChange} />
                    <button disabled={messageTodo.length < 1} onClick={handleAddTodo}>
                        Criar
                        <img src={PlusIcon} alt="Icone de Adicionar" />
                    </button>
                </div>


                <Listtodo todos={todos} handleDeleteTodo={handleDeleteTodo} handleChecked={handleCheckTodo} />

            </div>
        </>
    )
}
