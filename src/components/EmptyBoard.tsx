import styles from './EmptyBoard.module.css'
import emptyBoard from '../assets/empty-board.svg'

export function EmptyBoard () {
  return (
    <div className={styles.emptyBoard}>
      <img src={emptyBoard} alt="Lista vazia" />
      <h2>Você ainda não tem tarefas cadastradas</h2>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}