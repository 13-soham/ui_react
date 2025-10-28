import React from 'react'
import RightCard from './RightCard';

const RightContent = (props) => {
  return (
    // mobile: take half width (so left content can occupy other half)
    // lg: keep your original desktop width
    <div className='lg:h-[85.5vh] h-auto lg:w-[65%] w-1/2 px-4 lg:px-7 py-6 lg:py-8'>
      {/* keep horizontal scroll behavior same; full width of this container */}
      <div className='h-full w-full -mx-1 flex flex-nowrap overflow-x-auto gap-5 scrollbar-hide'>
        {props.users.map((elem, idx) => {
          return (
            <RightCard
              key={idx}
              id={idx}
              img={elem.img}
              count={elem.count}
              intro={elem.intro}
              tag={elem.tag}
            />
          );
        })}
      </div>
    </div>
  )
}

export default RightContent;
