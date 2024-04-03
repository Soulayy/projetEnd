import React from 'react'
import HeaderLogo from "./../../../../public/image/support-technique.gif"
import GradientH from "./../../../../public/image/HeaderF.png"


const Header = () => {
  
  return (
    <div style={{backgroundImage : `url(${GradientH.src})`}} className="bg-no-repeat h-[100px] w-screen flex justify-center items-center">
        <div className="w-[50%] flex justify-center items-center gap-3">
          <img className="h-[50px] rounded-2xl" src={HeaderLogo.src} alt="" />
          <div className='text-white'>
            <p>SUPPORT <span className='text-red-600 italic font-bold' >24 <span className='text-white'>/</span> 7</span></p>
            <p>+32 490 43 76 33</p>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
            <p className='textretro text-3xl text-white italic'>
                choisissez votre nouveau monde
            </p>
        </div>   
      </div>
  )
}

export default Header