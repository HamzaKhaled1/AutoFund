import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header=()=>{

    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return(
        <div className="flex bg-gradient-to-l from-black to-blue-300 text-white items-center  w-full justify-between p-2 pl-0  sm:p-6">
            <div className="flex  sm:gap-20     ">
                <div>
                    <RouterLink to="/">
                <p className="text-4xl font-extrabold text-blue-600 flex items-center cursor-pointer font-Heading"> <img src="/Autofundlogo.png" alt=""  className="w-36"/> </p></RouterLink>
                </div>
            <div>
            <li className="flex sm:gap-10 gap-4 w-full">
            {isHomePage ? (
                <ScrollLink to="Home" smooth={true} duration={500} className="sm:text-xl text-sm  font-semibold cursor-pointer hover:text-sky-300">
                    الرئيسية
                </ScrollLink>
            ) : (
                <RouterLink to="/" className="sm:text-xl font-semibold cursor-pointer text-sm hover:text-sky-300">
                    الرئيسية
                </RouterLink>
            )}
            
            {isHomePage ? (
                <ScrollLink to="Services" smooth={true} duration={500} className="sm:text-xl text-sm font-semibold cursor-pointer hover:text-sky-300">
                    الخدمات
                </ScrollLink>
            ) : (
                <RouterLink to="/#Services" className="sm:text-xl font-semibold text-sm cursor-pointer hover:text-sky-300">
                    الخدمات
                </RouterLink>
            )}

            {isHomePage ? (
                <ScrollLink to="QA" smooth={true} duration={500} className="sm:text-xl text-sm font-semibold cursor-pointer hover:text-sky-300">
                    الأسئلة الشائعة
                </ScrollLink>
            ) : (
                <RouterLink to="/#QA" className="sm:text-xl text-sm font-semibold cursor-pointer hover:text-sky-300">
                    الأسئلة الشائعة
                </RouterLink>
            )}

            {isHomePage ? (
                <ScrollLink to="Who" smooth={true} duration={500} className="sm:text-xl text-sm font-semibold cursor-pointer hover:text-sky-300">
                    ليه تختارنا
                </ScrollLink>
            ) : (
                <RouterLink to="/#Who" className="sm:text-xl font-semibold text-sm cursor-pointer hover:text-sky-300">
                    ليه تختارنا
                </RouterLink>
            )}
        </li>


            </div>

            </div>
            <div className='mr-5'>

            {isHomePage ? (
                <ScrollLink to="About" smooth={true} duration={500} className="sm:text-xl hidden sm:block text-sm font-semibold cursor-pointer hover:text-sky-500">
                    تواصل معنا
                </ScrollLink>
            ) : (
                <RouterLink to="/#Who" className="sm:text-xl font-semibold cursor-pointer hidden sm:block text-sm hover:text-sky-500">
                    تواصل معنا
                </RouterLink>)}
            </div>
            {/* <div className="h-0.5 w-full bg-black opacity-50"></div> */}
        </div>
    )
}

export default Header