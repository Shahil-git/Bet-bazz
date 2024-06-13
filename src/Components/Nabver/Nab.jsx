

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Nab = () => {
  // Retrieve the theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('halloween');
    } else {
      setTheme('light');
    }
  };

  console.log(theme);

  return (
    <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-2xl gap-0 font-Merriweather text-secondary">Byte<span className="text-primary">Hub</span></a>
      </div>
      <div className="flex-none  gap-3">
        <ul className="menu menu-horizontal hidden sm:flex gap-5 px-1">
          {/*<li><a href="/" className="text-xl">Home</a></li>
          <li><a href="/Blogs" className="text-xl">Blogs</a></li>
          <li><a href="/Bookmarks" className="text-xl">Bookmarks</a></li>*/}
          <NavLink className={({isActive})=> 
  isActive ? 'text-primary font-bold': 'font-bold'
          }
          to={"/"}>Home</NavLink>
          <NavLink className={({isActive})=> 
  isActive ? 'text-primary font-bold': 'font-bold'
          }
          to={"/Blogs"}>Blogs</NavLink>
          <NavLink className={({isActive})=> 
  isActive ? 'text-primary font-bold': 'font-bold'
          }
          to={"/Bookmarks"}>Bookmarks</NavLink>
        </ul>
        <label className="cursor-pointer grid place-items-center">
          <input onChange={handleToggle} type="checkbox" value="halloween" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Nab;
