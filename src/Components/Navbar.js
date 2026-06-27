
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Navbar(){
    return (
        <div>
            <nav className="navbar">
                <div className="title"><h1 >Portifolio</h1></div>
                
                <div className="links">
                    <ul className="textLinks">
                        <li><a href='#section1'>Home</a></li>
                        <li><a href='#section2'>Skills</a></li>
                        <li><a href='#section3'>Projects</a></li>
                         <li><a href='#section4'>Contact Me</a></li>
                        
                   </ul>
                    <ul className="icons">
                        <li><p className='icon-link'><a href="https://www.linkedin.com/in/mariam7-abdelrahman/" target="_blank" ><FontAwesomeIcon icon={faLinkedinIn} /></a></p></li>
                        <li><p className='icon-link'><a href="https://www.facebook.com/profile.php?id=100008447766585" target="_blank" ><FontAwesomeIcon icon={faFacebook} /></a></p></li>
                        <li><p className='icon-link'><a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></p></li>
                        <li><p className='icon-link'><a href="https://github.com/Mariam-1-m" target="_blank" ><FontAwesomeIcon icon={faGithub} /></a></p></li>
                    </ul>
                    
                </div>
                <div className='btnDiv'><button className="contact-btn"><h3>Let’s Craft Something</h3></button></div>
            </nav>
        </div>
    )
}