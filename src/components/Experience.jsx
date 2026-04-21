import { useState } from "react";
import { user } from "../assets/data";
import { Input } from "./App";

function Experience ({ company }) {
  return (
    <div key={company.id}>
      <Input type={"text"} label={"Company"} id={"company"} placeholder={company.companyName}/>
      <Input type={"text"} label={"Position/Job Title"} id={"post"} placeholder={company.position}/>
      <label htmlFor="description">Brief Description of Main Responsibilities: </label>
      <textarea name="description" id="description" placeholder={company.description}></textarea>
      <Input type={"month"} label={"From"} id={"begin" + `${company.id}`} defaultValue={"2022-01"}/>
      <Input type={"month"} label={"To"} id={"till" + `${company.id}`} defaultValue={"2022-12"}/>
    </div>
  )
}

export default function ExperienceContainer () {
  const [writer, setWriter] = useState(user)
  const companies = writer.experience

  function handleAddMoreExpe () {
    const newCompanies = [...companies];
    newCompanies.push({
      id: newCompanies.length,
      companyName: "",
      position: "",
      description: "",
      from: 0,
      to: 0
    })
    setWriter({...writer, experience: newCompanies})
  }
  return (
    <div className="experience">
      <h2>Experience</h2>
      {
        companies.map(company => (
          <Experience
          key={company.id}
          company={company}
          />
        ))
      }
      <button onClick={handleAddMoreExpe}>Add More</button>
      </div>
  )
}