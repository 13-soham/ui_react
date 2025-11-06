import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
  let val = useParams();
  const navi = useNavigate();

  function back() {
    navi(-1); // 👈 Go back one step in history
  }

  return (
    <div className='h-screen w-full bg-black text-white flex flex-col gap-5 items-center justify-center'>
      <button 
        onClick={back} 
        className='px-5 py-2 bg-red-700 rounded-lg hover:bg-red-600 transition cursor-pointer active:scale-95'
      >
        Back
      </button>
      <h1 className='text-4xl font-bold'>Detail page about {val.id}</h1>
    </div>
  )
}

export default Detail;
