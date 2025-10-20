import React from 'react'

const LeftContent = () => {
  return (
    <div className='h-[85.5vh] w-[35%] px-10 py-7'>
        <div className='h-full w-[95%] mx-10 flex flex-col justify-between'>
            <div>
                <h3 className='text-6xl font-bold mb-7'>Prospective <br /> <span className='font-[poppins] font-light font-stretch-75% text-[3.5rem] text-gray-700'>Customer</span> <br /> Segmentation</h3>
                <p className='text-md font-medium text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam commodi? Necessitatibus dolores iusto provident? Eos veniam ipsum quidem accusamus. Dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='text-8xl'>
                <i className="ri-skip-right-line"></i>
            </div>
        </div>
    </div>
  )
}

export default LeftContent;