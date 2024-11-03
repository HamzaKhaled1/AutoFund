import Accordion from "./Accordion"
import Item from "./Item"
const Services =()=>{

    return(<>
    <div id="Services">
             <p className="sm:text-6xl text-4xl font-bold text-center text-blue-600 mt-10  "> الخدمات </p>
        <div className="sm:p-10  p-4  w-fullsm:h-screen sm:justify-center flex sm:flex-row gap-4 sm:gap-7 overflow-y-scroll "  >
            <Item name="السيارات الملاكي " pic="/one.jpg" id="1"/>
            <Item name="السيارات النقل" pic="/two.jpg" id="2"	/>
            <Item name="السيارات الكهرباء" pic="/three.jpg" id="3"/>
            <Item name="القرض" pic="/Four.jpg" id="4"/>
            
         
        </div>
        </div>
        </>
    )
}

export default Services