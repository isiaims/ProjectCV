import { Input } from "./App";

export default function Experience ({ company }) {
  return (
    <div>
      <Input type={"text"} label={"Company"} id={"company"} />
      <Input type={"text"} label={"Position/Job Title"} id={"post"} />
      <textarea name="description" id="description">Brief Description of Main Responsibilities</textarea>
      <Input type={"month"} label={"From"} id={"from"} />
      <Input type={"month"} label={"To"} id={"to"} />
      <button>Add More</button>
    </div>
  )
}
