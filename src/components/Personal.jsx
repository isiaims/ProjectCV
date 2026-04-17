import { Input } from "./App";

export default function Personal () {
  return (
    <div>
      <Input type={"text"} label={"Fullname"} id={"fullName"} />
      <Input type={"email"} label={"E-mail Address"} id={"mail"} />
      <Input type={"text"} label={"Phone Number"} id={"phone"} />
    </div>
  )
}
