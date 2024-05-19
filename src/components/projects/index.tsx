import React from 'react';
import Image from 'next/image';
import styles from './projectsSection.module.scss';

const projects = [
  {
    title: 'Comercial',
    image: '/assets/project1.jpg',
  },
  {
    title: 'Residencial',
    image: '/assets/project2.jpg',
  },
  {
    title: 'Externo',
    image: '/assets/project3.jpg',
  },
  {
    title: 'Decoração',
    image: '/assets/project4.jpg',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <h2>Projetos</h2>
        <p>
          Criamos projetos de móveis e decoração para atender às suas
          necessidades, transformando ideias em realidade, seja em ambientes
          comerciais, externos ou residenciais.
        </p>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectItem}>
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className={styles.projectImage}
              />
              <div className={styles.projectTitle}>{project.title}</div>
            </div>
          ))}
        </div>
        <button className={styles.viewProjectsButton}>Conferir projetos</button>
      </div>
    </section>
  );
};

export default ProjectsSection;
