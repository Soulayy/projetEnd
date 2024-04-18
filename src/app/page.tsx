'use client'
import Navbar from "./component/Navbar/Navbar"
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer";
import Carrousel from "./component/Carrousel/Courrsel"
import Sealler from  "./component/Sealler/Sealler"

export default function Home() {
  
  return (
    <main className="flex h-full w-[100%] flex-col items-center justify-center">
      <Header></Header>
      <br />
      <Navbar></Navbar>
      <div>
        <br /><br />
        <Carrousel></Carrousel>
        <br /><br />
        <div className="flex justify-center items-center textretro text-4xl pb-4">
        <h1>best-seller</h1>
        </div>
      </div>
      <div>
      </div>
      <Footer></Footer>
  
    </main>
  );
}
