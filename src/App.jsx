import React from 'react'
import Part01 from './components/Part01/Part01';
import Part02 from './components/Part02/Part02';
import Part03 from './components/Part03/Part03';

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1760891494704-bd9fabef4757?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
      intro: "A mid-level finance executive actively using digital tools enhance portfolio performance across multiple financial platforms.",
      tag: "Satisfied"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1760386367252-f8d546898566?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
      intro: "An independent shop owner exploring modern banking, improve credit access, and establish a stronger digital presence.",
      tag: "Underbanked"
    },
    {
      img: "https://images.unsplash.com/photo-1760835252185-4d5ea03a774a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
      intro: "A young professional adopting mobile-first financial services to manage savings, and access flexible loan options.",
      tag: "Underserved"
    },
    {
      img: "https://images.unsplash.com/photo-1760662347435-1c0a11fea640?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
      intro: "A senior project consultant utilizing digital payment solutions for client transactions, low transaction costs.",
      tag: "Satisfied"
    },
    {
      img: "https://images.unsplash.com/photo-1760716478282-9d72559112cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
      intro: "A freelance designer seeking efficient financial tools for international payments, expense management, and building long-term financial stability.",
      tag: "Underbanked"
    }
  ];



  return (
    <div>
      <Part01 users={users}/>
      <Part02 />
      <Part03/>
    </div>
  )
}

export default App;