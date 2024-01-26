'use client';

import { useEffect, useState } from "react";

const ToggleSwitch: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);


    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if(theme === 'dark') {
            setIsDarkMode(true)
        }
    }, []);
  

    useEffect(() => {
        if(isDarkMode) {
            // document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            // document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);
  
    return (
      <div onClick={() => setIsDarkMode(prev => !prev)}
      className="relative transform -rotate-90 w-20 h-10 shadow-sm mt-4 flex items-center dark:bg-gray-900 bg-white cursor-pointer rounded-full p-1 ">
        <div className={`mr-auto rounded-full h-8 w-8 p-2 flex items-center justify-center ${!isDarkMode ? "bg-[#34CAA5]" : "bg-white" }`}>
       
              <img src="images/moon 1.png" alt="moon" className=' w-8 h-8 cursor-pointer object-contain' />
         
        </div>
            <div className={`absolute bg-transition w-8 h-8 p-2 items-center justify-center rounded-full  transform transition-all duration-300 ${isDarkMode ? "left-[2px] duration-300" : "right-[2px] duration-300"} `} >
            </div>
        <div className={`ml-auto rounded-full h-8 w-8 p-2 flex items-center justify-center ${isDarkMode ? "bg-[#34CAA5]" : "bg-black/10" }`}>
       
            <img src="images/sun.png" alt="sun" className=' w-8 h-8 cursor-pointer object-contain' />
            </div>
      </div>
    );
  };
  
  export default ToggleSwitch;