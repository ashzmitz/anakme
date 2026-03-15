import Image from "next/image"

export default function ProductCard({product}:any){

return(

<div className="group cursor-pointer flex flex-col">

<div className="relative w-full h-[350px] overflow-hidden">

<Image
src={product.image1}
alt={product.name}
fill
className="object-cover transition-opacity duration-500 group-hover:opacity-0"
/>

<Image
src={product.image2}
alt={product.name}
fill
className="object-cover transition-all duration-500 group-hover:scale-130"
/>

</div>

<div className="flex flex-col flex-grow mt-3">

<p className="text-sm">
{product.name}
</p>

<div className="mt-auto text-gray-500">
<a href="#contact">₹{product.price}</a>
</div>

</div>

</div>

)

}