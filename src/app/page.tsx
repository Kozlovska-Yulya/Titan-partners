import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection/AdvantagesSection';
import GeoMap from '@/components/GeoMap/GeoMap';

export default function Home() {
  return (
    <>
      <div className="firstBlock">
        <Header />
        <HeroSection />
      </div>

      <div className="secondBlock">
        <AdvantagesSection />
      </div>

      <div className="thirdBlock">
        <GeoMap />
      </div>
    </>
  );
}
