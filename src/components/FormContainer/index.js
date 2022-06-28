import styles from './styles.module.css'

export const FormContainer = ({ children, props }) => {
  return (
    <form className={styles.formContainer} {...props}>
      {children}
    </form>
  )
}
