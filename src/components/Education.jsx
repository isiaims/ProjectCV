import { useState } from "react";
import { Input } from "./App";


 function Education ({ school, isActive, onEdit, onEdited }) {
  return (
    <div>
      {
        isActive ? 
        (
          <form onSubmit={onEdited}>
            <Input type={"text"} label={"Institution Attended"} id={"college"} placeholder={`${school.schoolName}`}/>
            <Input type={"text"} label={"Course  Studied"} id={"course"} placeholder={`${school.course}`}/>
            <Input type={"month"} label={"From"} id={"date-from" + `${school.id}`} placeholder={school.from}/>
            <Input type={"month"} label={"To"} id={"date-to" + `${school.id}`} placeholder={school.to}/>
            <button>Submit</button>
          </form>
        ) :
        (
          <>
            <h3>{school.schoolName}</h3>
            <div className="date">
              <p>{school.course}</p>
              <p>{school.from.split("-")[0]} - {school.to.split("-")[0]}</p>
            </div>
            <button onClick={onEdit}>Edit</button>
          </>
        )
      }
    </div>
  )
}

export default function EducationContainer ({ user, setUser }) {
  const schools = user.education
  const [activeSchool, setActiveSchool] = useState(schools.length - 1)
  
  function handleAddMoreEduc (e) {
    const newSchools = [...schools];

    // Save input values from active school
    if (activeSchool !== null) {
      const formDiv = [...e.target.parentElement.childNodes]
        .filter(elem => elem.tagName === "DIV" && elem.childNodes[0].tagName === "FORM")[0].childNodes[0]
      const currSchool = newSchools[activeSchool]
      currSchool.schoolName = formDiv[0].value
      currSchool.course = formDiv[1].value
      currSchool.from = formDiv[2].value
      currSchool.to = formDiv[3].value
    }

    // Create new fields for new school entries
    newSchools.push({
      id: newSchools.length,
      schoolName: "",
      course: "",
      from: 0,
      to: 0
    })
    setUser({...user, education: newSchools})
    setActiveSchool(schools.length)
  }

  function handleSubmit (e, school) {
    e.preventDefault()
    const newSchools = [...schools];
    const currSchool = newSchools[school.id]
    currSchool.schoolName = e.target[0].value
    currSchool.course = e.target[1].value
    currSchool.from = e.target[2].value
    currSchool.to = e.target[3].value
    setActiveSchool(null)
    setUser({...user, education: newSchools})
  }
  
  return (
    <>
      <div className="school">
        <h2>Education</h2>
        {
          schools.map(school => (
              <Education
                key={school.id}
                school={school}
                isActive={activeSchool === school.id}
                onEdit={() => setActiveSchool(school.id)}
                onEdited={(e) => handleSubmit(e, school)}
              />
          ))
        }
        <button onClick={(e) => handleAddMoreEduc(e)}>Add More</button>
      </div>
      <hr />
    </>
  )
}