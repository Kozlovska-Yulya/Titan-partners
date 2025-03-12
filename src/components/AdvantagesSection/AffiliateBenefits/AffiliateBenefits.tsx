// import React from 'react';
// import styles from './AffiliateBenefits.module.scss';
// import Image from 'next/image';

// const benefits = [
//   { icon: '/exclusive.svg', text: 'Exclusive offers' },
//   { icon: '/support.svg', text: 'Individual support' },
//   {
//     icon: '/payment.svg',
//     text: 'Payment schedules iOS, Android, APK, PWA Apps',
//   },
//   { icon: '/media.svg', text: 'Media support' },
//   { icon: '/infrastructure.svg', text: 'Infrastructure for work' },
//   { icon: '/discount.svg', text: 'Discount for tools & services' },
// ];

// const AffiliateBenefits = () => {
//   return (
//     <div className={styles.affiliateBenefits}>
//       <h3 className={styles.affiliateBenefits__title}>For Affiliates</h3>
//       <ul className={styles.affiliateBenefits__list}>
//         {benefits.map((benefit, index) => (
//           <li key={index} className={styles.affiliateBenefits__item}>
//             <Image
//               src={benefit.icon}
//               alt=""
//               width={25}
//               height={25}
//               className={styles.affiliateBenefits__icon}
//             />
//             <span className={styles.affiliateBenefits__text}>
//               {benefit.text}
//             </span>
//             <Image
//               src="/arrow.svg"
//               alt="Arrow"
//               width={14}
//               height={14}
//               className={styles.affiliateBenefits__arrow}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AffiliateBenefits;

import React from 'react';
import styles from './AffiliateBenefits.module.scss';
import Image from 'next/image';

const benefits = [
  { icon: '/exclusive.svg', text: 'Exclusive offers' },
  { icon: '/support.svg', text: 'Individual support' },
  {
    icon: '/payment.svg',
    text: 'Payment schedules iOS, Android, APK, PWA Apps',
  },
  { icon: '/media.svg', text: 'Media support' },
  { icon: '/infrastructure.svg', text: 'Infrastructure for work' },
  { icon: '/discount.svg', text: 'Discount for tools & services' },
];

const AffiliateBenefits = () => {
  return (
    <section id="for-affiliates" className={styles.affiliateBenefits}>
      <h3 className={styles.affiliateBenefits__title}>For Affiliates</h3>
      <ul className={styles.affiliateBenefits__list}>
        {benefits.map((benefit, index) => (
          <li key={index} className={styles.affiliateBenefits__item}>
            <Image
              src={benefit.icon}
              alt=""
              width={25}
              height={25}
              className={styles.affiliateBenefits__icon}
            />
            <span className={styles.affiliateBenefits__text}>
              {benefit.text}
            </span>
            <Image
              src="/arrow.svg"
              alt="Arrow"
              width={14}
              height={14}
              className={styles.affiliateBenefits__arrow}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AffiliateBenefits;
