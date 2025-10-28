import React from 'react'

const Note02 = () => {
    let submitHandler = (e)=>{
        e.preventDefault();
    }
  return (
    <div className='px-5 py-7 mt-3 flex flex-col lg:flex-row lg:items-start lg:justify-between'>
        <form 
            onSubmit={(e)=>submitHandler(e)}
            className='flex flex-col justify-between gap-3 lg:w-full lg:py-9'
        >
            <input 
                type="text" 
                placeholder='Enter Heading'
                className='px-3 py-4 border-2 w-full lg:w-3/5 border-amber-100 outline-none text-amber-50 rounded-lg font-medium'
            />
            <textarea 
                type="text"
                placeholder='Write details'
                className='h-40 lg:h-80 px-3 py-5 border w-full lg:w-3/5 border-amber-100 outline-none rounded-lg bg-cyan-950 text-gray-300'
            />
            <button className='py-3 bg-amber-50 w-full text-center rounded-lg active:scale-98 transition-transform duration-150 cursor-pointer text-xl font-medium lg:w-3/5'>Add Note</button>
        </form>
        <div className='lg:w-4/5 lg:h-full lg:px-5 lg:py-3'>
            <h1 className='text-4xl lg:text-5xl text-amber-50 mt-15 lg:mt-1 mb-5 text-center'>Your Notes</h1>
            <div className='flex h-full overflow-x-auto overflow-y-hidden scrollbar-hide gap-3 lg:mx-3 lg:my-7'>
                <div className='h-60 lg:h-90 w-2/3 bg-green-50 rounded-2xl flex-none'></div>
                <div className='h-60 lg:h-90 w-2/3 bg-green-50 rounded-2xl flex-none'></div>
                <div className='h-60 lg:h-90 w-2/3 bg-green-50 rounded-2xl flex-none'></div>
                <div className='h-60 lg:h-90 w-2/3 bg-green-50 rounded-2xl flex-none'></div>
                <div className='h-60 lg:h-90 w-2/3 bg-green-50 rounded-2xl flex-none'></div>
            </div>
        </div>
    </div>
  )
}

export default Note02;