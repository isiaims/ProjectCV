import { useState } from "react";
import { user } from "../assets/data";
import { Input } from "./App";


 function Education ({ school, isActive, onEdit, onEdited }) {
  return (
    <div>
      {
        isActive ? 
        (
          <form onSubmit={onEdited}>
            <Input type={"text"} label={"Institution Attended"} id={"school"} placeholder={`${school.schoolName}`}/>
            <Input type={"text"} label={"Course  Studied"} id={"course"} placeholder={`${school.course}`}/>
            <Input type={"month"} label={"From"} id={"date-from" + `${school.id}`} />
            <Input type={"month"} label={"To"} id={"date-to" + `${school.id}`} />
            <button>Submit</button>
          </form>
        ) :
        (
          <>
            <h3>School attended: {school.schoolName}</h3>
            <p>Course studied: {school.course}</p>
            <p>From: {school.from}</p>
            <p>To: {school.to}</p>
            <button onClick={onEdit}>Edit</button>
          </>
        )
      }
    </div>
  )
}

export default function EducationContainer () {
  const [writer, setWriter] = useState(user)
  const schools = writer.education
  const [activeSchool, setActiveSchool] = useState(schools.length - 1)
  
  function handleAddMoreEduc () {
    const newSchools = [...schools];
    newSchools.push({
      id: newSchools.length,
      schoolName: "",
      course: "",
      from: 0,
      to: 0
    })
    setWriter({...writer, education: newSchools})
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
    setWriter({...writer, education: newSchools})
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
        <button onClick={handleAddMoreEduc}>Add More</button>
      </div>
      <hr />
    </>
  )
}