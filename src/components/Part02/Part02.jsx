import React from 'react'
import Note01 from './Note01';
import Note02 from './Note02';
import axios from 'axios';
import API01 from './API01';
import UseEff from './UseEff';

const Part02 = () => {

  // function getAPI(){
  //   let res = fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   res
  //   .then((raw)=>raw.json())
  //   .then((read)=>{
  //     setTimeout(()=>{                                    // using promise
  //       console.log(read);
  //     },2 * 1000);
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   });
  // }
  
  // async function getAPI(){
  //   let res = await fetch("https://jsonplaceholder.typicode.com/posts");       // using async-await
  //   let data = await res.json();
  //   console.log(data);
  // }

  // const getAPI = async ()=>{
  //   let response = await axios.get("https://picsum.photos/v2/list");     // using axios
  //   console.log(response);
  // }


  return (
    <div className='h-screen w-full bg-blue-950 px-10 py-5 overflow-auto scrollbar-hide'>
      <Note01/>
      <Note02/>
      <API01/>
      <UseEff/>
    </div>
  )
}

export default Part02;