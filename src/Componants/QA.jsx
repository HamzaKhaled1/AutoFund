import Accordion from "./Accordion"
const QA=()=>{
    return(
        <>
        <div id="QA" className=" w-full p-1 ">
        <p className="sm:text-6xl text-4xl font-bold text-center sm:mb-14  text-blue-600">الأسئله الشائعه</p>
        <div className="flex flex-col-reverse sm:flex-row ">
        <Accordion/>
        <img src="/QA.jpg" alt=""  className="sm:w-[30rem] sm:h-[30rem] w-40 hidden sm:block "/>

        </div>
        </div>
        </>
    )
}

export default QA