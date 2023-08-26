
import CofeeDesc from "./components/CofeeDesc";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <main className="">
       
      <Hero />
      <Products />
      <CofeeDesc />
      <Testimonials />
      <Posts />

    </main>
  )
}
