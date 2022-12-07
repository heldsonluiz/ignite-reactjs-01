import { Trash } from 'phosphor-react';
import styles from './Task.module.css'
import { useState, ChangeEvent } from 'react';

export type TaskItem = {
  id: string
  description: string;
  status: boolean;
}

export interface Taskprops extends TaskItem {
  onDeleteTask: (taskId: string) => void,
  onUpdateTask: (task: string, newStatus: boolean) => void
}

export function Task ({id, description, status, onDeleteTask, onUpdateTask}: Taskprops) {
  const [checked, setChecked] = useState(status)

  function handleDeleteTask () {
    onDeleteTask(id);
  }

  function handleUpdateTask (event: ChangeEvent) {
    let newValue = !checked
    setChecked(newValue)
    onUpdateTask(id, newValue)
  }

  return (
    <div className={`${styles.taskItem} ${status ? styles.finished : ""}`} >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleUpdateTask}
      />
      <div className={styles.description}>{description}</div>
      <div className={styles.deleteIcon} onClick={handleDeleteTask}>
        <Trash size={16} />
      </div>
    </div>
  )
}