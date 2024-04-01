import React from 'react'
import Navbar from '../component/Navbar/Navbar';
import Header from "./../component/Header/Header"
import Link from "next/link";


const UsersPage = async () => {
   const res = await fetch("https:/www.freetogame.com/api/games")
   const heroes = await res.json()
    
   return (


        <div className="caca flex h-full w-full flex-col items-center justify-between">
            <br />
            <Navbar/>

            <div className=" w-[100%] flex flex-col m-6">
                <p className="textretro text-4xl text-center">JEUX</p>
                <div className="w-[100%] flex flex-wrap items-center justify-center mt-4 gap-5">
                {
                    heroes.slice(0, 36).map((element:any, key:number) => {
                        return(
                            <Link href={`/Games/${key}`}  key={key} className="shadow-md shadow-purple-600 w-[20%] h-[200px] border-[2px] border-black rounded-md flex flex-col justify-center items-center hover:scale-110 hover:bg-black hover:text-white transition">
                                <p className="text-xl font-light textretro">{element.title}</p>
                                <img className="h-[80%]" src={element.thumbnail} alt="" />
                            </Link>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}



export default UsersPage