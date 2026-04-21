import { useState } from 'react'
import '../styles/App.css'
import icon from '../assets/paper.png'
import PersonalContainer from './Personal'
import ExperienceContainer from './Experience'
import EducationContainer from './Education'
import { user } from '../assets/data'

function Header () {
  return (
    <header>
      <img src={icon} alt="Paper icon" />
      <h1>CV Maker</h1>
    </header>
  )
}

export function Input ({ type, label, id, placeholder, defaultValue }) {
  return (
    <>
      <label htmlFor={id}>{label + ": "}</label>
      <input type={type} id={id} name={id} placeholder={placeholder} defaultValue={defaultValue}/>
    </>
  )
}

function App() {

  return (
    <>
      <Header />
      <section>
        <PersonalContainer />
        <EducationContainer />
        <ExperienceContainer />
      </section>
      <main></main>
    </>
  )
}

export default App
