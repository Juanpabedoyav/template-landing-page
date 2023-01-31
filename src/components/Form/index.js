import { useRef, useState } from 'react'
import { saveData } from '../../helpers/saveData'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { FormSC } from './style'
export const Form = () => {
  const [mail, setMail] = useState({})
  const debounceRef = useRef()

  const handleChange = (e) => {
    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      setMail({ name: e.target.value, email: e.target.value })
    }, 900)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await saveData(mail)
  }

  return (
    <>
      <FormSC>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={handleChange}
              type='text'
              placeholder='Nombre'
              required={true}
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              type='email'
              placeholder='Correo'
              required={true}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </FormSC>
    </>
  )
}
