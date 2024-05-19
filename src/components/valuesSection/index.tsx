import React from 'react';
import Image from 'next/image';
import styles from './valuesSection.module.scss';
import TrophyIcon from './assets/trophy.svg';
import LampIcon from './assets/lamp.svg';
import ShieldIcon from './assets/shield.svg';
import SmileIcon from './assets/smile.svg';

const ValuesSection: React.FC = () => {
  const values = [
    {
      title: 'Qualidade',
      description: 'Oferecemos excelência em cada projeto realizado.',
      icon: TrophyIcon,
    },
    {
      title: 'Elegância',
      description: 'Soluções inovadoras para cada necessidade.',
      icon: LampIcon,
    },
    {
      title: 'Comprometimento',
      description: 'Agimos com transparência, ética e honestidade.',
      icon: ShieldIcon,
    },
    {
      title: 'Satisfação',
      description: 'Resultados que superam expectativas.',
      icon: SmileIcon,
    },
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <Image
            src="/assets/values.jpg"
            alt="Furniture"
            width={640}
            height={480}
            priority={false}
            objectFit={'cover'}
            className={styles.image}
          />
        </div>
        <div className={styles.textSection}>
          <h2>Soluções que transcendem o funcional</h2>
          <p>
            Com mais de 10 anos de história no mercado moveleiro, buscamos
            atender a essência de cada cliente.
          </p>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueItem}>
                <value.icon width="30" height="30" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
