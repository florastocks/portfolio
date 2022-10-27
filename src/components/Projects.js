import { Card, Col } from "react-bootstrap"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

import Spaceinvaders from '../images/spaceinvaders.gif'
import EarthBnB from '../images/EarthBnB.gif'
import HarryPotter from '../images/harrypotter.gif'
import Recipe from '../images/Recipe.gif'
import Link from '../images/link.png'
import GitHub from '../images/GitHubImg.png'

const Projects = () => {

  const projects = [
    {
      title: 'SpaceInvaders',
      description: "An underwater spin on the classic 80's arcade game Space Invaders.",
      deployLink: "https://florastocks.github.io/spaceinvaders-p1/",
      GitHubLink: 'https://github.com/florastocks/spaceinvaders-p1',
      src: Spaceinvaders,
    },
    {
      title: 'Harry Potter',
      description: "A pair-coded project, creating a Front-End React App and using an external API",
      deployLink: "https://netlify-thinks-florastocks-is-great.netlify.app",
      GitHubLink: 'https://github.com/florastocks/harrypotter',
      src: HarryPotter,
    },
    {
      title: 'Earth BnB',
      description: "A Full-Stack app, designed to be in the style of Air BnB, but with an Earthy twist to it.",
      deployLink: "https://project3-earthbnb.netlify.app/",
      GitHubLink: 'https://github.com/florastocks/project3-frontend',
      src: EarthBnB,
    },
    {
      title: 'Recipe',
      description: "A solo Full-Stack application. Users can view recipes, and CRUD reviews.",
      deployLink: "https://recipe-app-by-flora.herokuapp.com/",
      GitHubLink: 'https://github.com/florastocks/recipe_book',
      src: Recipe,
    }
  ]

  return (
    <>
    <h1 className='page-heading'>Projects page</h1>
    <div className="project-cards">
      {projects.map((project, index) => (
          <Card id={index} className="proj-card">
            <Col>
              <div className="card-title">{project.title}</div>
              <div className="card-body">{project.description}</div>
              <div className="button-container">
              <OverlayTrigger
                placement='bottom'
                overlay={
                  <Tooltip id={'tooltip-bottom'}>
                    Deployed Project
                  </Tooltip>
                }
                >
                <button className="btn-project"><a href={project.deployLink} label="deployment link"><img className='link-img' src={Link} alt='project Link'/></a></button>
              </OverlayTrigger>
              <OverlayTrigger
                placement='bottom'
                overlay={
                  <Tooltip id={'tooltip-bottom'}>
                    Code & ReadMe
                  </Tooltip>
                }
                >
                <button className="btn-project"><a href={project.GitHubLink}><img className='link-img' src={GitHub} alt='project code'/></a></button>
              </OverlayTrigger>
              </div>
            </Col>
            <Col >
            <video autoPlay muted playsInline loop className='card-vid'><source src={project.src} type='video/mp4'></source></video>
            </Col>
          </Card>
      ))}
    </div>
    </>

  )
}

export default Projects