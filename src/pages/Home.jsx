import './index.css'
import './card.css'
import Card from './card.jsx'

function Profile() {
  return (
    <>
    <img src="public/profile.jpg" alt="Profile" width="100"/>
    <h2>Derek Kiefer</h2>
    <p> Hello, this is my personal portfolio website sharing projects I've worked on.</p>
    </>
  )
}

function Socials() {
    return (
      <>
        <a href="https://www.linkedin.com/in/derek-kiefer-47696a320/">
          <img src="linkedin.png" alt="LinkedIn" />
        </a>
        <br />
        <a href="https://github.com/SirPine">
          <img src="github.png" alt="GitHub" />
        </a>
        <br />
        <a href="https://docs.google.com/document/d/1ICpUgHJQytToowRu_Pr_Yhyy24Uqf4-_--B5L-RoJAY/edit?usp=sharing">
          <img src="resume.png" alt="Resume" />
        </a>
      </>
    );
}

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Profile />
      <Socials />
      <Card description="Valorant Stream Overlay" link="https://google.com" />
    </>
  )
}

export default Home;