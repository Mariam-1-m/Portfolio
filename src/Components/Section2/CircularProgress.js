
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function CircularProgress({percentage,skillName,color}) 
{
    return (<div className="circularProgress">
  {/* <div className="circle"  style={{background: `conic-gradient(${color} ${percentage}%, #ccc ${percentage}% 100%)`}}> */}
    <div className="circle"  >
 
 <svg style={{ height: 0 }}>
  <defs>
    <linearGradient id="grad">
      <stop offset="0%" stopColor="#7303c0" />
      {/* <stop offset="25%" stopColor="#7303c0" /> */}
      <stop offset="50%" stopColor="#ec38bc" />
      <stop offset="100%" stopColor=" #fdeff9" />
    </linearGradient>
  </defs>
</svg>

<CircularProgressbar 
value={percentage}
text={percentage+"%"}
styles={{
    path:{
        stroke:"url(#grad)",
        strokeLinecap:"round",
        
    },
    text:{
        fill:"#fff",
        fontSize:"16px",
    }
}}
/>
   
  </div>
  <h3 className="skillName">{skillName}</h3>
</div>
    );

}