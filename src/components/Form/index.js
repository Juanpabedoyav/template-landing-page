import { useRef, useState } from 'react'

export const Form = () => {
  const [mail, setMail] = useState('')
  const debounceRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('lo enviastes')
  }
  const handleChange = (e) => {
    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      setMail(e.target.value)
    }, 900)
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
