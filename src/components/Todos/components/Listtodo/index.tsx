import styles from './Listtodo.module.css'

import EmptyList from "../../../../assets/icons/empty-list.svg";
import { Todo } from '../Todo';
import { ITodo } from '../../../../models/todo';


export interface ListtodoProps {
  todos: ITodo[];

  handleDeleteTodo: (id: string) => void;
  handleChecked: (id: string) => void;
}

export function Listtodo({ todos, handleDeleteTodo, handleChecked }: ListtodoProps) {

  const lenghtTodosChecked = todos.reduce((previewsValue, todo) => {
    return todo.isChecked ? previewsValue + 1 : previewsValue;
  }, 0);

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <div className={styles.infoCounter}>
          <span className={`${styles.description} ${styles.textBlue} `}>Tarefas criadas</span>
          <span className={styles.badge}>{todos.length}</span>
        </div>
        <div className={styles.infoCounter}>
          <span className={`${styles.description} ${styles.textPurple} `}>Concluídas</span>
          <span className={styles.badge}>{lenghtTodosChecked} de {todos.length}</span>
        </div>
      </header>

      {
        todos.length < 1
        &&
        <div className={styles.emptyContainer}>

          <img className={styles.emptyIcon} src={EmptyList} alt="Icone de Lista Vazia" />

          <div className={styles.info}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>

        </div>
      }

      {
        todos.length > 0
        &&
        <div className={styles.items}>
          {

            todos.map(todo => {
              return (
                <Todo key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleChecked={handleChecked} />
              )
            })
          }
        </div>
      }

    </div>
  )
}
