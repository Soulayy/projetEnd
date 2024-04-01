
'use client'
import React from "react";
import Link from "next/link";
import Logo from "./../../../../public/image/Soul-mate-Logo.png"
const Footer = () => {

  return (
    <div className="footer bg-no-repeat h-[680px] w-[100%] flex-col flex justify-center items-center bg-[#2A2826]">
        <br />
        <br />
        <div className="w-[20%] h-[100%] flex justify-center items-center">
          <img className="h-[100%]" src={Logo.src} alt="logo Soul-Mate" />
        </div>
        <div className="w-[50%] h-[50%] flex justify-around items-center text-center">
            <Link className="btn" href={"/"}>Home</Link>
            <Link className="btn" href={"/Games"}>Jeux</Link>
            <Link className="btn" href={""} > Prochaines Sorties</Link>
            <Link className="btn" href={""} > About us</Link>
        </div>
        <div className="w-[20%] flex justify-center items-center bg-purple-500">
          
        </div>
       
      </div>
  )
}

export default Footer
