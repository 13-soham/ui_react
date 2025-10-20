import React from 'react'

const Nav = () => {
  return (
    <div className='flex items-center justify-between px-20 py-7'>
        <h3 className='bg-black border border-amber-50 rounded-[25px] text-base text-white p-3 uppercase'>Target Audience</h3>
        <div className='flex items-center justify-center gap-10'>
            <h3 className='text-lg uppercase tracking-wider text-gray-700'>Digital Banking Platform</h3>
            <button className='bg-gray-400 text-white text-base px-4 py-2 rounded-[30px] border-2 border-gray-700 cursor-pointer active:scale-95 transition-transform duration-150'>Contact Us</button>
        </div>
    </div>
  )
}

export default Nav;