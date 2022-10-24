import LinkedIn from '../images/LinkedIn-circle.jpg'
import EmailImg from '../images/email_icon.png'
import GitHubImg from '../images/GitHubImg.png'



const Contact = () => {

  const contacts = [
    {
      id: 'LinkedIn-card',
      title: 'LinkedIn',
      para: 'React me on LinkedIn. Here you will find a list of previous experience, and my skills',
      link: 'https://www.linkedin.com/in/flora-stocks/',
      src: LinkedIn,
      alt: 'LinkedIn Logo'
    },
    {
      id: 'email-card',
      title: 'Email Me',
      para: 'Feel free to Email me anytime by pressing the button below!',
      link: 'mailto:stocksflora@gmail.com',
      src: EmailImg,
      alt: 'Email Logo'
    },
    {
      id: 'GitHub-card',
      title: 'GitHub',
      para: 'Ulternatively, if you just wish to view my work then please visit my GitHub below.',
      link: 'https://github.com/florastocks',
      src: GitHubImg,
      alt: 'GitHub Logo'
    },
  ]

  return (
      <>
        <section className='page-wrapper'>
          <h1 className='page-heading'>Get in Touch</h1> 
          <div className='cards-wrapper'>
            {contacts.map(contact => (
              <div id={contact.id} className="card">
                <div className="card-body">
                  <h3 className="card-title">{contact.title}</h3>
                  <p classname='card-para'>{contact.para}</p>
                  <button className="btn-contact"><a href={contact.link}><img className='round-img' src={contact.src} alt={contact.alt}/></a></button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
  )
}
export default Contact