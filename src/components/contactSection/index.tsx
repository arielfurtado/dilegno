import React from 'react';
import Image from 'next/image';
import WhatsAppIcon from '../assets-shared/whatsapp.svg';
import InstagramIcon from '../assets-shared/instagram.svg';
import MailIcon from '../assets-shared/mail.svg';
import styles from './contactSection.module.scss';
import Link from 'next/link';

const ContactSection: React.FC = () => {
  return (
    <section
      className={styles.contactSection}
      style={{ backgroundImage: `url(/assets/contactSection.jpg)` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2>Contato</h2>
        <p>Mande uma mensagem para tirar dúvidas ou pedir um orçamento.</p>
        <div className={styles.contactInfo}>
          <Link
            href="https://wa.me/5521987654321"
            target="_blank"
            className={styles.contactItem}
          >
            <WhatsAppIcon className={styles.icon} />
            <span>21 98765-4321</span>
          </Link>
          <Link
            href="https://www.instagram.com/moveisdilegno/"
            target="_blank"
            className={styles.contactItem}
          >
            <InstagramIcon className={styles.icon} />
            <span>@moveisdilegno</span>
          </Link>
          <Link
            href="mailto:moveisdilegno@gmail.com"
            target="_blank"
            className={styles.contactItem}
          >
            <MailIcon className={styles.icon} />
            <span>moveisdilegno@gmail.com</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
