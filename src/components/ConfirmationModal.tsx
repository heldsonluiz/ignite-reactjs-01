import styles from './ConfirmationModal.module.css'

interface ConfirmationModalProps {
  visible: boolean
  onClose: () => void
  onConfirm: () => void
}

export function ConfirmationModal ({visible, onClose, onConfirm}: ConfirmationModalProps) {
  if(!visible) return null

  function handleCancel () {
    onClose()
 }
  function handleConfirm () {
    onConfirm()
 }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <header className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>
            Deseja excluir a task?
          </h4>
        </header>
        <div className={styles.modalBody}>
          Esta ação não poderá ser desfeita
        </div>
        <footer className={styles.modalFooter}>
          <button onClick={handleCancel} className={styles.buttonCancel}>Cancelar</button>
          <button onClick={handleConfirm} className={styles.buttonConfirm}>Excluir</button>
        </footer>
      </div>
    </div>
  )
}