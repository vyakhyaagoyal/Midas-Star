import EmpowerSection from './components/EmpowerSection';
import Hero from './components/Hero';
import InfiniteScroll from './components/InfiniteScroll';
import WhoWeAre from './components/WhoWeAre';
import Testimonials from './components/Testimonials';
import WhyMidasStar from './components/WhyMidasStar';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <main>
      <Hero/>
      <InfiniteScroll/>
      <EmpowerSection/>
      <WhoWeAre/>
      <Testimonials/>
      <WhyMidasStar/>
      <CTASection/>
    </main>
  );
}
