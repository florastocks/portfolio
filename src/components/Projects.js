import { Col } from "react-bootstrap"

import Spaceinvaders from '../images/spaceinvaders.gif'
import EarthBnB from '../images/EarthBnB.gif'
import HarryPotter from '../images/harrypotter.gif'
import Recipe from '../images/Recipe.gif'

const Projects = () => {

  const projects = [
    {
      title: 'SpaceInvaders app',
      description: "An underwater spin on the classic 80's arcade game Space Invaders.",
      deployLink: "https://florastocks.github.io/spaceinvaders-p1/",
      GitHubLinke: 'https://github.com/florastocks/spaceinvaders-p1',
      src: Spaceinvaders,
    },
    {
      title: 'Harry Potter Characters App',
      description: "A pair-coded project, creating a Front-End React App and using an external API",
      deployLink: "https://netlify-thinks-florastocks-is-great.netlify.app/allcharacters",
      GitHubLinke: 'https://github.com/florastocks/harrypotter',
      src: HarryPotter,
    },
    {
      title: 'Earth BnB App',
      description: "A Full-Stack app, with CRUD functionality on the properties and the user reviews. We created an app where users can search through different kinds of BnB’s, add their own, and review others properties.",
      deployLink: "https://project3-earthbnb.netlify.app/",
      GitHubLinke: 'https://github.com/florastocks/project3-frontend',
      src: EarthBnB,
    },
    {
      title: 'Recipe App',
      description: "A solo Full-Stack application. Users can view different recipes, write, update, and delete reviews.",
      deployLink: "https://recipe-app-by-flora.herokuapp.com/",
      GitHubLinke: 'https://github.com/florastocks/recipe_book',
      src: Recipe,
    }
  ]

  return (
    <>
    <h1 className='page-heading'>Projects page</h1>
    <div className="project-cards">
      {projects.map((project, index) => (
        <div id={index} className="proj-card card">
          <Col>
            <div className="card-title">{project.title}</div>
            <div className="card-body">{project.description}</div>
          </Col>
          <Col >
            <video className='card-vid' width='200' height='100' autoplay><source src={project.src} autoplay type='video/mp4'></source></video>
          </Col>
        </div>
      ))}
    </div>
    </>

  )
}

export default Projects