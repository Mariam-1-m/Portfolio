import {useState} from 'react'
import CircularProgress from './CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const skills=[
    {id:1, name:"HTML5", percentage:97, color:"#4d5bf9"},
    {id:2, name:"CSS3", percentage:95, color:"#4d5bf9"},
    {id:3, name:"JavaScript (ES6+)", percentage:90, color:"#4d5bf9"},
    {id:4, name:"React", percentage:80, color:"#4d5bf9"},
    {id:5, name:"Bootstrap", percentage:92, color:"#4d5bf9"},
    {id:6, name:"Tailwind", percentage:90, color:"#4d5bf9"},
  
];
export default function Carousel(){
  const [index,setIndex] = useState(0);   
  const prev=()=>{
    setIndex((prev)=>prev===0?skills.length-1:prev-1)
  }
  
  const next=()=>{
    setIndex((prev)=> (prev + 1) % skills.length)
  }


    return(
        <div className="carousel">
            
          
      <div className="track"
      style={{
        transform:`translateX(-${index*150}px)`,
      }}>
        {skills.map((skill, i)=>(
            <CircularProgress key={i} percentage={skill.percentage} skillName={skill.name} color={skill.color} {...skill} />
        ))}
      </div>
        {/* {skills.map((skill)=>(
            <CircularProgress key={skill.id} percentage={skill.percentage} skillName={skill.name} color={skill.color}/>
            
        ))} */}
        <div className='navigators'>
         <button onClick={prev} className="carousel-btn prev"><FontAwesomeIcon className="prev" icon={faCaretLeft} /></button>

        <button onClick={next} className="carousel-btn next"><FontAwesomeIcon  className="next" icon={faCaretRight} /></button>
        </div>
        </div>
    );
}