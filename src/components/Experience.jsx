import { useState } from "react";
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
            <div>
              <label htmlFor="description">Brief Description of Main Responsibilities: </label>
              <textarea name="description" id="description" defaultValue={company.description}></textarea>
            </div>
            <Input type={"month"} label={"From"} id={"begin" + `${company.id}`} placeholder={company.from}/>
            <Input type={"month"} label={"To"} id={"till" + `${company.id}`} placeholder={company.to}/>
            <button>Submit</button>
          </form>
        ) : 
        (
          <>
            <h3>{company.companyName}</h3>
            <p>{company.position}</p>
            <div className="date">
              <p>{company.description}</p>
              <p>{company.from.split("-")[0]} - {company.to.split("-")[0]}</p>
            </div>
            <button onClick={onEdit}>Edit</button>
          </>
        )
      }
    </div>
  )
}

export default function ExperienceContainer ({ user, setUser }) {
  const companies = user.experience
  const [activeCompany, setActiveCompany] = useState(companies.length - 1)
  
  function handleAddMoreExpe (e) {
    const newCompanies = [...companies];

    // Save input values from active company
    if (activeCompany !== null) {
      const formDiv = [...e.target.parentElement.childNodes]
        .filter(elem => elem.tagName === "DIV" && elem.childNodes[0].tagName === "FORM")[0].childNodes[0]
      const currCompany = newCompanies[activeCompany]
      currCompany.companyName = formDiv[0].value
      currCompany.position = formDiv[1].value
      currCompany.description = formDiv[2].value
      currCompany.from = formDiv[3].value
      currCompany.to = formDiv[4].value
    }

    // Create new fields for new company entries
    newCompanies.push({
      id: newCompanies.length,
      companyName: "",
      position: "",
      description: "",
      from: 0,
      to: 0
    })
    setUser({...user, experience: newCompanies})
    setActiveCompany(companies.length)
  }

  function handleSubmit (e, company) {
    e.preventDefault()
    e.target.parentElement.parentElement.classList.add("submited")
    const newCompany = [...companies];
    const currCompany = newCompany[company.id]
    currCompany.companyName = e.target[0].value
    currCompany.position = e.target[1].value
    currCompany.description = e.target[2].value
    currCompany.from = e.target[3].value
    currCompany.to = e.target[4].value
    setActiveCompany(null)
    setUser({...user, experience: newCompany}) 
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