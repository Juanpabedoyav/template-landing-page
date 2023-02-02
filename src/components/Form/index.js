import { useRef, useState } from 'react'
import { saveData } from '../../helpers/saveData'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { FormSC } from './style'
export const Form = ({ text, action }) => {
  const [mail, setMail] = useState({})
  const debounceRef = useRef()

  const handleChange = (e) => {
    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      setMail({ email: e.target.value })
    }, 900)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await saveData(mail)
    alert('Registro exitoso')
  }

  return (
    <>
      <p style={{ color: 'white', marginBottom: '1rem' }}>
        {text} <span className={'title'}>GRATIS</span>
      </p>
      <FormSC>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name='email'
              onChange={handleChange}
              type='email'
              placeholder='Escribe tu correo Aquí'
              required={true}
            />
          </div>
          <button type='submit'>DA CLICK PARA {action} </button>
        </form>
      </FormSC>
    </>
  )
}
