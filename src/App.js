import logo from './logo.svg';
import './App.css';
import './Style/Style.css'
import { Header } from './Components/Header/Header';
import { HomePage } from './Components/Main/HomePage/HomePage';
import { SkillsPage } from './Components/Main/SkillsPage/SkillsPage';
import { WorkPage } from './Components/Main/WorkPage/WorkPage';
import { useEffect, useRef, useState } from 'react';
import { ContactMe } from './Components/Main/ContactMe/ContactMe';

function App() {
  const skillsPageRef = useRef();
  const homePageRef = useRef();
  const workPageRef = useRef();
  const contactPageRef = useRef()

  const [scrollY, setScrollY] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)



  const pageList = [ homePageRef, skillsPageRef, workPageRef, contactPageRef]

  const scrollToHome = () => {
    pageList[0].current.scrollIntoView({ behavior:"smooth" })
  }
  const scrollToSkills = () => {
    pageList[1].current.scrollIntoView({ behavior:"smooth" })
  }
  const scrollToWork = () => {
    pageList[2].current.scrollIntoView({ behavior:"smooth" })
  }
  const scrollToContact = () => {
    pageList[3].current.scrollIntoView({ behavior:"smooth" })
  }

  const scrollToPage = [scrollToHome, scrollToSkills, scrollToWork, scrollToContact]

  


  return (
    <>
      <Header refe={pageList} scrollTo={scrollToPage}/>
      <HomePage refe={pageList}/>
      <SkillsPage refe={pageList} scrollTo={scrollToSkills}/>
      <WorkPage refe={pageList}/>
      <ContactMe refe={pageList}/>
    </>
  );
}

export default App;
