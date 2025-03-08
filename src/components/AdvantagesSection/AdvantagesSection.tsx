import React from 'react';
import styles from './AdvantagesSection.module.scss';
import AdvantagesTitle from './AdvantagesTitle/AdvantagesTitle';
import AdvantagesImage1 from './AdvantagesImage1/AdvantagesImage1';
import AdvantagesImage2 from './AdvantagesImage2/AdvantagesImage2';
import AffiliateBenefits from './AffiliateBenefits/AffiliateBenefits';
import AdvertiserBenefits from './AdvertiserBenefits/AdvertiserBenefits';

const AdvantagesSection = () => {
  return (
    <section className={styles.advantagesSection}>
      <AdvantagesTitle />
      <AdvantagesImage1 />
      <AffiliateBenefits />
      <AdvantagesImage2 />
      <AdvertiserBenefits />
    </section>
  );
};

export default AdvantagesSection;
