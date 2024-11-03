import { useState } from "react"
import text2 from "/Text.json"
import Popup from "./Popup"
const Circle=({text,img,id})=>{
    const[flag,setFlag]=useState(false)
    const handleClick=()=>{setFlag(!flag)}
    const [data,setData]=useState(text2.text.find(item=>item.id==id))
    return(<> 
    <div className={`sm:h-72  sm:w-72 flex h-40 w-40  justify-center mt-20 items-center  relative border-2 border-black bg-cover transition-transform to-sky-300 hover:scale-105 duration-300 cursor-pointer ease-in-out ${flag?"rounded-xl h-52 w-48 sm:h-72 sm:w-72":"rounded-full"} `}
    style={{backgroundImage:`url('${img}')`}} onClick={handleClick}>
        
        <p className={` font-bold text-white bg-black/50  text-xs  sm:text-base  flex text-center justify-center ${flag?"text-lg p-2 absolute bottom-0 rounded-none":"text-2xl p-2 rounded-3xl"}`}>
                {flag?data.text:text}
        </p>


    </div>
    <Popup flag={flag} id={id} setFlag={setFlag}  />
    </>)
}

export default Circle