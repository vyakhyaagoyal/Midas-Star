import EmpowerSection from './components/EmpowerSection';
import Hero from './components/Hero';
import InfiniteScroll from './components/InfiniteScroll';
import Navbar from './components/Navbar';
import WhoWeAre from './components/WhoWeAre';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <InfiniteScroll/>
      <EmpowerSection/>
      <WhoWeAre/>
      <Testimonials/>
    </main>
  );
}
