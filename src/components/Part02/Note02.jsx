import React, { useState } from 'react'

const Note02 = () => {
    const [Heading, setHeading] = useState("");
    const [Details, setDetails] = useState("");
    const [Output, setOutput] = useState([]);

    let submitHandler = (e) => {
        e.preventDefault();
        // console.log(Heading , Details);

        setOutput([...Output, {Heading, Details}]);

        setHeading("");
        setDetails("");
    }

    let deleteTask = (idx)=>{
        let val = [...Output];
        
        val.splice(idx, 1);

        setOutput(val);
    }

    return (
        <div className='px-5 py-7 mt-3 flex flex-col lg:flex-row lg:items-start lg:justify-between'>
            <form
                onSubmit={(e) => submitHandler(e)}
                className='flex flex-col justify-between gap-3 lg:w-4/7 lg:py-9'

            >
                <input
                    value={Heading}
                    type="text"
                    placeholder='Enter Heading'
                    className='px-3 py-4 border-2 w-full lg:w-3/5 border-amber-100 outline-none text-amber-50 rounded-lg font-medium'
                    onChange={(e)=>setHeading(e.target.value)}
                />
                <textarea
                    value={Details}
                    type="text"
                    placeholder='Write details'
                    className='h-40 lg:h-80 px-3 py-5 border w-full lg:w-3/5 border-amber-100 outline-none rounded-lg bg-cyan-950 text-gray-300'
                    onChange={(e)=>setDetails(e.target.value)}
                />
                <button className='py-3 bg-amber-50 w-full text-center rounded-lg active:scale-98 active:bg-gray-200 transition-all duration-150 cursor-pointer text-xl font-medium lg:w-3/5'>Add Note</button>
            </form>
            <div className='w-full lg:w-3/7 lg:h-full lg:px-5 lg:py-3'>
                <h1 className='text-4xl lg:text-5xl text-amber-50 mt-15 lg:mt-1 mb-5 text-center'>Your Notes</h1>
                <div className='flex h-full overflow-x-auto overflow-y-hidden scrollbar-hide gap-3 lg:mx-3 lg:my-7 text-amber-50'>
                    {Output.map((elem, idx)=>{
                        return <div key={idx} className='relative h-60 lg:h-90 w-2/3 bg-[url("https://i.pinimg.com/736x/8a/83/23/8a832317c495c9c8072d238469ecc808.jpg")] overflow-y-auto scrollbar-hide rounded-2xl flex-none'>
                            <h2 onClick={()=>{
                                deleteTask(idx)
                            }}>
                                <i className="absolute ri-close-line text-3xl text-red-700 top-1 right-3 cursor-pointer active:scale-90 transistion-transform duration-150"></i>
                            </h2>
                            <h3 className='text-blue-950 text-4xl py-7 text-center font-bold'>{elem.Heading}</h3>
                            <p className='text-gray-700 text-xl font-medium px-5 py-2 '>{elem.Details}</p>
                        </div>;
                    })}
                </div>
            </div>
        </div>
    )
}

export default Note02;