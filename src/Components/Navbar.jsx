import React, { useState, useContext } from 'react'
import Logo from "../Assets/Logo.png";
import Context from '../Context/Context';
import { BsSearch } from "react-icons/bs";
import { MdMenu, MdClose } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  let currentLocation = useLocation();
  let {pathname} = currentLocation;

  let [smMenu, setSmMenu] = useState(false);

  let context = useContext(Context);
  let { searchInput, handleSearchInput, handleSearchClick } = context;

  return (

    <nav className='w-[100%] h-[90px] bg-slate-800 flex px-3 justify-between items-center gap-3'>

      <div className="w-[200px] flex justify-center items-center mix-blend-normal">
        <Link to={'/'} className='w-[100%]'><img src={Logo} alt="Moviebuff" className='w-[100%] h-[70px]' /></Link>
      </div>

      <ul className=" hidden md:flex justify-center items-center gap-4">
        <li className="hover:scale-[0.96] transition-[transform] duration-500"><Link className={`font-NotoSans text-[18px] transition-colors duration-500 ${pathname === '/' ? 'text-slate-50' : 'text-slate-500'}`} to={'/'}>Trending</Link></li>
        <li className="hover:scale-[0.96] transition-[transform] duration-500"><Link className={`font-NotoSans text-[18px] transition-colors duration-500 ${pathname === '/genres' ? 'text-slate-50' : 'text-slate-500'}`} to={'/genres'}>Genres</Link></li>
      </ul>

      <div className='hidden md:flex justify-center items-center gap-[0.6rem] bg-white px-3 py-1 rounded-[50px]'>
        <input id="searchBar" type='text' className='outline-none py-1 font-NotoSans text-[16px] rounded-[4px] border-slate-800' placeholder='Search' value={searchInput} onChange={(e) => {handleSearchInput(e)}} />
        <BsSearch fontSize={20} className='text-slate-800 cursor-pointer' onClick={() => {handleSearchClick()}}/>
      </div>

      <div className="flex md:hidden justify-center items-center cursor-pointer" onClick={() => {
        setSmMenu(!smMenu);
      }}>
        {
          smMenu ? <MdClose fontSize={30} className='text-slate-50 hover:text-slate-500 transition-colors duration-500'/> 
          : <MdMenu fontSize={30} className='text-slate-50 hover:text-slate-500 transition-colors duration-500'/>
        }
      </div>

      <div className={`absolute md:hidden z-[2] w-[300px] h-[90vh] flex flex-col justify-start pt-4 items-center gap-[2rem] top-[90px] ${smMenu ? 'right-0' : 'right-[-900px]'} transition-all duration-500 shadow-2xl bg-slate-800`}>
        <ul className="flex flex-col justify-center items-center gap-4">
          <li className="hover:scale-[0.96] transition-[transform] duration-500"><Link onClick={() => {setSmMenu(false)}} className={`font-NotoSans text-[18px] transition-colors duration-500 ${pathname === '/' ? 'text-slate-50' : 'text-slate-500'}`} to={'/'}>Trending</Link></li>
          <li className="hover:scale-[0.96] transition-[transform] duration-500"><Link onClick={() => {setSmMenu(false)}} className={`font-NotoSans text-[18px] transition-colors duration-500 ${pathname === '/genres' ? 'text-slate-50' : 'text-slate-500'}`} to={'/genres'}>Genres</Link></li>
        </ul>
        <div className='flex justify-center items-center gap-[0.6rem] bg-white px-3 py-1 rounded-[50px]'>
          <input id="searchBar" type='text' className='outline-none py-1 font-NotoSans text-[16px] rounded-[4px] border-slate-800' placeholder='Search' value={searchInput} onChange={(e) => {handleSearchInput(e)}} />
          <BsSearch fontSize={20} className='text-slate-800 cursor-pointer' onClick={() => {handleSearchClick()}}/>
        </div>
      </div>

    </nav>
  )
}

export default Navbar