'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import "./Courrsel.css"

import Red from "./../../../../public/image/1.png"
import Star from "./../../../../public/image/2.png"
import Metr from "./../../../../public/image/3.png"
import Fabl from "./../../../../public/image/4.png"
import Hori from "./../../../../public/image/5.png"
import Image from 'next/image'

export default function Courrsel() {

    const carrousel = [Red, Star, Metr, Fabl, Hori]
    const [index, setIndex] = useState(0)
    
    const indexPLus = ()=> {
        setTimeout(() => {
            if (index < 4) {
                setIndex(index+1)
            } else {
                setIndex(0)
            }
        }, 5000); 
    }
    useEffect(() => {
        indexPLus() 
    }, [index])

  return (

    <div className=' h-[450px] w-[550px] flex justify-center items-center flex-col gap-3'>
        {/* <Link href={"/prochainessorties"}>sss</Link> */}
        <div class="card">
        <div class="card__content">
        <Image className='ease-in-out transition-[2s] rounded-xl' src={carrousel[index]} alt=''></Image>
        </div>
        </div>
        <div className="textretro join gap-3">
            <Link href={"http://localhost:3000/Games/2"} onClick={() => setIndex(0)}>1</Link>
            <button onClick={() => setIndex(1)}>2</button>
            <button onClick={() => setIndex(2)}>3</button>
            <button onClick={() => setIndex(3)}>4</button>
            <button onClick={() => setIndex(4)}>5</button>
        </div>  
    </div>
  )
}