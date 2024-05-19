import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './footer.module.scss';
import Image from 'next/image';
import WhatsAppIcon from '../assets-shared/whatsapp.svg';
import InstagramIcon from '../assets-shared/instagram.svg';
import MailIcon from '../assets-shared/mail.svg';
import Link from 'next/link';

type FormData = {
  email: string;
};

const Footer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.logoSection}>
          <Image
            src="/assets/logo.svg"
            alt="Dilegno logo"
            width="130"
            height="25"
            priority={false}
          />
        </div>
        <div className={styles.wrap}>
          <div className={styles.aboutSection}>
            <p>
              Consultoria em móveis e decorações para projetos corporativos e
              residenciais
            </p>
          </div>
          <div className={styles.contactSection}>
            <h3>Contato</h3>
            <Link href="https://wa.me/5521987654321" target="_blank">
              <WhatsAppIcon width="12" height="12" />
              21 98765-4321
            </Link>
            <Link
              href="https://www.instagram.com/moveisdilegno/"
              target="_blank"
            >
              <InstagramIcon width="12" height="12" />
              @moveisdilegno
            </Link>
            <Link href="mailto:moveisdilegno@gmail.com" target="_blank">
              <MailIcon width="12" height="12" />
              moveisdilegno@gmail.com
            </Link>
          </div>
          <div className={styles.subscribeSection}>
            <h3>Quer receber mais informações? Envie seu e-mail.</h3>
            <div className={styles.inputContainer}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.inputContainer}
              >
                <input
                  type="email"
                  placeholder="Digite seu e-mail aqui"
                  className={styles.emailInput}
                  {...register('email', {
                    required: 'E-mail é obrigatório',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'E-mail inválido',
                    },
                  })}
                />
                <button type="submit" className={styles.submitButton}>
                  Enviar
                </button>
              </form>
              {errors.email && (
                <p className="errorMessage">{errors.email.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
