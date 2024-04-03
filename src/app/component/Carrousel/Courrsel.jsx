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
 
    <div className='max-w-screen-md mx-auto flex flex-col justify-center items-center gap-3'>
    <div className="card">
      <div className="card__content">
        <Image className='ease-in-out transition-[2s] rounded-xl' src={carrousel[index]} alt='' width={550} height={450} />
      </div>
    </div>
    <div className="textretro flex gap-3">
      <Link href={"http://localhost:3000/Games/2"} onClick={() => setIndex(0)}>1</Link>
      <Link href={"http://localhost:3000/Games/3"} onClick={() => setIndex(1)}>2</Link>
      <Link href={"http://localhost:3000/Games/4"} onClick={() => setIndex(2)}>3</Link>
      <Link href={"http://localhost:3000/Games/5"} onClick={() => setIndex(3)}>4</Link>
      <Link href={"http://localhost:3000/Games/6"} onClick={() => setIndex(4)}>5</Link>
    </div>
    
    <p className='textretro'>Prochaines sorties</p>
  </div>
  )
}