import { useRef, useState } from 'react'
import { saveData } from '../../helpers/saveData'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'
export const Form = () => {
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
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type='email'
          placeholder='Correo'
          required={true}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
