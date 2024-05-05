// src/components/Menu.tsx
import React, { useState } from 'react';
import ActiveLink from './activeLink';
import { useRouter } from 'next/router';
import styles from './menu.module.scss';
import Link from 'next/link';
import Logo from '../../assets/logo.svg';
import Image from 'next/image';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={Logo} alt="Dilegno logo" />
          </Link>
        </div>
        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <ActiveLink
            href="/"
            activeClassName={styles.active}
            className={styles.nav_link}
          >
            Home
          </ActiveLink>
          <ActiveLink
            className={styles.nav_link}
            href="/sobre-nos"
            activeClassName={styles.active}
          >
            Sobre nós
          </ActiveLink>
          <ActiveLink
            className={styles.nav_link}
            href="/projetos"
            activeClassName={styles.active}
          >
            Projetos
          </ActiveLink>
          <ActiveLink
            className={styles.nav_link}
            href="/contato"
            activeClassName={styles.active}
          >
            Contato
          </ActiveLink>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
