import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Counter from "./Counter";
import Portfolio from "./Portfolio";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Contact from "./Contact";
import { useDispatch } from "react-redux";
import { getAboutme } from "./Redux/aboutmeCrud";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getAboutme())
  },[])

    return(
        <main id="main">
        <Hero/>
        <About />
        <Services />
        <Counter />
        <Portfolio />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
    )
}
export default Home