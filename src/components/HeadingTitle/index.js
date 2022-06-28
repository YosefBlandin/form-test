import styles from './styles.module.css'

export const HeadingTitle = ({ title = '', subtitle = '' }) => {
  return (
    <section className={styles.headingTitleContainer}>
      <h2 className={styles.headingTitle}>{title}</h2>
      <p className={styles.headingSubtitle}>
        Already have an account?{' '}
        <a href={'/'} referrerPolicy={'no-referrer'}>
          Sign in
        </a>
      </p>
    </section>
  )
}
