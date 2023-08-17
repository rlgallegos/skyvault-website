import { Link } from "react-scroll"
import { navItems } from "../data"
import { useState, useEffect, useRef } from "react";

function Home(){
    const [fixed, setFixed] = useState(false);
    const [initialTop, setInitialTop] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        const elementRect = element.getBoundingClientRect();
        setInitialTop(elementRect.top + window.scrollY);
    
        const handleScroll = () => {
          if (window.scrollY >= initialTop) {
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
                className="point source-sans text-2xl text-white mx-2 py-3 px-6 bg-transparent rounded border border-transparent 
                hover:border-cblue hover:bg-ccream hover:transform hover:scale-105 transition-all duration-200">
                {item.title}
            </li>
        </Link>
    })

    return (
        <div className="block bg-blue-100 relative">
            <div id="navbar" 
            className={`w-full h-1/5 bg-black z-10 flex items-center transition-all 
            ${fixed ? 'fixed top-0 left-0 w-full h-[10vh] transition-timing-ease-in duration-500' : 'relative'}`} 
            ref={elementRef} >
                <h1 className="lora text-5xl w-1/4 text-white">Skyvault</h1>
                <nav className="w-3/4 flex justify-end mr-8">
                    <ul className="flex justify-between">
                        {navList}
                    </ul>
                </nav>
            </div>
            <img className="absolute inset-0 w-full h-full object-cover z-0" src="/sky-and-sea-bg.jpg" alt="blue-bg" />
        </div>
    )
}
export default Home