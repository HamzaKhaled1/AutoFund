import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

import { useEffect, useState } from "react";
const Accordion =()=>{
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(true);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);  
    const [open7,setOpen7]=useState(false)
    const handleClick=()=>{
        setOpen(!open)
    }
    const handleClickk=()=>{
        setOpenn(!openn)
    }
    const handleClick2=()=>{
        setOpen2(!open2)
        setOpen(false)
        setOpen3(false)
        setOpen4(false)
        setOpen5(false)
        setOpen6(false)
        setOpen7(false)
    }
    const handleClick3=()=>{
        setOpen3(!open3)
        setOpen(false)
        setOpen2(false)
        setOpen4(false)	
        setOpen5(false)
        setOpen6(false)
        setOpen7(false)
        
    }
    const handleClick4=()=>{
        setOpen4(!open4)
        setOpen2(false)
        setOpen3(false)	
        setOpen5(false)
        setOpen6(false)
        setOpen7(false)
        setOpen(false)

    }
    const handleClick5=()=>{
        setOpen5(!open5)
        setOpen2(false)
        setOpen3(false)
        setOpen4(false)
        setOpen6(false)
        setOpen7(false)
        setOpen(false)

    }
    const handleClick6=()=>{
        setOpen6(!open6)
        setOpen2(false)
        setOpen3(false)	
        setOpen4(false)
        setOpen5(false)
        setOpen7(false)
        setOpen(false)

    }
    const handleClick7=()=>{
        setOpen7(!open7)
        setOpen2(false)
        setOpen3(false)
       setOpen4(false)
        setOpen6(false)
        setOpen5(false)
        setOpen(false)

    }

    return(<>

    
    <div className="flex flex-col sm:w-2/3 p-10  sm:gap-10  font-Arabic border-slate-500  sm:border-2 rounded-xl mb-4 ">
                <div >
            <dl className="flex flex-col gap-5">
                <div className="border-slate-500  border-2 rounded-xl p-5 pl-0">
                <dt className="sm:text-3xl text-xl font-semibold flex items-center  w-2/3 justify-between cursor-pointer" onClick={handleClick2}> تمويل بنك ولا شركة ؟ {open2 ? <FaAngleUp  className="text-3xl cursor-pointer " /> : <FaAngleDown className="text-3xl cursor-pointer    " />}</dt>
                <dd className={` text-slate-500  text-lg    ${open2?"block":"hidden"}`}>احنا بنتعامل مع كل جهات التمويل في مصر سواء شركات او بنوك و على حسب البروفايل الخاص بحضرتك بنوجه حضرتك للجهة المناسبة و اللي اجراءاتها تكون اسرع و اسهل</dd>
                </div>
                <div className="border-slate-500 border-2 rounded-xl p-5 pl-0">
                <dt className="sm:text-3xl text-xl font-semibold  flex items-center  w-2/3 justify-between  cursor-pointer" onClick={handleClick3}>مقر الشركة فين؟{open3 ? <FaAngleUp  className="text-3xl cursor-pointer " /> : <FaAngleDown  className="text-3xl cursor-pointer    " />}</dt>
                <dd  className={` text-slate-500   text-lg    ${open3?"block":"hidden"}`} >احنا لينا فروع في جميع انحاء مصر و بعد الموافقه بنوجهه حضرتك لاقرب فرع ليك ابرز
                الفروع ( القاهرة القطاميه - المهندسين - الاسكندرية )</dd>
                </div>
                <div className="border-slate-500  w-full border-2 rounded-xl p-5 pl-0">
                <dt className="sm:text-3xl text-xl font-semibold  w-2/3 justify-between  flex items-center  cursor-pointer" onClick={handleClick4}>احنا لية بنطلب وظيفة مع ان القرض بضمان العربية ؟{open4 ? <FaAngleUp  className="text-3xl cursor-pointer " /> : <FaAngleDown  className="text-3xl  cursor-pointer    " />} </dt>
                <dd  className={` text-slate-500   text-lg    ${open4?"block":"hidden"}`}> بتكون يا فندم مجرد معلومة بتقوي طلب حضرتك في طلب التمويل مصدر دخل يوضح
                قدرتك علي السداد,,</dd>
                </div>
                <div className="border-slate-500  w-full border-2 rounded-xl p-5 pl-0">
               
                <dt className="sm:text-3xl text-xl font-semibold   w-2/3 justify-between  flex items-center cursor-pointer" onClick={handleClick5}> احنا وسيط ولا مباشر ؟ {open5 ? <FaAngleUp  className="text-3xl cursor-pointer " /> : <FaAngleDown  className="text-3xl cursor-pointer    " />}  </dt>
                <dd className={` text-slate-500   text-lg    ${open5?"block":"hidden"}`} >  احنا شركه بتتعامل مع جميع جهات التمويل و جميع البرامج اسلامية و خدمتنا ملهاش مقابل
                مادي اضافي</dd>
                </div>
                <div className="border-slate-500  w-full border-2 rounded-xl p-5 pl-0">
            
                <dt className="sm:text-3xl text-xl font-semibold   w-2/3 justify-between  flex items-center cursor-pointer" onClick={handleClick}> ليه بنعمل حظر بيع ؟{open ? <FaAngleUp  className="text-3xl cursor-pointer " /> : <FaAngleDown  className="text-3xl cursor-pointer    " />}  </dt>
                <dd className={` text-slate-500    text-lg   ${open?"block":"hidden"}`} >  بيكون مجرد اجراء روتيني اي جهه تمويل بتعملة ولو حضرتك سددت القرض كامل في اي وقت بيتشال الحظر بعدها علي طول و بيتشال الفايدة المتبقية
                مادي اضافي</dd>
                </div>
                <div className="border-slate-500  w-full border-2 rounded-xl p-5 pl-0">
            
                <dt className="sm:text-3xl text-xl font-semibold   w-2/3 justify-between  flex items-center cursor-pointer" onClick={handleClick6}> الفايدة عالية و البنك اقل منكوا ؟{open6 ? <FaAngleUp  className="text-3xl cursor-pointer " /> : <FaAngleDown  className="text-3xl cursor-pointer    " />}  </dt>
                <dd className={` text-slate-500    text-lg   ${open6?"block":"hidden"}`} >  البنوك يا فندم بيكون شروطها و اجراءاتها معقدة و اطول و الموافقه مبتبقاش سهله
                ليها شروط معينه
                </dd>
                </div>
                <div className="border-slate-500  w-full border-2 rounded-xl p-5 pl-0">
           
                <dt className="sm:text-3xl text-xl font-semibold   w-2/3 justify-between  flex items-center cursor-pointer" onClick={handleClick7}> هدفع في مده التقسيط ضعف المبلغ ؟{open7 ? <FaAngleUp  className="text-3xl cursor-pointer " /> : <FaAngleDown  className="text-3xl cursor-pointer    " />}  </dt>
                <dd className={` text-slate-500   text-lg    ${open7?"block":"hidden"}`} >  سعر العربيات في مصر في خلال اخر كام سنه بيتضاعف اكثر من سعر الفوايد ف يا فندم في خلال مده التقسيط سعر العربية بيكون
                                                                                            اتضاعف معاها ومع ذلك عندنا سداد معجل في اي وقت حضرتك
                                                                                            حابب تدفع تمن العربية كامل بيتم الغاء جميع الفوايد المتبقية
                                                                                            علي حضرتك " رأي شخصي "
                </dd>
                </div>

            </dl>
        </div>

          
        </div>
    
    
    </>)
   
}
export default Accordion;