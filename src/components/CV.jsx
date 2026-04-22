import { useState } from "react"
import { user } from "../assets/data"
import pfp from "../assets/pfp.jpg"

function Personal (detail) {
  const person = detail.detail
  return (
    <div>
      <img src={pfp} alt="User Picture" />
      <div>
        <h2>{person.name.toUpperCase()}</h2>
        <p>{person.phone}</p>
        <p>{person.mail}</p>
        <p>{person.website}</p>
      </div>
    </div>
  )
}

function Education (school) {
  school = school.school
  return (
    <div className={"school" + school.id}>
      <h3>{school.schoolName.toUpperCase()}</h3>
      <p>{school.course}</p>
      <p>{school.from + " - " + school.to}</p>
    </div>
  )
}

function Experience (company) {
  company = company.company
  return (
    <div className={"school" + company.id}>
      <h3>{company.companyName.toUpperCase()}</h3>
      <p>{company.position}</p>
      <p>{company.from + " - " + company.to}</p>
      <p>{company.description}</p>
    </div>
  )
}


export default function Main () {
  const [writer, setWriter] = useState(user)
  const details = writer.details
  const schools = writer.education
  const companies = writer.experience

  return (
    <>
      <Personal detail={details}/>
      <div className="summary">
        <h2>Professional Summary:</h2>
        <p>{details.summary}</p>
      </div>
      <div className="schools">
        <h2>Education:</h2>
        {
          schools.map(school => (
            <Education 
              key={school.id}
              school={school}
            />
          ))
        }
      </div>
      <div className="companies">
        <h2>Experience:</h2>
        {
          companies.map(company => (
            <Experience 
              key={company.id}
              company={company}
            />
          ))
        }
      </div>
    </>
  )
}
