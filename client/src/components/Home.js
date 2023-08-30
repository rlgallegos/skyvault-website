import { Link } from "react-scroll"
import { navItems } from "../data"
import { useState, useEffect, useRef } from "react";
import { IoIosArrowDropup } from "react-icons/io";

function Home(){
    const [fixed, setFixed] = useState(false);
    const [initialTop, setInitialTop] = useState(0);
    const [smallIsOpen, setSmallIsOpen] = useState(false)
    const elementRef = useRef(null);

    const isMobile = window.matchMedia("(max-width: 768px)").matches

    useEffect(() => {
        const element = elementRef.current;
        const elementRect = element.getBoundingClientRect();
        setInitialTop(elementRect.top + window.scrollY);
    
        const handleScroll = () => {
          if (window.scrollY >= initialTop + 1) {
            setFixed(true);
          } else {
            setFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [initialTop]);

    const navList = navItems.map(item => {
        return <Link key={item.id} to={item.id_name} smooth={true} duration={500} >
            <li 
                className="point lora text-xl text-white mx-2 py-3 px-6 bg-transparent rounded border border-transparent 
                hover:border-cblue hover:bg-ccream hover:transform hover:scale-105 transition-all duration-200">
                {item.title}
            </li>
        </Link>
    })
    const smallNavList = navItems.map(item => {
        return <Link key={item.id} to={item.id_name} smooth={true} duration={500} onClick={() => setSmallIsOpen(false)} >
            <li 
                className="point lora mx-2 py-2 list-none
                hover:bg-white hover:text-black hover:transform hover:scale-105 transition-all ">
                {item.title}
            </li>
        </Link>
    })

    return (
        <div id="home" className="page-block relative">
            
            <div id="navbar" 
            className={ `hidden w-full h-1/5 bg-black z-50 md:flex items-center transition-all 
            ${fixed ? 'fixed top-0 left-0 w-full h-[10vh] transition-timing-ease-in duration-500' : 'relative'}`} 
            ref={!isMobile ? elementRef : null}
            >
                <Link className="point w-1/4" key='0' to='home' smooth={true} duration={500}>
                    <h1 className="lora text-5xl w-full text-white">Skyvault</h1>
                </Link>
                <nav className="w-3/4 flex justify-end mr-8">
                    <ul className="flex justify-between">
                        {navList}
                        <a href="https://apps.apple.com/us/app/skyvault/id1637543504">
                            <li 
                                className="point lora text-xl text-white mx-2 py-3 px-6 bg-transparent rounded-xl border border-tertiary
                                hover:bg-tertiary hover:text-black hover:transform hover:scale-105 transition-all duration-200">
                                Try Now
                            </li>
                        </a>
                    </ul>
                </nav>
            </div>

            <div id="small-navbar" className={`md:hidden bg-black z-50 w-full h-[10vh] flex items-center transition-all
            ${fixed ? 'fixed top-0 left-0 w-full h-[10vh]' : 'relative bottom-1/4'}`}
            ref={isMobile ? elementRef : null}
            >
                <Link className="point w-1/4" key='0' to='home' smooth={true} duration={500}>
                    <h1 className="lora text-2xl w-full ml-8 text-white">Skyvault</h1>
                </Link>
                <nav className="w-3/4 flex justify-end">
                    <IoIosArrowDropup onClick={() => setSmallIsOpen(!smallIsOpen)} 
                    className={`mr-6 text-white h-1/2 w-6 ${smallIsOpen ? 'rotate-180 duration-300' : 'rotate-360 duration-300'}`}/>
                    
                    <div className={`absolute top-full bg-black w-full transition-all duration-500 text-white text-sm
                    ${smallIsOpen ? 'max-h-60' : 'max-h-0'} overflow-hidden`}>
                        {smallNavList}
                        <a href="https://apps.apple.com/us/app/skyvault/id1637543504">
                            <li 
                                className="point lora py-2 list-none bg-tertiary text-black 
                                hover:bg-white hover:text-black hover:transform hover:scale-105 transition-all ">
                                Try Now
                            </li>
                        </a>
                    </div>
                </nav>
            </div>

            <img className="absolute inset-0 w-full h-full object-cover z-0" src="/sky-and-sea-bg.jpg" alt="blue-bg" />
        </div>
    )
}
export default Home