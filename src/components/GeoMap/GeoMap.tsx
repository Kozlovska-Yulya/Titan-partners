'use client';
import React, { useState } from 'react';
import styles from './GeoMap.module.scss';
import Image from 'next/image';

const GeoMap = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <div className={styles.geoMap}>
      <h3 className={styles.geoMap__title}>160+ GEO’s</h3>
      <div className={styles.geoMap__container}>
        <svg
          className={styles.geoMap__image}
          viewBox="0 0 800 450"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Фоновая карта (темно-серая) */}
          <image href="/map1.svg" width="100%" height="100%" />

          {/* Навешиваем события на регионы */}
          <g
            onMouseEnter={(e) => setActiveRegion(e.currentTarget.id)}
            onMouseLeave={() => setActiveRegion(null)}
          >
            <use href="/Map.svg#ecuador" className={styles.geoMap__region} />
            <use href="/Map.svg#colombia" className={styles.geoMap__region} />
            <use href="/Map.svg#peru" className={styles.geoMap__region} />
            <use href="/Map.svg#brazil" className={styles.geoMap__region} />
            <use href="/Map.svg#chile" className={styles.geoMap__region} />
            <use href="/Map.svg#argentina" className={styles.geoMap__region} />
          </g>
        </svg>
      </div>

      {/* Блок с информацией о регионе */}
      {activeRegion && (
        <div className={styles.geoMap__info}>{activeRegion}</div>
      )}
    </div>
  );
};

export default GeoMap;
