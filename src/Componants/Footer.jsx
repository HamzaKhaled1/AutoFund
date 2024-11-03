import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (<>
    <div className="bg-gradient-to-b flex sm:flex-row  flex-wrap gap-7 justify-center sm:justify-evenly sm:p-10 p-5   w-full  from-slate-900 to-slate-700" id="About">
        <div className=" flex flex-col">
        <img src="/Autofundlogo.png" alt=""  className="sm:w-72  w-40"/>
        </div>
        <div className=" flex flex-col">
        <p className="text-lg font-bold text-white sm:mb-10 mb-3">اتصل بنا</p>
         <p className="flex gap-3 items-center text-white hover:text-green-500 text-lg"><FaPhoneAlt/> 01009887111</p>
        </div>
        <div>
            <p className="text-md font-bold text-white mb-10">الخدمات</p>
            <ul className="flex flex-col gap-3">
                <li className="flex gap-3 items-center text-white text-md cursor-pointer">شراء</li>
                <li className="flex gap-3 items-center text-white  text-md cursor-pointer"> تمويل</li>
                <li className="flex gap-3 items-center text-white  text-md cursor-pointer"> قروض</li>
            </ul>
        </div>
        <div>
            <p className="text-lg font-bold text-white mb-10">القانون</p>
            <ul className="flex flex-col gap-3">
                <li className="flex gap-3 items-center text-white text-md cursor-pointer">البنود والظروف</li>
                <li className="flex gap-3 items-center text-white  text-md cursor-pointer"> سياسه الخصوصيه</li>
            </ul>
        </div>
        <div>
            <p className="text-lg font-bold text-white mb-10">تابعنا علي مواقع التواصل</p>
            <ul className="flex flex-col gap-5">
                <li className="flex gap-3 items-center text-white hover:text-blue-500 text-md">
                    <a href="https://www.facebook.com/profile.php?id=61557527042109" className="flex gap-3 items-center" > <FaFacebook className="text-3xl"/>Autofund</a>
                </li>
                <li className="flex gap-3 items-center text-white hover:text-violet-500 text-md">
                    <a href="https://www.instagram.com/_autofund_" className="flex gap-3 items-center" > <FaInstagram className="text-3xl"/>_Autofund_</a>
                </li>
            </ul>
        </div>
    </div>
    </>)
}

export default Footer