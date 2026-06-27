
import { useState } from "react";


export default function Section3(){
    const [activeTab, setActive] = useState(0);

    const tabs = ["Projects","Tasks","Achievments"];
    const projects=[
        {id: 1, name: "Dentistry World", description: "First Project with HTML,CSS",image:"/images/DentistryWorld.jpg"},
        {id: 2, name: "Handy Made", description: "Developed with HTML5, CSS3",image:"/images/HandyMade.jpg"},
        {id: 3, name: "Pizza Crusta", description: "Developed with Bootstrap, HTML5,CSS3",image:"/images/PizzaCrusta.jpg"},
        {id: 4, name: "Aurablom", description: "Developed with JavaScript, Html5,CSS3",image:"/images/AuraBloom.jpg"},
        {id: 5, name: "NeuroStream", description: "Developed with  Tailwind CSS Framework,Html5",image:"/images/NeuroStream.jpg"},
        {id: 6, name: "My Portifolio", description: "Developed with React JS,CSS",image:"/images/MyPortifolio.jpg"}
   
    ];
    
      const tasks=[
        {id: 1, name: "Movies Cards", description: "Developed with HTML,CSS",image:"/images/movies.jpg"},
        {id: 2, name: "Login Page", description: "Developed with  Javascript,HTML,CSS",image:"/images/login.jpg"},
        {id: 3, name: "Perfume Products", description: "Developed with JavaScript, HTML5,CSS3",image:"/images/products.jpg"},
        {id: 4, name: "Calculator", description: "Developed with JavaScript,Bootstrap, Html5,CSS3",image:"/images/calculator.jpg"},
        {id: 5, name: "Grid Task", description: "Developed with HTML5, CSS3",image:"/images/grid.jpg"},
        {id: 6, name: "Mini Quiz", description: "Developed with React JS,CSS",image:"/images/miniquiz.jpg"}
   
    ];

     
      const achievments=[
        {id: 1, name: "Test 6", description: "Top Students rank 6 (100 out of 100)",image:"/images/test6.jpg"},
        {id: 2, name: "Frontend Certificate", description: "Evaluation of 97.1% as a total",image:"/images/certificate.jpg"},
        {id: 3, name: "Final JS Exam", description: "Top Students rank 39",image:"/images/Final-JS-test.jpg"},
        {id: 4, name: "Task 7", description: "Top Students rank 15",image:"/images/test7.jpg"},
        {id: 5, name: "Bootstrap Project", description: "Evaluation of 99.2%, rank 16",image:"/images/Bootstrap-project.jpg"},
        {id: 6, name: "JS Project", description: "Evaluation of 99.3%, rank 14",image:"/images/JS-project.jpg"}
   
    ];
    return(
        <div id="section3" className="section3">
            <h1>My Projects</h1>
            <p className="description">I'm Mariam Abdelrahman, I live in AL-Qalyubia Obour City,  and here are some of my projects that I have worked on:</p>
                <div className="section3Tabs">
                {tabs.map((tab, index)=>{
            return(
                
        
            <div key={tab} className={`tab ${activeTab === index ? "active" : ""} ${
                index===0?"left":index===tabs.length-1?"right":"middle"
            }`}
            onClick={()=>setActive(index)}>
                <div className="fill"></div>
               <span>{tab}</span> 
                </div>
         
            );
          })}
        
          </div>

          <div className="content">
            {activeTab===0 && (
              <div className="innerContent">
                {projects.map((project)=>(
       <div className="card" key={project.id} style={{ backgroundImage: `url(${project.image})` }}>
        <div className="overlay" >

            <h3>{project.name}</h3>
            <p>{project.description}</p>
        </div>
       </div>
 ) )}
            </div>
            )}

              {activeTab===1 && (
              <div className="innerContent">
                 {tasks.map((task)=>(
       <div className="card" key={task.id} style={{ backgroundImage: `url(${task.image})` }}>
        <div className="overlay" >

            <h3>{task.name}</h3>
            <p>{task.description}</p>
        </div>
       </div>
 ) )}
            </div>
            )}
              {activeTab===2 && (
              
            <div className="innerContent">
                 {achievments.map((achievment)=>(
       <div className="card" key={achievment.id} style={{ backgroundImage: `url(${achievment.image})` }}>
        <div className="overlay" >

            <h3>{achievment.name}</h3>
            <p>{achievment.description}</p>
        </div>
       </div>
 ) )}
            </div>
            
            
            )}
          </div>
            
        </div>
    );

}
