
import {motion} from "framer-motion";

export default function FloatingImg(){
    return(
         <motion.img 
         src="/images/butterfly.png"
         alt="Contact us"
         animate ={{
            y:[0,-20,0],
           
         }}
          transition={{
            duration:3 ,
            repeat:Infinity,
            ease:"ease"   
            }}
            style={{width:"400px",marginLeft:"700px" ,marginTop:"180px"}}
            />
    )
   ;
}