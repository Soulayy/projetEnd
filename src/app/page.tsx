'use client'
import Navbar from "./component/Navbar/Navbar"
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer";
import Carrousel from "./component/Carrousel/Courrsel"

export default function Home() {
  
  return (
    <main className="flex h-full w-[100%] flex-col items-center justify-center">
      <Header></Header>
      <br />
      <Navbar></Navbar>
      <div className="h-[600px]">
        <br /><br />
        <Carrousel></Carrousel>
      </div>
      <div>
      </div>
      <Footer></Footer>
  
    </main>
  );
}
