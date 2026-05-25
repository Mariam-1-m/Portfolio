
import {motion} from "framer-motion";

export default function FloatingImg2(){
    return(
         <motion.img 
         src="/images/contact.png"
         alt="Contact us"
         animate ={{
            y:[0,-20,0],
           
         }}
          transition={{
            duration:3 ,
            repeat:Infinity,
            ease:"ease"   
            }}
            style={{width:"550px" ,margin:"auto",imagePosition:"left",marginTop:"100px"}}
            />
    )
   ;
}