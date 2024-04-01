import React from 'react'
import Link from 'next/link'



async function getCards() {
    const res = await fetch("https:/www.freetogame.com/api/games")

    return res.json()
}

type Props ={
    params:{id:number}
}

export default async function cardDetail({params}:Props) {


    const cards =  await getCards()
    const card = cards
    const id = params.id

    

  return (
    <div className='w-[100%] h-screen bg-red-200 flex flex-col gap-14'>
        <Link href={"/Games"}> Back </Link>
        <div className='w-[100%] flex justify-center items-center gap-9'>
            <p>Details</p>
            <p>{id}</p>
        </div>

        <div className='flex justify-around items-center'>
            <p>{card[id].title}</p>
            <img src={card[id].image} alt="" />
        </div>

    </div>
  )
}