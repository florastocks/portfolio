import JavaScript from '../skills/JS.png'
import Python from '../skills/python.png'
import CSS from '../skills/CSS.png'
import HTML from '../skills/html-5.png'
import React_js from '../skills/react.png'
import Express from '../skills/express.png'
import PostgreSQL from '../skills/PostgreSQL.svg'
import Node_js from '../skills/node.png'
import Bootstrap from '../skills/bootstrap.png'
import Django from '../skills/django.jpg'
import MongoDb from '../skills/mongoDB.png'
import Mongoose from '../skills/mongoose.png'
import SASS from '../skills/Sass.png'
import GitHub from '../skills/github.png'
import Heroku from '../skills/heroku.svg'
import Insomnia from '../skills/insomnia.png'
import JWT from '../skills/jwt.png'
import Netlify from '../skills/netlify.png'
import TablePlus from '../skills/tableplus.png'
import Excalidraw from '../skills/excalidraw.png'
import Trello from '../skills/Trello.jpg'
import Slack from '../skills/slack.png'
import npm from '../skills/npm.png'
import VScode from '../skills/VSCode.png'
import yarn from '../skills/yarn.png'


const Skills = () => {

  const skills = [
    {
      src: JavaScript,
      label: 'JavaScript'
    },
    {
      src: Python,
      label: 'Python'
    },
    {
      src: CSS,
      label: 'CSS'
    },
    {
      src: HTML,
      label: 'HTML'
    },
    {
      src: React_js,
      label: 'React.js'
    },
    {
      src: Express,
      label: 'Express'
    },
    {
      src: PostgreSQL,
      label: 'PostgresSQL'
    },
    {
      src: Node_js,
      label: 'Node.js'
    },
    {
      src: Bootstrap,
      label: 'React Bootstrap'
    },
    {
      src: Django,
      label: 'Django'
    },
    {
      src: MongoDb,
      label: 'MongoDB'
    },
    {
      src: Mongoose,
      label: 'Mongoose'
    },
    {
      src: SASS,
      label: 'Sass'
    },
    {
      src: GitHub,
      label: 'GitHub'
    },
    {
      src: Heroku,
      label: 'Heroku'
    },
    {
      src: Insomnia,
      label: 'Insomnia'
    },
    {
      src: JWT,
      label: 'JSON Web Token'
    },
    {
      src: Netlify,
      label: 'Netlify'
    },
    {
      src: TablePlus,
      label: 'TablePlus'
    },
    {
      src: Excalidraw,
      label: 'Excalidraw'
    },
    {
      src: Trello,
      label: 'Trello'
    },
    {
      src: Slack,
      label: 'Slack'
    },
    {
      src: npm,
      label: 'npm'
    },
    {
      src: VScode,
      label: 'VScode'
    },
    {
      src: yarn,
      label: 'yarn'
    },
  ]
  return (
    <>
      <h1 id='skills-heading' className="page-heading">Skills</h1>
      <div className='skills-wrapper'>
        {skills.map(skill => (
          <div className="skill-card">
          <div className="card-body"><img className='skill-img' src={skill.src} alt={skill.label}/></div>
        </div>
        ))}
      </div>
    </>
  )
}
export default Skills