import React from 'react'

const RightCard = (props) => {
  return (
    // Use responsive fixed/min widths so cards are smaller on mobile
    // flex-none makes sure they don't shrink and allow horizontal scroll
    <div className='h-full flex-none min-w-[14rem] sm:min-w-[16rem] md:min-w-[18rem] lg:min-w-[22rem] w-[14rem] sm:w-[16rem] md:w-[18rem] lg:w-[22rem] relative overflow-hidden bg-fuchsia-700 rounded-3xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <div className='h-full w-full absolute top-0 left-0 flex flex-col justify-between px-6 py-6'>
            <h2 className='text-2xl font-[monument] bg-gray-100 w-fit px-4 py-3 rounded-full'>{props.id+1}</h2>
            <div className='flex flex-col justify-between gap-4'>
                <p className='text-shadow-2xs mb-2 text-lg font-semibold text-gray-200 leading-relaxed'>
                  {props.intro}
                </p>
                <div className='flex items-center justify-between'>
                    <button className='bg-blue-700 px-4 py-2 text-white rounded-full font-medium cursor-pointer active:scale-95 transition-transform duration-150'>
                      {props.tag}
                    </button>
                    <button className='text-xl bg-blue-700 px-4 py-2 text-white rounded-full font-medium cursor-pointer active:scale-95 transition-transform duration-150'>
                      <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard;
