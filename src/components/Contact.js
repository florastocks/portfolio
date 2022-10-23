import LinkedIn from '../images/LinkedIn-circle.jpg'
import EmailImg from '../images/email_icon.png'
import GitHubImg from '../images/GitHubImg.png'



const Contact = () => {

  // function Mailto(email) {
  //   return (
  //     <a href={`mailto:${email}`}></a>
  //   );
  // }
  
  // ReactDOM.render(
  //   <Mailto email="stocksflora@gmail.com"></Mailto>,
  //   document.getElementById("root")
  // );
  return (
      <>
        <section className='page-wrapper'>
          <h1 className='page-heading'>Get in Touch</h1> 
          <div className='cards-wrapper'>
            <div id='LinkedIn-card'className="card">
              <div className="card-body">
                <h3 className="card-title">LinkedIn</h3>
                <p classname='card-para'>React me on LinkedIn. Here you will find a list of previous experience, and my skills.</p>
                <button className="btn-contact"><a href='https://www.linkedin.com/in/flora-stocks/'><img className='round-img' src={LinkedIn} alt='LinkedIn Logo'/></a></button>
              </div>
            </div>
            <div id='email-card' className="card">
              <div className="card-body">
                <h3 className="card-title">Email Me</h3>
                <p classname='card-para'>Feel free to Email me anytime by pressing the button below!</p>
                <button className="btn-contact"><a href="mailto:stocksflora@gmail.com"><img className='round-img' src={EmailImg} alt='Email Logo'/></a></button>
              </div>
            </div>
            <div id='GitHub-card'className="card">
              <div className="card-body">
                <h3 className="card-title">GitHub</h3>
                <p classname='card-para'>Ulternatively, if you just wish to view my work then please visit my GitHub below.</p>
                <button className="btn-contact"><a href='https://github.com/florastocks'><img className='round-img' src={GitHubImg} alt='GitHub Logo'/></a></button>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}
export default Contact