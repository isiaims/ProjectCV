import { useState } from "react";
import { user } from "../assets/data";
import { Input } from "./App";

function Experience ({ company, isActive, onEdit, onEdited }) {
  return (
    <div key={company.id} className="company">
      {
        isActive ?
        (
          <form onSubmit={onEdited}>
            <Input type={"text"} label={"Company"} id={"company"} placeholder={company.companyName}/>
            <Input type={"text"} label={"Position/Job Title"} id={"post"} placeholder={company.position}/>
            <label htmlFor="description">Brief Description of Main Responsibilities: </label>
            <textarea name="description" id="description" placeholder={company.description}></textarea>
            <Input type={"month"} label={"From"} id={"begin" + `${company.id}`} />
            <Input type={"month"} label={"To"} id={"till" + `${company.id}`} />
            <button>Submit</button>
          </form>
        ) : 
        (
          <>
            <h3>Organization: {company.companyName}</h3>
            <p>Position: {company.position}</p>
            <p>Main Responsibilities: {company.description}</p>
            <p>From: {company.from}</p>
            <p>To: {company.to}</p>
            <button onClick={onEdit}>Edit</button>
          </>
        )
      }
    </div>
  )
}

export default function ExperienceContainer () {
  const [writer, setWriter] = useState(user)
  const companies = writer.experience
  const [activeCompany, setActiveCompany] = useState(companies.length - 1)
  
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
    setActiveCompany(companies.length)
  }

  function handleSubmit (e, company) {
    e.preventDefault()
    const newCompany = [...companies];
    const currCompany = newCompany[company.id]
    currCompany.companyName = e.target[0].value
    currCompany.position = e.target[1].value
    currCompany.description = e.target[2].value
    currCompany.from = e.target[3].value
    currCompany.to = e.target[4].value
    setActiveCompany(null)
    setWriter({...writer, experience: newCompany}) 
  }

  return (
    <>
      <div className="experience">
        <h2>Experience</h2>
        {
          companies.map(company => (
            <Experience
              key={company.id}
              company={company}
              isActive={activeCompany === company.id}
              onEdit={() => setActiveCompany(company.id)}
              onEdited={(e) => handleSubmit(e, company)}
            />
          ))
        }
        <button onClick={handleAddMoreExpe}>Add More</button>
      </div>
      <hr />
    </>
  )
}