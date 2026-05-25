import Carousel from "./Carousel";

export default function Section2() {
    return (
        <div id="section2"className="section2">
           <div className="container2">
           <h1>My Skills</h1> 
           <p className="subSkilesText">Explore my acquired skills during my journey..</p>
             
           <div className="skillsDiv">
              <Carousel />
           </div>
           </div>
        </div>
    );
}

