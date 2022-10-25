import Me from '../images/Me.png'
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom' 


const Home = () => {

  const navigate = useNavigate()

  const handleClick = (event) => {
    navigate('/about')
  }

  return (
    <div className="homepage-welcome">
      <Col className='md-6'>
        <h4>Hello, my name is</h4>
        <h1 onClick={handleClick}>Flora Stocks</h1>
        <h4>Junior Software Engineer / Web Developer</h4>
      </Col>
      <Col classNamw='homePhoto'>
        <img  className='me-home' src={Me} alt='Flora'/>
      </Col>
    </div>
  )
}

export default Home