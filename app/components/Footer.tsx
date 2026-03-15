import { FaInstagram, FaWhatsapp, FaMapMarkerAlt  } from "react-icons/fa"

export default function Footer(){

return(

<footer className="container-fashion">
<div className="border-t border-gray-800 text-center text-sm text-gray-400"></div>
<div className="max-w-7xl mx-auto px-12 py-16 grid grid-cols-4 gap-12">

{/* BRAND */}

<div>

<h2 className="text-xl mb-4 text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
ANAK-ME Fashion
</h2>

<p className="text-gray-400 text-sm">
Minimal fashion for modern lifestyle.
Timeless style and premium quality.
</p>
<br></br>
<FaMapMarkerAlt className="text-red-500 py-0.5"/>
<p className="text-gray-400 text-sm">
Thiruvamkulam Siva Temple Road -
Near Thiruvamkulam Junction
Thrippunithura, Kerala 682305
</p>

</div>

{/* SHOP */}

<div>

<h3 className="mb-4 font-semibold">
Shop
</h3>

<ul className="space-y-2 text-gray-400 text-sm">

<li><a href="#home">Women</a></li>
<li><a href="#shop">New Arrivals</a></li>

</ul>

</div>

{/* SUPPORT */}

<div>

<h3 className="mb-4 font-semibold">
Support
</h3>

<ul className="space-y-2 text-gray-400 text-sm">

<li>
    <a href="https://wa.me/918075503729" target="_blank"> Contact</a>
</li>
<li>
    <a href="mailto:anakme08@gmail.com" target="_blank"> Shipping</a>
</li>
<li>
    <a href="mailto:anakme08@gmail.com" target="_blank"> Returns</a>
</li>
<li>
    <a href="mailto:anakme08@gmail.com" target="_blank"> FAQ</a>
</li>

</ul>

</div>

{/* SOCIAL */}

<div>

<h3 className="mb-4 font-semibold">
Follow Us
</h3>

<div className="flex gap-4 text-2xl">

<a
href="https://instagram.com/anakme.collections?igsh=amhob3ZiN2J1Y3Nh"
target="_blank"
>
<FaInstagram/>
</a>

<a
href="https://wa.me/918075503729"
target="_blank"
>
<FaWhatsapp/>
</a>

</div>

</div>

</div>

{/* Bottom Bar */}

<div className="border-t border-gray-800 text-center py-6 text-sm text-gray-400">

© {new Date().getFullYear()} Anak-me Fashion. All rights reserved.

</div>

</footer>

)

}