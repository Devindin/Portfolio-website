import React from 'react'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Main from '../../Components/Main/Main'
import Profile from '../../Components/profile/profile'
import Portfolio from '../../Components/Portfolio/Portfolio'
import Header from '../../Components/Header/Header'
import Resume from '../../Components/Resume/Resume'

export const Home =() => {
  return (
    <>
      <div className="App_Layout">
        <Profile />
        <div className="Main_Wrapper">
          <Main />
          <Header />
          <Portfolio/>
          <About/>
          <Resume/>
          <Contact/>
        </div>
       
      </div>
    </>
  )
}
