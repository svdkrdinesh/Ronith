import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <Clients />
      <FAQ />
    </main>
  );
}

export default Home;