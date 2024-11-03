import { useParams } from "react-router-dom"
import services from "/data.json"
import { useEffect, useState } from "react"
const InnerPage=()=>{
const[data,setData]=useState([]) 
const [price,setPrice]=useState(0)
const [time,setTime]=useState(0)
const[depo,setDepo]=useState(0)
const [total,setTotal]=useState(0)
const [flag,setFlag]=useState(false)
const id=useParams().id
useEffect(()=>{
    window.scrollTo(0, 0);
    const serviceData = services.services.find((item) => item.id == id);
    setData(serviceData);
},[])

const handlecalc=(e)=>{
setFlag(true)
e.preventDefault()
const loan=price-depo
const percent=time*Number(data.percent)
const tot=parseFloat(((loan*percent)+loan).toFixed(2))
setTotal(tot/(time*12))
console.log(total)

}
console.log(price);
    return(
        <>
        <div className="sm:p-10 p-5">

        
        <div className="flex justify-around  flex-col-reverse sm:flex-row  w-full">
            <div className="sm:w-1/2 flex flex-col gap-4">
                <p className="text-4xl font-bold    ">
                    {data.name}
                </p>
                <p className="text-slate-500  text-xl letter-tracking-wide">{data.desc}</p>
                <p className="text-slate-500  text-xl letter-tracking-wide">{data.desc2?data.desc2:""}</p>
                <div className="flex  gap-2">
                <p className={`text-red-500 text-2xl font-bold  ${data.note?"block":"hidden"}`}>تنويه :</p>
                <p className="text-red-500 text-xl font-bold ">{data.note?data.note:""}</p>

                </div>
            </div>
            <div className=" flex flex-col ">
                <img src={data.pic} alt="" className="sm:w-96 sm:h-96 rounded-xl" />
            </div>
            
        </div>
        <div className="border-2 p-4 mt-5 rounded-xl flex flex-col sm:flex-row justify-between">
            <div>
            <p className="sm:text-3xl text-xl font-bold mb-5">احسب القسط</p>
            <form action="" className="flex flex-col gap-4">
                <label htmlFor="السعر" className="flex flex-col gap-4 text-lg font-bold"> السعر</label>
                <input type="number" id="السعر" placeholder="السعر" className=" p-2 rounded-xl " onChange={(e)=>setPrice(e.target.value)} />
                <label htmlFor="السعر" className="flex flex-col gap-4  text-lg font-bold"> عدد السنين</label>
               
                <input type="number" id="عدد السنين" placeholder="عدد السنين" className="border-2-gray-400 p-2  rounded-xl" onChange={(e)=>setTime(e.target.value)} />
                <label htmlFor="المقدم" className="flex flex-col gap-4   text-lg font-bold"> المقدم</label>
                <input type="number" id="المقدم" placeholder="المقدم" className="border-2-gray-400 p-2  rounded-xl" onChange={(e)=>setDepo(e.target.value)} />
                <div className="text-white bg-blue-500 p-2 rounded-xl w-40 text-center font-bold cursor-pointer hover:bg-blue-900 duration-150" onClick={(e)=>handlecalc(e)}>
                    احسب
                </div>
            </form>
                
            </div>
            <div className={`  ${flag?"hidden":"block"}`}>
                <p className="text-3xl font-bold ">
                   <img src="/Calc.jpg" alt="" className=" sm:w-[30rem] sm:h-[30rem] ml-20 rounded-3xl transition-transform   "/>
                </p>
            </div>
            <div className={`  ${flag?"block":"hidden"}`}>
                <p className="sm:text-3xl text-2xl font-bold sm:p-40 p-10">
                    قسطك الشهري هو: {total}
                </p>
                <div className="p-10 flex flex-col gap-4">
                    <p className="text-sm font-bold " >
                            في حاله قبول العرض يمكنك ارفاق الملف الذي يحتوي علي البيانات المطلوبه وسيتم التواصل معك
                    </p>
                    <input type="file" />
                </div>
                
            </div>
        </div>
        </div>
        </>
    )
}

export default InnerPage