import React from 'react'
import RightCard from './RightCard';

const RightContent = (props) => {
  // console.log(props.users);
  
  return (
    <div className='h-[85.5vh] w-[65%] px-7 py-8'>
        <div className='h-full w-[97%] -mx-1 flex flex-nowrap overflow-auto gap-5 scrollbar-hide'> {/* flex shrink use in child property */}
          {props.users.map((elem, idx)=>{
            return <RightCard key={idx} id={idx} img={elem.img} count={elem.count} intro={elem.intro} tag={elem.tag}/>;
          })}
        </div>
    </div>
  )
}

export default RightContent;