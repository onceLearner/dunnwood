import Head from 'next/head'
import Image from "next/image"
import Amenities from '../components/Amenities'
import FooterHigh from '../components/FooterHigh'
import FooterLow from '../components/FooterLow'
import Navigation from '../components/Navigation'
import styles from '../styles/Home.module.css'
import MainV1 from "../public/mainsd.mp4"
import MainV2 from "../public/mainsd2.mp4"
import MainV3 from "../public/mainv1.mp4"




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> DunnwooGreen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full">
        <Navigation />
      </nav>

      <main className={styles.main}>
        <div className="  relative  w-full        " style={{ height: "92vh" }}>
          <video autoPlay
            loop
            muted
            className="transform -translate-y-60 md:-translate-y-60  "
            style={{

              position: "relative",
              width: "100%",
              height: "120%",
              left: "0",
              top: "0",
              padding: "none",
              objectFit: "cover",
              // transform: "translate(-0%,-28%)",
              zIndex: "-1"
            }}
          >
            <source src={MainV3} type="video/mp4" />
          </video>
        </div>

        <div className="flex  flex-col   space-y-2 p-7 md:px-12 ">
          <h2 className="text-2xl font-semibold mb-2 md:mb-7 text-gray-800">
            DUNNWOOD GREEN-LUXURY APARTMENTS
          </h2>

          <p className="text-gray-600  leading-6">
            Morrell Builders is thrilled to announce our newest project! Dunnwood Green will provide the same quality, value and innovation Rochester home buyers have revered for three generations. Three luxury buildings offering single and multiple bedroom residences surrounded by a golf course and wooded trails.  A community club house featuring your favorite coffee bar, a beloved pub, a comfy library, and a state-of-the-art fitness center. Our goal is to energize and elevate your lifestyle.
          </p>
          <p className="text-gray-600  py-2  ">
            As you learn more, we hope you will become equally as excited, so stay tuned and we will provide additional details in the coming months!
          </p>
        </div>

        <div className="  relative  w-full   mb-16     " style={{ height: "92vh" }}>
          <Image
            className="  "
            alt="Mountains"
            src="/mainimg.jpg"
            layout="fill"
            objectFit="cover"
            quality={1}
            priority
          />



        </div>

        <Amenities />
      </main>

      <footer className={styles.footer} id="AMENITIES">

        <FooterHigh />
        <FooterLow />


      </footer>
    </div >
  )
}
