import FloatinImg2 from "./FloatingImg";

export default function Section4(){
return(
    <div id="section4" className="section4">
   <div className="content4">
                 <div className="left">
                   <FloatinImg2/>
                </div>   

                <div className="right">
                    <h2>Get In Touch</h2>
                    <div className="form">
                        
                    <div >
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                    <div>
                        <input type="email" placeholder="Email Address"/>
                        <input type="tel" placeholder="Phone Number"/>
                    </div>
                    <div> 
                         <textarea rows={12} cols={65} className="msgInput" placeholder="Message"/>
                    </div>

                    <button className="sendBtn contact-btn">Send</button>
                    </div>
                  

                    </div>
                     
            </div>

     <div className="floatindDiv">
        <div className="text">
    <p>see all my projects at once & leave here your email adress</p>
        </div>
        ''
        <div className="input">
            <div>
                <input type="text" placeholder="Email Address"/>
                <button>Submit</button>
            </div>
            
        </div>

        </div>
           </div> 
         
);
}