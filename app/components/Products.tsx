import { products } from "../data/products"
import ProductCard from "./ProductCard"

export default function Products(){

return(

<section className="container-fashion scroll-mt-28 pt-32">

<h2 className="text-xl mb-8">
Featured Products
</h2>

<div className="grid grid-cols-4 gap-8">

{products.map((product)=>(
<ProductCard key={product.id} product={product}/>
))}

</div>

</section>

)

}