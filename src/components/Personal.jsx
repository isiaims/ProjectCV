import { use, useState } from "react";
import { user } from "../assets/data";
import { Input } from "./App";

function Personal ({ user, isEditing, onEdited, onEdit }) {
  return (
    <div className="details">
      {
        isEditing ?
          (
            <form onSubmit={onEdited}>
              <Input type={"text"} label={"Fullname"} id={"fullName"} placeholder={user.name}/>
              <Input type={"email"} label={"E-mail Address"} id={"mail"} placeholder={user.mail}/>
              <Input type={"text"} label={"Phone Number"} id={"phone"} placeholder={user.phone}/>
              <Input type={"text"} label={"Website"} id={"website"} placeholder={user.website}/>
              <label htmlFor="summary">Professional Summary: </label>
              <textarea name="summary" id="summary" defaultValue={user.summary}></textarea>
              <button>Submit</button>
            </form>
          ) :
          (
            <>
              <div className="user-name">
                <h2>{user.name.toUpperCase()}</h2>
              </div>
              <div>
                <p>{user.mail}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
              </div>
              <button onClick={onEdit}>Edit</button>
              <hr />
              <div className="summary">
                <h2>Summary</h2>
                <p>{user.summary}</p>
              </div>
            </>
          )
      }
    </div>
  )
}

export default function PersonalContainer () {
  const [writer, setWriter] = useState(user)
  const [editing, setEditing] = useState(true)
  const info = writer.details

  function handleSubmit (e) {
    e.preventDefault()
    e.target.parentElement.parentElement.classList.add("submited")
    const user = {...info}
    user.name = e.target[0].value
    user.mail = e.target[1].value
    user.phone = e.target[2].value
    user.website = e.target[3].value
    user.summary = e.target[4].value
    setWriter({...writer, details: user})
    setEditing(false)
  }

  function handleEdit (e) {
    setEditing(true)
    e.target.parentElement.parentElement.classList.remove("submited")
  }

  return (
    <>
      <div className="personal">
        <h2>Personal Information</h2>
        <Personal
          user={info}
          isEditing = {editing}
          onEdit={handleEdit}
          onEdited={handleSubmit}
        />
      </div>
      <hr />
    </>
  )
}