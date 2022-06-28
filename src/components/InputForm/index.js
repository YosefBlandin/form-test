import { useState } from 'react'
import { IoEyeSharp, IoEyeOffSharp } from 'react-icons/io5'
import { InputSelect } from '../InputSelect'
import styles from './styles.module.css'

export const InputForm = ({
  inputName = '',
  inputType = '',
  labelTitle = '',
  requirementText = '',
  options = [],
  inputValue = '',
  setInputValue,
  errMessage = '',
  setErrMessage = () => {}
}) => {
  const [isLabelActive, setIsLabelActive] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className={styles.inputFormContainer}>
      {options.length > 0 ? (
        <InputSelect
          options={options}
          setValue={setInputValue}
          value={inputValue}
        />
      ) : (
        <>
          <label
            htmlFor={inputName}
            className={
              isLabelActive
                ? `${styles.inputFormLabel} ${styles.inputFormLabelActive}`
                : styles.inputFormLabel
            }
            style={{
              color: errMessage.length > 0 ? 'rgb(255, 89, 89)' : false
            }}
          >
            {labelTitle}
          </label>
          <input
            onFocus={() => setIsLabelActive(true)}
            onBlur={() => {
              if (inputValue.length > 0) {
              } else {
                setIsLabelActive(false)
              }
            }}
            onChange={e => {
              setInputValue(e.currentTarget.value)
              if (e.target.value.length > 0) {
                setIsLabelActive(true)
              } else {
                setIsLabelActive(false)
              }
            }}
            className={
              errMessage.length > 0
                ? `${styles.inputFormInput} ${styles.inputFormInputError}`
                : styles.inputFormInput
            }
            name={inputName}
            type={showPassword === true ? 'text' : inputType}
          />
        </>
      )}
      {requirementText && !errMessage.length > 0 ? (
        <span className={styles.inputFormSpan}>{requirementText}</span>
      ) : errMessage.length > 0 ? (
        <span className={styles.inputFormError}>{errMessage}</span>
      ) : (
        false
      )}
      {(inputType === 'password' || inputName.includes('password')) && (
        <>
          {showPassword === true ? (
            <IoEyeOffSharp
              className={styles.inputFormIcon}
              onClick={handleShowPassword}
            />
          ) : (
            <IoEyeSharp
              className={styles.inputFormIcon}
              onClick={handleShowPassword}
            />
          )}
        </>
      )}
    </div>
  )
}
