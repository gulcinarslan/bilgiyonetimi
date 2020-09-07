import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Temel Bilgi Teknolojileri',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
      Bilgi Teknolojilerine Giriş,Windows 8-I, Windows 8-II, Windows 8-III, Windows 7-IV, Microsoft Word 2010, Word 2010-II, Word 2010-III, Word 2014-
IV, Excel 2010-I, Excel 2010-II, Excel 2010-III
      </>
    ),
  },
  {
    title: 'İşletim Sistemleri',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        İşletim Sistemlerine Giriş-I, İşletim Sistemlerine Giriş-II, Bilgisayar Donanım Bileşenleri, İşletim Sistemlerinin İşlevi-I, İşletim Sistemlerinin İşlevi-II,
İşletim Sistemi Güvenliği, Windows İşletim Sistemi Windows 10-I, Windows İşletim Sistemi Windows 10-II, Windows İşletim Sistemi Windows 10-III,
Linux İşletim Sistemi- Ubuntu-I, Linux İşletim Sistemi- Ubuntu-II, MacOS İşletim Sistemi, Mobil İşletim Sistemi-ANdroid, Mobil İşletim Sistemi -ios.
      </>
    ),
  },
  {
    title: 'Programlama Temelleri',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Temel Kavramlar, Algoritmalar ve Akış Diyagramları, İlk C++ Programı (Merhaba Dünya) Bir C++ Programının Yazılması Derlenmesi ve Çalıştırılması,
İlişkisel Operatörler, Mantıksal Operatörler ve Şartlı Deyimler, Döngüler, Fonksiyonlar, Hata Ayıklama, Tek Boyut Diziler, İki Boyut Diziler, String Sınıfı
ve Karakter Dizisi İşlemleri, Standart Şablon Kütüphanesi ve Algoritmaları, Dosya İşleme, Nesneye Yönelik Programlamaya Giriş
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Atatürk Üniversitesi ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Giriş
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
