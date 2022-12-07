import styles from './TaskForm.module.css'
import {PlusCircle} from 'phosphor-react'
import { useState, ChangeEvent, FormEvent } from 'react';

interface TaskFormProps {
  onCreateNewTask: (comment: string) => void;
}

export function TaskForm ({onCreateNewTask}:TaskFormProps) {
  const [itemDescription, setItemDescription] = useState('')

  function handleNewTaskChange (event: ChangeEvent<HTMLInputElement>) {
    setItemDescription(event.target.value)
  }

  function handleCreateNewTask (event: FormEvent) {
    event.preventDefault();

    if (!itemDescription) return;

    onCreateNewTask(itemDescription);
    setItemDescription('');
  }

  const isNewTaskEmpty = itemDescription.trim().length < 1

  return (
    <form
      className={styles.inputForm}
      onSubmit={handleCreateNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        value={itemDescription}
      />
      <button type="submit" disabled={isNewTaskEmpty}>
        Criar
        <PlusCircle size={16}/>
      </button>
    </form>
  )
}