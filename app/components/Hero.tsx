import Image from "next/image"

export default function HeroSplit(){

return(

<section id="home" className="h-screen grid md:grid-cols-2">

{/* LEFT SIDE */}

<div className="flex items-center justify-center px-12">

<div>

<h1 className="text-5xl md:text-6xl font-semibold mb-6 text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
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

</section>

)

}