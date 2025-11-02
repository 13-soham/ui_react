import axios from 'axios'
import React, { useState } from 'react'

const Part03 = () => {
  const [UserData, setUserData] = useState([]);

  let getData = async () => {
    let response = await axios.get("https://picsum.photos/v2/list?page=2&limit=15");

    // console.log(response.data);
    setUserData(response.data);
    console.log(UserData);
  }

  let printUserData = "No User Available";
  if(UserData.length > 0){
    printUserData = UserData.map((elem, idx)=>{
      return <div key={idx}>
        <img src={elem.download_url} 
          alt=""
          className="w-50 h-50 object-cover rounded-md" 
        />
      </div>
    });
  }
  return (
    <div className='h-screen w-full bg-lime-900 px-10 py-5 overflow-auto scrollbar-hide text-white'>
      <button onClick={() => {
        getData();
      }} className='px-4 py-3 bg-amber-300 border-2 border-black rounded-lg active:scale-95 transition-transform duration-150 cursor-pointer text-black'>Click here to get data</button>
      <div className='flex flex-wrap gap-2'>
        {printUserData}
      </div>
    </div>
  )
}

export default Part03;