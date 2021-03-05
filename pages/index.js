import Head from 'next/head'
import FooterHigh from '../components/FooterHigh'
import FooterLow from '../components/FooterLow'
import styles from '../styles/Home.module.css'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> DunnwooGreen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <p className="text-red-100">he </p>
      </nav>

      <main className={styles.main}>
        <p className="text-2xl">hello world</p>
      </main>

      <footer className={styles.footer}>
        <FooterHigh />
        <FooterLow />


      </footer>
    </div>
  )
}
