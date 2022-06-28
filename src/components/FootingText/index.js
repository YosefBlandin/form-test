import styles from './styles.module.css'

export const FootingText = ({ children }) => {
  return (
    <section className={styles.footingTextContainer}>
      <p className={styles.footingTextParagraph}>{children}</p>
    </section>
  )
}
