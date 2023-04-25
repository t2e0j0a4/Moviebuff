import React, { useState } from 'react'
import Logo from "../Assets/Logo.png";
import { MdMenu, MdClose } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  let currentLocation = useLocation();
  let {pathname} = currentLocation;

  let [smMenu, setSmMenu] = useState(false);

  return (

    <nav className='w-[100%] h-[90px] bg-slate-800 flex px-3 justify-between items-center gap-3'>

      <div className="w-[200px] flex justify-center items-center mix-blend-normal">
        <img src={Logo} alt="Moviebuff" className='w-[100%] h-[70px]' />
      </div>

      <ul className=" hidden md:flex justify-center items-center gap-4">
        <li className="hover:scale-[0.96] transition-[transform] duration-500"><Link className={`font-NotoSans text-[18px] transition-colors duration-500 ${pathname === '/' ? 'text-slate-50' : 'text-slate-500'}`} to={'/'}>Trending</Link></li>
        <li className="hover:scale-[0.96] transition-[transform] duration-500"><Link className={`font-NotoSans text-[18px] transition-colors duration-500 ${pathname === '/genres' ? 'text-slate-50' : 'text-slate-500'}`} to={'/genres'}>Genres</Link></li>
      </ul>

      <div className='hidden md:flex justify-center items-center'>
        <input type='search' className='outline-none py-2 px-3 font-NotoSans text-[16px] text-slate-800 rounded-[4px] border-[2px] border-slate-800' placeholder='Search'/>
      </div>

      <div className="flex md:hidden justify-center items-center cursor-pointer" onClick={() => {
        setSmMenu(!smMenu);
      }}>
        {
          smMenu ? <MdClose fontSize={30} className='text-slate-50 hover:text-slate-500 transition-colors duration-500'/> 
          : <MdMenu fontSize={30} className='text-slate-50 hover:text-slate-500 transition-colors duration-500'/>
        }
      </div>

      <div className={`absolute md:hidden w-[280px] h-[200px] scale-up-center ${smMenu ? 'flex' : 'hidden'} flex-col justify-center items-center gap-[2rem] top-[90px] right-0 mt-2 mr-2 rounded-[4px] shadow-2xl bg-slate-800`}>
        <ul className="flex flex-col justify-center items-center gap-4">
          <li className="hover:scale-[0.96] transition-[transform] duration-500"><Link onClick={() => {setSmMenu(false)}} className={`font-NotoSans text-[18px] transition-colors duration-500 ${pathname === '/' ? 'text-slate-50' : 'text-slate-500'}`} to={'/'}>Home</Link></li>
          <li className="hover:scale-[0.96] transition-[transform] duration-500"><Link onClick={() => {setSmMenu(false)}} className={`font-NotoSans text-[18px] transition-colors duration-500 ${pathname === '/genres' ? 'text-slate-50' : 'text-slate-500'}`} to={'/genres'}>Genres</Link></li>
        </ul>
        <div className='flex justify-center items-center'>
          <input type='search' className='outline-none py-2 px-3 font-NotoSans text-[16px] text-slate-800 rounded-[4px] border-[2px] border-slate-800' placeholder='Search'/>
        </div>
      </div>

    </nav>
  )
}

export default Navbar