import React from 'react'
import Nav from './Nav';
import 'remixicon/fonts/remixicon.css';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Part01 = (props) => {
  return (
    <div className='h-screen w-full overflow-hidden'>
        <Nav/>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
            <LeftContent/>
            <RightContent users={props.users}/>
        </div>
    </div>
  )
}

export default Part01;