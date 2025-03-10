import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection/AdvantagesSection';
import GeoMap from '@/components/GeoMap/GeoMap';
import MediaBuying from '@/components/MediaBuying/MediaBuying';

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

      <div className="fourBlock">
        <MediaBuying />
      </div>
    </>
  );
}
