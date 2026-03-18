import Image from "next/image"

export default function HeroSplit(){

return(

<section id="home" className="h-screen">

{/* ================= MOBILE HERO ================= */}
<div className="relative w-full h-screen md:hidden">

<Image
src="/model.jpeg"
alt="fashion model"
fill
priority
className="object-cover"
/>

{/* DARK OVERLAY */}
<div className="absolute inset-0 bg-black/50"></div>

{/* TEXT OVER IMAGE */}
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">

<h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
ANAK-ME Fashion
</h1>

<p className="text-white text-sm mb-6 max-w-xs">
Minimal fashion designed for modern lifestyle.
</p>

<a href="#shop">
<button className="bg-white text-black px-6 py-3 text-sm">
Shop Now
</button>
</a>

</div>

</div>

{/* ================= DESKTOP HERO ================= */}
<div className="hidden md:grid grid-cols-2 h-screen">

{/* LEFT SIDE */}
<div className="flex items-center justify-center px-12">

<div>

<h1 className="text-6xl font-semibold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
ANAK-ME Fashion
</h1>

<p className="text-gray-600 mb-8 max-w-md">
Minimal fashion designed for modern lifestyle.
Timeless pieces made with premium fabrics.
</p>

<a href="#shop">
<button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition">
Shop Now
</button>
</a>

</div>

</div>

{/* RIGHT SIDE */}
<div className="relative w-full h-full">

<Image
src="/model.jpeg"
alt="fashion model"
fill
priority
className="object-cover"
/>

</div>

</div>

</section>

)
}