import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='h-screen w-full bg-[url("https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGp1bmdsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600")]'>
            <div className='text-center flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                <h1 className='text-6xl font-bold font-[monument] whitespace-nowrap p-13 text-white'>OOPS ! <br /> 404 | Page Not Found.</h1>
                <Link to="/"><button className='px-3 py-2 rounded-lg bg-green-700 text-white border-2 border-black text-2xl'>Back to Home</button></Link>
            </div>
        </div>
    )
}

export default NotFound