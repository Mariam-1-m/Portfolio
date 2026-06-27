
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Section5(){
    return(
      <div id="section5" className="section5">
        <div className='main5'>
      <div className="title">
       <h2><a href='#section1'>Portifolio</a></h2>
      </div>

      <div className="links">
        <ul className="icons">
                        <li><p className='icon-link icon5'><a href="https://www.linkedin.com/in/mariam7-abdelrahman/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedinIn} /></a></p></li>
                        <li><p className='icon-link icon5'><a href="https://www.facebook.com/profile.php?id=100008447766585" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faFacebook} /></a></p></li>
                        <li><p className='icon-link icon5'><a href="#" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></p></li>
                        <li><p className='icon-link icon5'><a href="https://github.com/Mariam-1-m" target="_blank"  rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></p></li>
                    </ul>
      </div>
      </div>
      </div>
    );
 }
