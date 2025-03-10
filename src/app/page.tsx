import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection/AdvantagesSection';
import GeoMap from '@/components/GeoMap/GeoMap';
import MediaBuying from '@/components/MediaBuying/MediaBuying';
import Stats from '@/components/Stats/Stats';
import Agency from '@/components/Agency/Agency';

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

      <div className="fourthBlock">
        <MediaBuying />
      </div>
      <div className="fifthBlock">
        <Stats />
        <Agency />
      </div>
    </>
  );
}
