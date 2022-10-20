import { Link } from "react-router-dom"

const About = () => {
  return (
    <>
      <h1>A Little About Me</h1>
      <p>I am currently in my final year at the University of Exeter, looking to begin my career as a Junior Software Engineer. </p>
      <p>If you would like to know more about me, please do contact me <Link to='/contact'>here.</Link> </p>
    </>
  )
}
export default About