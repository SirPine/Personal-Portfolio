import { Outlet } from "react-router";
import profilePicture from "../assets/profile.jpg"
import linkedin from "../assets/linkedin-icon.png"
import github from "../assets/github-icon.png"
import '../index.css'

function Profile() {
  return (
    <>
        <img src={profilePicture} alt="Profile" width="100"/>
        <h2>Derek Kiefer</h2>
        <p> Hello, this is my personal portfolio website sharing projects I've worked on.</p>
    </>
  )
}

function Socials() {
    return (
      <>
        <a href="https://www.linkedin.com/in/derek-kiefer-47696a320/">
          <img src={linkedin} height="50px" alt="LinkedIn" />
        </a>
        <br />
        <a href="https://github.com/SirPine">
          <img src={github} height="50px" alt="GitHub" />
        </a>
        <br />
        <a href="https://docs.google.com/document/d/1ICpUgHJQytToowRu_Pr_Yhyy24Uqf4-_--B5L-RoJAY/edit?usp=sharing">
          <img src="resume.png" alt="Resume" />
        </a>
      </>
    );
}

function Layout() {
  return (
    <div className="container">
      <div className="menu">
        <Profile />
        <Socials />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;