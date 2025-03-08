'use client';

import React, { useState } from 'react';
import styles from './GeoMap.module.scss';

const regions = [
  { id: 'ecuador', name: 'Ecuador' },
  { id: 'colombia', name: 'Colombia' },
  { id: 'peru', name: 'Peru' },
  { id: 'brazil', name: 'Brazil' },
  { id: 'chile', name: 'Chile' },
  { id: 'argentina', name: 'Argentina' },
];

const GeoMap = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <div className={styles.geoMap}>
      <h2 className={styles.geoMap__title}>160+ GEO’s</h2>
      <div className={styles.geoMap__container}>
        <svg
          className={styles.geoMap__svg}
          viewBox="0 0 800 450"
          xmlns="http://www.w3.org/2000/svg"
        >
          {regions.map((region) => (
            <path
              key={region.id}
              id={region.id}
              d="..." // Вставить координаты конкретной страны
              className={`${styles.geoMap__region} ${
                activeRegion === region.id ? styles.geoMap__region_active : ''
              }`}
              onMouseEnter={() => setActiveRegion(region.id)}
              onMouseLeave={() => setActiveRegion(null)}
            />
          ))}
        </svg>

        {activeRegion && (
          <div className={styles.geoMap__info}>
            <p>{regions.find((r) => r.id === activeRegion)?.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeoMap;
