import { Input } from "./App";

export default function Education ({ school }) {
  return (
    <div>
      <Input type={"text"} label={"Institution Attended"} id={"school"} placeholder={`${school.schoolName}`}/>
      <Input type={"text"} label={"Course  Studied"} id={"course"} placeholder={`${school.course}`}/>
      <Input type={"month"} label={"From"} id={"from"} value={"2022-00"}/>
      <Input type={"month"} label={"To"} id={"to"} value={"2026-12"}/>
      <button>Add More</button>
    </div>
  )
}
