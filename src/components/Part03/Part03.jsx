import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card03_01 from './Card03_01';

const Part03 = () => {
  const [UserData, setUserData] = useState([]);
  const [index, setindex] = useState(1)

  let getData = async () => {
    let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);

    // console.log(response.data);
    setUserData(response.data);
    // console.log(UserData);
  }

  useEffect(function(){
    getData();
  },[index])

  let printUserData = <h2 className='text-4xl text-gray-200 m-5'>Loading...</h2>
  if (UserData.length > 0) {
    printUserData = UserData.map((elem, idx) => {
      return <div key={idx}>
        <Card03_01 elem={elem}/>
      </div>
    });
  }

  return (
    <div className='h-screen w-full bg-black px-10 py-5 overflow-auto scrollbar-hide text-white'>
      <h1 className='sticky top-3 mb-5 bg-transparent text-4xl text-white p-3 rounded-full z-30 text-center backdrop-blur-md shadow-lg border border-white/30'>page no : {index}</h1>
      <div className='flex flex-wrap overflow-x-auto gap-5'>
        {printUserData}
      </div>
      <div className='flex items-center justify-center gap-3 mt-3'>
        <button className='px-3 py-2 bg-amber-400 font-bold text-sm text-black rounded-lg border-2 border-black cursor-pointer active:scale-95 transition-transform duration-150' 
          onClick={()=>{
            if(index > 1){
              setindex(index-1);
              setUserData([]);
            }
          }}>Prev</button>
        <button className='px-3 py-2 bg-amber-400 font-bold text-sm text-black rounded-lg border-2 border-black cursor-pointer active:scale-95 transition-transform duration-150' 
          onClick={()=>{
            setindex(index+1);
            setUserData([]);
          }}>Next</button>
      </div>
    </div>
  )
}

export default Part03;