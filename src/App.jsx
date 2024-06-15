import './App.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
// import Head from "next/head";`
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";



function App() {
    const skillData = [
      { id: 1, imageUrl: "/reactIcon.svg", proficiency: 75 },
      { id: 2, imageUrl:"/javaIcon.svg", proficiency: 90 },
      { id: 3, imageUrl:"/javascriptIcon.svg", proficiency: 80 },
      { id: 4, imageUrl:"/pythonIcon.svg", proficiency: 70 },
      { id: 5, imageUrl:"/nodeIcon.svg", proficiency: 75 },
      { id: 6, imageUrl:"/gitIcon.svg", proficiency: 80 },
      { id: 7, imageUrl:"/dockerIcon.svg", proficiency: 50 },
      { id: 8, imageUrl:"/cssIcon.svg", proficiency: 90 },
      { id: 9, imageUrl:"/htmlIcon.svg", proficiency: 90 },
      { id: 10, imageUrl:"/rIcon.svg", proficiency: 50 },
      { id: 11, imageUrl:"/typescriptIcon.svg", proficiency: 60 },
      { id: 12, imageUrl:"/expressIcon.svg", proficiency: 80 },
      { id: 13, imageUrl:"/postgressqlIcon.svg", proficiency: 80 },
      { id: 14, imageUrl:"/mongodbIcon.svg", proficiency: 60 },
      { id: 15, imageUrl:"/rubyIcon.svg", proficiency: 40 },
      { id: 16, imageUrl:"/sqlalchemyIcon.svg", proficiency: 70 },
      { id: 17, imageUrl:"/tailwindIcon.svg", proficiency: 80 },
      { id: 18, imageUrl:"/fastapiIcon.svg", proficiency: 80 },

    ];


  return (
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80">
        <Header />
        <div id="hero" className="snap-start">
         <Hero />
        </div>
        <div id="about" className="snap-center">
          <About />
        </div>
        <div id="experience" className="snap-center">
          <WorkExperience />
        </div>

        /* <div id="projects" className="snap-start">
          <Projects />
        </div> */

        <div id="skills" className="snap-start">
          <Skills skills={skillData}/>
        </div>

        <div id="contact" className="snap-start">
          <ContactMe />
        </div>
  
  
     </div>
  )
}
export default App

 