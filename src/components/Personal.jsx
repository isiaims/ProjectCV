import { useState } from "react";
import { user } from "../assets/data";
import { Input } from "./App";

function Personal () {
  return (
    <div>
      <Input type={"text"} label={"Fullname"} id={"fullName"} />
      <Input type={"email"} label={"E-mail Address"} id={"mail"} />
      <Input type={"text"} label={"Phone Number"} id={"phone"} />
    </div>
  )
}

export default function PersonalContainer () {
  const [writer, setWriter] = useState(user)

  return (
    <div className="personal">
      <h2>Personal Information</h2>
      <Personal />
    </div>
  )
}