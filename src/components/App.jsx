import { useState } from 'react'
import '../styles/App.css'
import icon from '../assets/paper.png'
import Personal from './Personal'
import Experience from './Experience'
import Education from './Education'

const user = {
  details: {
    name: "",
    mail: "",
    phone: ""
  },
  education: [
    {
      id: 0,
      schoolName: "TOP College, WorldWideWeb, Internet.",
      course: "Fulstack Web Development",
      from: 2022,
      to: 2026
    }
  ],
  experience: [
    {
      id: 0,
      companyName: "Self Employed Inc.",
      position: "Junior Front-End Developer",
      description: "Did this and that.",
      from: 2025,
      to: 2026
    }
  ]
}

function Header () {
  return (
    <header>
      <img src={icon} alt="Paper icon" />
      <h1>CV Maker</h1>
    </header>
  )
}

export function Input ({ type, label, id }) {
  return (
    <>
      <label htmlFor={id}>{label + ": "}</label>
      <input type={type} id={id} name={id} />
    </>
  )
}

function App() {
  // const [count, setCount] = useState(0)
  const [writer, setWriter] = useState(user)
  const schools = writer.education
  const companies = writer.experience

  return (
    <>
      <Header />
      <section>
        <div className="personal">
          <h2>Personal Information</h2>
          <Personal />
        </div>
        <div className="school">
          <h2>Education</h2>
          {
            schools.map(school => (
              <Education 
                key={school.id}
                school={school}
              />
            ))
          }
        </div>
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
        </div>
      </section>
      <main></main>
    </>
  )
}

export default App
