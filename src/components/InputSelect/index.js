import { MdKeyboardArrowDown } from 'react-icons/md'
import styles from './styles.module.css'

export const InputSelect = ({ options = [], value = '', setValue }) => {
  return (
    <div className={styles.inputSelectContainer}>
      <select
        className={styles.inputSelect}
        onChange={e => setValue(e.currentTarget.value)}
        value={value}
      >
        {options.map((element, index) => (
          <option key={element} value={index === 0 ? '' : element}>
            {element}
          </option>
        ))}
      </select>
      <MdKeyboardArrowDown className={styles.inputSelectIcon} />
    </div>
  )
}
