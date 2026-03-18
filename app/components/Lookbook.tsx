import Image from "next/image"

export default function Lookbook(){

return(

<section id="lookbook" className="container-fashion scroll-mt-28 pt-32">

<h2 className="text-xl mb-10">
Lookbook
</h2>

<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">

<div className="relative h-[420px]">

<Image
src="/lookbook/look1.jpeg"
alt="look"
fill
className="object-cover"
/>

</div>

<div className="relative h-[420px]">

<Image
src="/lookbook/look2.jpeg"
alt="look"
fill
className="object-cover"
/>

</div>

<div className="relative h-[420px]">

<Image
src="/lookbook/look3.jpeg"
alt="look"
fill
className="object-cover"
/>

</div>

</div>

</section>

)

}