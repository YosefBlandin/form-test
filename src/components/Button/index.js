import styles from './styles.module.css'

export const Button = props => {
  return (
    <button
      className={styles.button}
      {...props}
      style={{
        background: props?.disabled ? 'rgb(240,240,240)' : false,
        color: props?.disabled ? 'gray' : false
      }}
    >
      {props.buttonTitle}
    </button>
  )
}
