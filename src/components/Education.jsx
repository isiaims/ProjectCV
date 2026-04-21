import { useState } from "react";
import { user } from "../assets/data";
import { Input } from "./App";


 function Education ({ school, isActive, onEdit, onEdited }) {
  return (
    <div>
      {
        isActive ? 
        (
          <>
            <Input type={"text"} label={"Institution Attended"} id={"school"} placeholder={`${school.schoolName}`}/>
            <Input type={"text"} label={"Course  Studied"} id={"course"} placeholder={`${school.course}`}/>
            <Input type={"month"} label={"From"} id={"date-from" + `${school.id}`} defaultValue={"2022-01"}/>
            <Input type={"month"} label={"To"} id={"date-to" + `${school.id}`} defaultValue={"2026-12"}/>
            <button onClick={onEdited}>Submit</button>
          </>
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
  const [activeSchool, setActiveSchool] = useState(user.education.length - 1)
  const [writer, setWriter] = useState(user)
  const schools = writer.education
  
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
  }


  function handleEdit (school) {
    setActiveSchool(school.id)
    setWriter({...writer, education: schools})
  }

  function handleSubmit (school) {
    const newSchools = [...schools];
    const currSchool = newSchools[school.id]
    currSchool.schoolName = ""
    currSchool.course = ""
    currSchool.from = 0
    currSchool.to = 0
    school.id !== schools.length - 1 && setActiveSchool(schools.length - 1)
    setWriter({...writer, education: newSchools})
  }
  
  return (
    <div className="school">
      <h2>Education</h2>
      {
        schools.map(school => (
            <Education 
              key={school.id}
              school={school}
              isActive={activeSchool === school.id}
              onEdit={() => handleEdit(school)}
              onEdited={() => handleSubmit(school)}
            />
        ))
      }
      <button onClick={handleAddMoreEduc}>Add More</button>
    </div>
  )
}