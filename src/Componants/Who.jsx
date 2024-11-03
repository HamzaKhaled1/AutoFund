import Circle from "./Circle"
import Popup from "./Popup"
import { useState } from "react"
const Who=()=>{
    
    return(<>
    <div className="mt-10 mb-20">
        <p className="text-5xl font-bold  text-gray-700 text-center">ليه تختار Autofund؟</p>
        <div className="flex flex-wrap justify-center gap-3 mb-4 " id="Who">
        <Circle text="دليلك لتمويل عربيتك" img="/tmwel.jpg" id="1"/>
        <Circle text="موافقه ائتمانية بدون مصاريف" img="/aatman.jpg" id="2"/>
        <Circle text=" برامج تمويلية تناسب احتياجاتك " img="/6.jpg" id="3"/>
        <Circle text=" تقسيط جديد و مستعمل   " img="/7.jpg" id="4"/>
        <Circle text=" قرض بضمان عربيتك" img="/8.jpg"  id="5"/>
       

        </div>
    </div>
    </>)
     }

export default Who