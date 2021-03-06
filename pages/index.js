import Head from 'next/head'
import Image from "next/image"
import Amenities from '../components/Amenities'
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
        <div className="flex flex-col  space-y-2 p-7 md:px-12">
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
        <div className="  w-full      ">
          <div className="  relative   w-full  h-72 md:h-full        ">
            <Image
              className="  "
              alt="Mountains"
              src="/mainimg.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="  relative md:hidden   w-full h-72 md:h-full        ">
            <Image
              className="  "
              alt="Mountains"
              src="/mainimg.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="  relative md:hidden   w-full h-72 md:h-full  mb-16     ">
            <Image
              className="  "
              alt="Mountains"
              src="/mainimg.jpg"
              layout="fill"
              objectFit="cover"
              quality={2}
            />
          </div>
          <div className="flex flex-col items-center space-y-4 text-white transform -translate-y-96">
            <p className="text-xl font-semibold">
              NEIGHBORHOOD
            </p>
            <p>
              IN THE HEART OF ROCHESTER-SURROUNDED BY

              
            </p>
            <p className="text-center">LOCUST HILL COUNTRY CLUB,  JEFFERSON ROAD, PITTSFORD, NY</p>
          </div>


        </div>

        <Amenities />
      </main>

      <footer className={styles.footer}>

        <FooterHigh />
        <FooterLow />


      </footer>
    </div>
  )
}
