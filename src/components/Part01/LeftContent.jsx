import React from 'react'

const LeftContent = () => {
  return (
    <div className='h-[85.5vh] lg:w-[35%] w-full px-10 py-7'>
      <div className="h-full lg:w-[95%] w-full lg:mx-10 mx-2 flex flex-col">
        <div className="lg:w-full w-[90%] md:w-[80%] mx-auto lg:text-left lg:items-start items-start text-left">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7">
            Prospective <br />
            <span className="font-[poppins] font-light text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-gray-700">
              Customer
            </span> <br /> Segmentation
          </h3>
          <p className="text-sm md:text-base font-medium text-gray-900 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam commodi? Necessitatibus dolores iusto provident? Eos veniam ipsum quidem accusamus. Dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="hidden lg:block text-6xl md:text-7xl lg:text-8xl mt-40 text-left">
          <i className="ri-skip-right-line"></i>
        </div>
      </div>

    </div>
  )
}

export default LeftContent;