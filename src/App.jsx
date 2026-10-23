
import { useState } from 'react'

 function App() {
  const [form, setForm] = useState({
    name: '', email: '', course: ''
  })
  const [student, setStudent] = useState(null)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStudent({ ...form })
  }

  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <form onSubmit={handleSubmit}
        className="mx-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow-lg">

        <h1 className="text-center text-2xl font-bold text-blue-600">
          Student Registration
        </h1>

        <input name="name" placeholder="Student Name"
          value={form.name} onChange={handleChange} required
          className="w-full rounded border p-2" />

        <input name="email" type="email" placeholder="Email"
          value={form.email} onChange={handleChange} required
          className="w-full rounded border p-2" />

        <select name="course" value={form.course}
          onChange={handleChange} required
          className="w-full rounded border bg-white p-2">
          <option value="">Select Course</option>
          <option>BCA</option>
          <option>BBA</option>
          <option>B.Tech</option>
        </select>

        <button className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700">
          Register
        </button>

        {student && (
          <div className="rounded bg-green-100 p-3">
            <h2 className="font-bold text-green-700">
              Registration Successful!
            </h2>
            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
            <p>Course: {student.course}</p>
          </div>
        )}
      </form>
    </div>
  )
}
export default App