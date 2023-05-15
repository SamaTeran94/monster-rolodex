/* eslint-disable react/prop-types */
import { useState } from "react"

const AddMonsters = ({onAdd}) => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')

const onSubmit = (e) => {
    e.preventDefault()      //Prevent the form from submitting

    /*if(!text) {
        alert('Please add a task')
        return
    }*/

    onAdd({name, email})

    setName('')
    setEmail('')
}

  return (
    <form className="mb-10" onSubmit={onSubmit}>
    <div className="my-5">
        <label className="block">Complete Name</label>
        <input className="border border-black w-full h-10 m-2 py-2 px-4" type="text" placeholder="Add Complete Name" value={name}
        onChange={(e) => setName(e.target.value)} required pattern="[A-Za-z]+" title="Enter letters only"></input>
    </div>
    <div className="my-5">
        <label className="block">Email</label>
        <input className="border border-black w-full h-10 m-2 py-2 px-4" type="text" placeholder="Add Email" value={email}
        onChange={(e) => setEmail(e.target.value)} required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        title="Enter a valid email address"></input>
    </div>
    <input type="submit" value="Add Monster" className="bg-black block w-full text-white rounded p-1 cursor-pointer"></input>
</form>
  )
}

export default AddMonsters
