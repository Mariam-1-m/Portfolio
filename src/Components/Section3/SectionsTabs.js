import { useState } from "react";


export default function SectionsTabs(){ 
    const [activeTab, setActive] = useState(0);

    const tabs = ["section1Tab","section2Tab","section3Tab"];

    return(
        <div className="section3Tabs">

          {tabs.map((tab, index)=>{
            return(
                
                 
            <div key={tab} className={`tab ${activeTab === index ? "active" : ""} ${
                index===0?"left":index===tabs.length-1?"right":"middle"
            }`}
            onClick={()=>setActive(index)}>
                <div className="fill"></div>
               <span></span> 
                </div>
          
            );
          })}
        
        </div> 
    );

}
