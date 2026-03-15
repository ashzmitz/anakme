import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import Products from "./components/Products"
import Lookbook from "./components/Lookbook"
import Contact from "./components/ContactSection"
import Footer from "./components/Footer"
import Reveal from "./components/Reveal"

export default function Home(){

return(

<main>

<Navbar/>

<section id="home">
<Hero/>
</section>

<section id="shop">
<Reveal>
<Products/>
</Reveal>
</section>

<section id="lookbook">
<Lookbook/>
</section>

<section id="contact">
<Contact/>
</section>

<Footer/>

</main>

)

}