import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { Task, TaskItem } from "./components/Task";
import { EmptyBoard } from "./components/EmptyBoard";
import { useState } from "react";
import { ConfirmationModal } from "./components/ConfirmationModal";

export function App() {
  const [taskList, setTaskList] = useState<TaskItem[]>([]);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [taskToDelete, setTaskToDelete] = useState("");

  function createNewTask(newTaskDescription: string) {
    const newId = `${newTaskDescription.substring(0, 4)}-${Math.floor(
      Math.random() + Date.now()
    )}`;

    const newTask: TaskItem = {
      id: newId,
      description: newTaskDescription,
      status: false,
    };

    setTaskList([...taskList, newTask]);
  }

  function updateTask(taskId: string, newStatus: boolean) {
    const newList = [...taskList];

    const index = newList.findIndex((item) => item.id === taskId);
    newList[index] = { ...newList[index], status: newStatus };

    setTaskList(newList);
  }

  function showDeleteTask(taskId: string) {
    setTaskToDelete(taskId);
    setShowDeleteConfirmationModal(true);
  }
  function deleteTask() {
    const newTaskList = taskList.filter((item) => item.id !== taskToDelete);
    setTaskList([...newTaskList]);

    setShowDeleteConfirmationModal(false);
    setTaskToDelete("");
  }

  const totalTasks = taskList.length;
  const finishedTasks = taskList.filter((item) => item.status).length;

  return (
    <div className="App">
      <ConfirmationModal
        visible={showDeleteConfirmationModal}
        onClose={() => setShowDeleteConfirmationModal(false)}
        onConfirm={deleteTask}
      />

      <Header />
      <div className={styles.wrapper}>
        <TaskForm onCreateNewTask={createNewTask} />

        <div className={styles.board}>
          <header>
            <span className={styles.totalTasks}>
              Tarefas criadas{" "}
              <strong className={styles.counter}>{totalTasks}</strong>
            </span>
            <span className={styles.finishedTasks}>
              Concluídas
              <strong className={styles.counter}>
                {totalTasks > 0 ? `${finishedTasks} de ${totalTasks}` : "0"}
              </strong>
            </span>
          </header>
        </div>

        {taskList.length < 1 ? (
          <EmptyBoard />
        ) : (
          <div>
            {taskList.map((item) => {
              return (
                <Task
                  key={item.id}
                  id={item.id}
                  description={item.description}
                  status={item.status}
                  onDeleteTask={showDeleteTask}
                  onUpdateTask={updateTask}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
