import EmpowerSection from './components/EmpowerSection';
import Hero from './components/Hero';
import InfiniteScroll from './components/InfiniteScroll';
import Navbar from './components/Navbar';
import WhoWeAre from './components/WhoWeAre';
import Testimonials from './components/Testimonials';
import WhyMidasStar from './components/WhyMidasStar';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <InfiniteScroll/>
      <EmpowerSection/>
      <WhoWeAre/>
      <Testimonials/>
      <WhyMidasStar/>
      <CTASection/>
      <Footer/>
    </main>
  );
}
