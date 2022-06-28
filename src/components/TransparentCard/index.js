import styles from './styles.module.css'

export const TransparentCard = ({ title = '', description = '' }) => {
  return (
    <article className={styles.transparentCard}>
      <h3 className={styles.transparentCardTitle}>{title}</h3>
      <p className={styles.transparentCardText}>{description}</p>
    </article>
  )
}
