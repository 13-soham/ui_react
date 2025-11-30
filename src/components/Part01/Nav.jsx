import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='flex items-center justify-between lg:px-20 lg:py-7 px-3 py-4'>
        <Link to="/Part03"><h3 className='bg-black border border-amber-50 rounded-[25px] text-base text-white lg:p-3 p-5 uppercase'>Gallary</h3></Link>
        <div className='flex items-center lg:justify-center justify-between lg:gap-10 gap-5'>
            <h3 className='hidden lg:block lg:text-lg lg:uppercase lg:tracking-wider text-gray-700'>Digital Banking Platform</h3>
            <h3 className='lg:hidden md:block font-[monument] text-4xl mx-2'>DBP</h3>
            <Link to="/Part02"><button className='bg-gray-400 text-white text-base lg:px-4 lg:py-2 p-4 lg:rounded-[30px] rounded-3xl border-2 border-gray-700 cursor-pointer active:scale-95 transition-transform duration-150'>Note</button></Link>
        </div>
    </div>
  )
}

export default Nav;