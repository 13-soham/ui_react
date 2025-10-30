import React, { useEffect, useState } from 'react'

const UseEff = () => {
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);

    function changeA(){
        console.log("A is changing...");
    }
    function changeB(){
        console.log("B is changing...");
    }

    // useEffect(function (){
    //     console.log("useEffect is running...");      // log after both button clicking
    // });  

    // useEffect(function (){
    //     console.log("useEffect is running...");      // log after only A button clicking
    // },[A]);

    useEffect(function (){
        console.log("useEffect is running...");      // log after only B button clicking
    },[B]);

    return (
      // UseEffect-Hook → it is a React hook that synchronize a component with an external system.
    <div>
        <h1 className='text-5xl text-amber-100 py-2'>set a : {A}</h1>
        <h1 className='text-5xl text-amber-100 py-2 mb-1'>set b : {B}</h1>
        <button onClick={()=>{
            setA(A+1);
        }} className='px-4 py-3 bg-amber-950 border-2 border-black rounded-lg active:scale-95 transition-transform duration-150 cursor-pointer text-amber-50 mx-2'>A</button>
        <button onClick={()=>{
            setB(B+1);
        }} className='px-4 py-3 bg-amber-600 border-2 border-black rounded-lg active:scale-95 transition-transform duration-150 cursor-pointer'>B</button>
    </div>
  )
}

export default UseEff;