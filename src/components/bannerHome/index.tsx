// src/components/Banner.tsx
import React from 'react';
import styles from './bannerHome.module.scss';

const BannerHome: React.FC = () => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(/assets/banner_home.jpg)` }}
    >
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>
            Consultoria em móveis e decorações para projetos corporativos e
            residenciais
          </h2>
          <button className={styles.button}>Sobre nós</button>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
