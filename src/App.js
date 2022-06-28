import { useEffect, useState } from 'react'
import { Button } from './components/Button'
import { FootingText } from './components/FootingText'
import { FormContainer } from './components/FormContainer'
import { HeadingTitle } from './components/HeadingTitle'
import { InputForm } from './components/InputForm'
import { TransparentCard } from './components/TransparentCard'

function App () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [password, setPassword] = useState('')
  const [emailErrMessage, setEmailErrMessage] = useState('')
  const [passwordErrMessage, setPasswordErrMessage] = useState('')
  const [formChecked, setFormChecked] = useState(false)

  const inputFields = [
    {
      inputName: 'name',
      inputType: 'text',
      labelTitle: 'Your name',
      inputValue: name,
      setInputValue: setName
    },
    {
      inputName: 'email',
      inputType: 'email',
      labelTitle: 'Email address',
      inputValue: email,
      setInputValue: setEmail,
      errMessage: emailErrMessage,
      setErrMessage: setEmailErrMessage
    },
    {
      inputName: 'role',
      inputType: 'text',
      labelTitle: 'I would describe my user type as',
      options: [
        'I would describe my user as',
        'Developer',
        'Lorem',
        'Loremp',
        'Other'
      ],
      inputValue: role,
      setInputValue: setRole
    },
    {
      inputName: 'password',
      inputType: 'password',
      labelTitle: 'Password',
      requirementText: 'Minimum 8 characters',
      inputValue: password,
      setInputValue: setPassword,
      errMessage: passwordErrMessage,
      setErrMessage: setPasswordErrMessage
    }
  ]
  const handleSubmit = async e => {
    e.preventDefault()
  }

  useEffect(
    function formVerification () {
      if (name.length > 0 && email.length > 0 && role.length > 0) {
        if (email.includes('@')) {
          setEmailErrMessage('')
          if (password.length >= 8) {
            setFormChecked(true)
            setPasswordErrMessage('')
          } else {
            setFormChecked(false)
            setPasswordErrMessage('Minimum 8 characters')
          }
        } else {
          setFormChecked(false)
          setEmailErrMessage('Please enter a valid email address')
        }
      } else {
        setFormChecked(false)
      }
    },
    [name, email, role, password]
  )

  return (
    <main className={'grid'}>
      <section className={'formSection'}>
        <HeadingTitle title="Let's set up your account" />

        <FormContainer onSubmit={e => e.preventDefault()}>
          {inputFields.map(element => (
            <div key={element.inputName}>
              <InputForm {...element} />
            </div>
          ))}
          <Button
            buttonTitle='Next'
            type='submit'
            onClick={handleSubmit}
            disabled={!formChecked}
          />
        </FormContainer>

        <FootingText>
          By clicking the "Next" button, you agree to creating a free account,
          and to <a href='/'>Terms of Service</a> and{' '}
          <a href='/'>Privacy Policy.</a>
        </FootingText>
      </section>

      <section className={'secondSection'}>
        <TransparentCard
          title={'Dummy text'}
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.'
        />
      </section>
    </main>
  )
}

export default App
