import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-full w-75 relative overflow-hidden bg-fuchsia-700 rounded-3xl shrink-0'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <div className='h-full w-full absolute top-0 left-0 flex flex-col justify-between px-8 py-7'>
            <h2 className='text-2xl font-[monument] bg-gray-100 w-fit px-4 py-3 rounded-full'>{props.id+1}</h2>
            <div className='flex flex-col justify-between gap-5'>
                <p className='text-shadow-2xs mb-2 text-lg font-semibold text-gray-200 leading-relaxed'>{props.intro}</p>
                <div className='flex items-center justify-between'>
                    <button className='bg-blue-700 px-5 py-3 text-white rounded-full font-medium cursor-pointer active:scale-95 transition-transform duration-150'>{props.tag}</button>
                    <button className='text-xl bg-blue-700 px-5 py-3 text-white rounded-full font-medium cursor-pointer active:scale-95 transition-transform duration-150'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard;