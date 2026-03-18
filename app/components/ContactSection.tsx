import { FaWhatsapp, FaInstagram } from "react-icons/fa"

export default function ContactSection(){

return(

<section id="contact" className="container-fashion scroll-mt-28 pt-32 py-15">

<div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-12">

{/* LEFT SIDE */}

<div>

<h2 className="text-2xl mb-6">
Contact Us
</h2>

<p className="text-gray-600 mb-8">
Reach us through WhatsApp or Instagram for orders and inquiries.
</p>

<p className="text-1xl mb-6">
Monday - Saturday
</p>

<div className="flex flex-col gap-4">

<a
href="https://wa.me/918075503729"
target="_blank"
className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 w-fit"
>
<FaWhatsapp/>
Chat on WhatsApp
</a>

<a
href="https://instagram.com/anakme.collections?igsh=amhob3ZiN2J1Y3Nh"
target="_blank"
className="flex items-center gap-3 bg-pink-500 text-white px-6 py-3 w-fit"
>
<FaInstagram/>
Follow on Instagram
</a>

</div>

</div>

{/* RIGHT SIDE */}

<div>

<h3 className="text-lg mb-4">
Visit Our Store
</h3>

<div className="w-full h-[300px]">

<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.61806224389866!2d76.37331505136314!3d9.943193171922799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087484ad12056d%3A0xb44fff667a00850f!2sThiruvankulam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1773563878883!5m2!1sen!2sin"
width="100%"
height="100%"
style={{ border: 0 }}
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
className="rounded-lg"
/>

</div>

</div>

</div>

</section>

)

}