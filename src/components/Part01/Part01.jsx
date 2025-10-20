import React from 'react'
import Nav from './Nav';
import 'remixicon/fonts/remixicon.css';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Part01 = () => {
  return (
    <div className='h-screen w-full'>
        <Nav/>
        <div className='flex items-center justify-between'>
            <LeftContent/>
            <RightContent/>
        </div>
    </div>
  )
}

export default Part01;