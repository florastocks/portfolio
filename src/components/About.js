import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

// ---- images -----
import silver from '../images/silver.png'
import olive from '../images/olive.png'
import metalcraft from '../images/metalface.png'
import Gav from '../images/gav-drawing.png'
import Bella from '../images/bella-drawing.png'

const About = () => {

  const interests1 = [
    {
      src: silver,
      id: 'silver'
    },
    {
      src: olive,
      id: 'olive'
    },
    {
      src: metalcraft,
      id: 'metalcraft'
    }]
  const interests2 = [
    {
      src: Gav,
      id: 'gav',
    },
    {
      src: Bella,
      id: 'bella'
    }
  ]

  return (
    <>
      <h1 className="page-heading">A Little About Me</h1>
      <div className="about-container">
        <Col className="about-para">
        <p>I am a recently trained software engineer who came to coding from an unusual direction – through arts, crafts, and problem solving.
I have always been creative. I took an Art A level and still draw in my spare time. I have always enjoyed practical problem solving. I am the one at home who fixes things that break – lawnmowers, hoovers, washing machines. And I cannot resist learning and developing new skills. Before coding these included crochet; sewing, dress making – and sports. 

When I found coding, in an 8 week Python course, these three elements of my character came together and I found a profoundly satisfying activity that I wish to become a career. 

In my 14-week University Summer Holiday (2022), I used 12 of those weeks to enrol in a General Assembly immersive software engineering course. I loved it – it felt more like pursuing a hobby than going to school. We covered everything from basic JavaScript to Full-Stack applications. My love for knowing how all the parts of a thing fit together meant that my final project – a Full Stack website built from scratch gave me an enormous amount pleasure and satisfaction.
I do not want to stop now. I wish to continue to learn and develop my skills and am looking for a career in software engineering. It speaks to the key strands in my character, and I know I will love it.
</p>
        <p>If you wish to know more about me, please contact me <Link to='/contact' className='link'>here.</Link> </p>
        </Col>
        <Col className="interest-container">
          <Row className="top-row">
            {interests1.map((interest,idx) => (
              <div className='interest-div'id={idx}>
                <img src={interest.src} alt="hobbie" id={interest.id} className="interest-img"/>
              </div>
            ))}
          </Row>
          <Row className="bottom-row">
            {interests2.map((interest,idx) => (
                <div className='interest-div' id={idx}>
                  <img src={interest.src} alt="hobbie" id={interest.id} className="interest-img"/>
                </div>
              ))}
          </Row>
        </Col>
      </div>
    </>
  )
}
export default About