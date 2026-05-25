import FloatingImg from "./FloatingImg"
import {TypeAnimation} from 'react-type-animation';
import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Section1(){ 
    return(
        <div id="section1" className="section1">
            <div className="intro">
                <h2>Welcome to My Portfolio</h2>
                <p>
                <TypeAnimation 
                sequence={["Hello!",200,"I'm Mariam Abdelrahman",2000,"A  Frontend Developer",2000]}
                speed={50}
                wrapper={"span"}
                repeat={Infinity}
                className="typing"
                >
                </TypeAnimation>
                </p>

                <p className="conBtn"> <a href="#section4">Let's Connect  <span><FontAwesomeIcon  icon={faCircleArrowRight} style={{color:'#72d9f1', fontSize:'18px'} } /> </span> </a></p>
                 {/* <p className="expYears">Hello everyone,I have about 8 months of Frontend Development experience.</p> */}
            </div>
          <FloatingImg />
        </div>
    )
}