// 'use client';
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import styles from './Partners.module.scss';

// const baseLogos = ['/indigo.svg', '/goto.svg'];
// const partners = Array(3).fill(baseLogos).flat();

// const Partners = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className={styles.partners}>
//       <h2 className={styles.partners__title}>Partners</h2>
//       <div className={styles.partners__carousel}>
//         <div
//           className={styles.partners__track}
//           style={{ transform: `translateX(-${currentIndex * (120 + 40)}px)` }} // Учет gap между элементами
//         >
//           {partners.map((logo, index) => {
//             const isActive = index === currentIndex + 1;

//             return (
//               <div
//                 key={index}
//                 className={`${styles.partners__item} ${
//                   isActive ? styles.active : ''
//                 }`}
//               >
//                 <Image src={logo} alt="Partner logo" width={97} height={26} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className={styles.partners__dots}>
//         {partners.map((_, index) => (
//           <span
//             key={index}
//             className={`${styles.partners__dot} ${
//               index === currentIndex ? styles.active : ''
//             }`}
//           ></span>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Partners;

// 'use client';
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import styles from './Partners.module.scss';

// const baseLogos = ['/indigo.svg', '/goto.svg'];
// const partners = [...baseLogos, ...baseLogos, ...baseLogos];

// const Partners = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className={styles.partners}>
//       <h2 className={styles.partners__title}>Partners</h2>
//       <div className={styles.partners__carousel}>
//         <div
//           className={styles.partners__track}
//           style={{
//             transform: `translateX(-${currentIndex * 150}px)`, // Логотип уходит за край
//           }}
//         >
//           {partners.map((logo, index) => (
//             <div key={index} className={styles.partners__item}>
//               <Image
//                 src={logo}
//                 alt="Partner logo"
//                 width={97}
//                 height={26}
//                 className={styles.partners__logo}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className={styles.partners__dots}>
//         {partners.slice(0, 5).map((_, index) => (
//           <span
//             key={index}
//             className={`${styles.partners__dot} ${index === currentIndex ? styles.active : ''}`}
//           ></span>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Partners;

'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Partners.module.scss';

const baseLogos = [
  '/indigo.svg',
  '/goto.svg',
  '/indigo.svg',
  '/goto.svg',
  '/indigo.svg',
  '/goto.svg',
  '/indigo.svg',
];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % baseLogos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.partners}>
      <h2 className={styles.partners__title}>Partners</h2>
      <div className={styles.partners__carousel}>
        <div
          className={styles.partners__track}
          style={{
            transform: `translateX(-${currentIndex * 150}px)`,
          }}
        >
          {baseLogos.map((logo, index) => (
            <div key={index} className={styles.partners__item}>
              <Image
                src={logo}
                alt="Partner logo"
                width={97}
                height={26}
                className={styles.partners__logo}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.partners__dots}>
        {baseLogos.map((_, index) => (
          <span
            key={index}
            className={`${styles.partners__dot} ${index === currentIndex ? styles.active : ''}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Partners;
