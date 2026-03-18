"use client"

import { useEffect, useState } from "react"

export default function Navbar(){

const [scrolled,setScrolled] = useState(false)

useEffect(()=>{

const handleScroll = () =>{
setScrolled(window.scrollY > 50)
}

window.addEventListener("scroll",handleScroll)

return ()=> window.removeEventListener("scroll",handleScroll)

},[])

return(

<header
className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
${scrolled ? "bg-white/80 backdrop-blur-md shadow text-black" : "bg-transparent text-white"}`}
>

<div className="max-w-7xl mx-auto px-10 py-5 flex justify-between items-center">

<div className="font-semibold text-xl text-[#C9A227] flex justify-between items-center">
<a href="#home">ANAK-ME</a>
</div>

<nav className="hidden mdflex gap-8 text-sm">

<a href="#home">Home</a>

<a href="#shop">Shop</a>

<a href="#lookbook">Lookbook</a>

<a href="#contact">Contact</a>

</nav>

<div className="md:hidden">
☰
</div>

</div>

</header>

)

}