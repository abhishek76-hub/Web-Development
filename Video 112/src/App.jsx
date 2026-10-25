
import { useState } from 'react'
import './App.css'

function App() {
  // const [form, setForm] = useState({ email: '', phone: ''})
  const [form, setForm] = useState({})

  const handleClick = () => {
    alert('Hey I am clicked')
  }

  const handleMouseOver = () => {
    alert('Hey I am a mouse over')
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        Hey I am a red div
      </div> */}

      {/* <input  type="text"  name="email" value={form.email} onChange={handleChange} placeholder="Enter email" />
      <input  type="text"  name="phone"  value={form.phone}  onChange={handleChange} placeholder="Enter phone" /> */}
    <input  type="text"  name="email" value={form.email || ''} onChange={handleChange} placeholder="Enter email" />
      <input  type="text"  name="phone"  value={form.phone || ''}  onChange={handleChange} placeholder="Enter phone" />
    </>
  )
}

export default App
