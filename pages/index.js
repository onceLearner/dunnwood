import React, { useRef, useEffect } from "react"
import Head from 'next/head'
import Image from "next/image"
import Amenities from '../components/Amenities'
import FooterHigh from '../components/FooterHigh'
import FooterLow from '../components/FooterLow'
import Navigation from '../components/Navigation'
import styles from '../styles/Home.module.css'
import MainV1 from "../public/mainsd.mp4"
import MainV2 from "../public/mainsd2.mp4"
import MainV3 from "../public/mainv11.mp4"
import MainV4 from "../public/mainv112.mp4"
import { imgArray } from "../components/data/amenities"




export default function Home() {
  const OverviewRef = useRef()
  const NeighboorhoodRef = useRef()
  const AmenitiesRef = useRef()
  const ContactREf = useRef()

  const arrRef = [{ refName: OverviewRef, tabName: "OVERVIEW" }, { refName: NeighboorhoodRef, tabName: "NEIGHBORHOOD" }, { refName: AmenitiesRef, tabName: "AMENITIES" }, { refName: ContactREf, tabName: "CONTACT" }]




  return (
    <div className={styles.container}>
      <Head>
        <title> DunnwooGreen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full">
        <Navigation refs={arrRef} />
      </nav>

      <main className={styles.main}>
        <div className="     border-purple-700 w-full    bg-black bg-opacity-30" style={{ height: "92vh" }}>
          <video

            autoplay="autoplay"
            loop
            muted
            poster={imgArray[0]}
            style={{

              position: "relative",
              width: "100%",
              height: "100vh",
              overflow: "hidden",
              left: "0",
              top: "0",
              padding: "none",
              objectFit: "cover",
              transform: "translate(-0%,-8%)",
              zIndex: "-1"
            }}
          >
            <source src={MainV4} type="video/mp4" />

          </video>
          {/* <iframe className="w-full h-full" src="https://www.youtube.com/embed/Cjeu-YZA9c4?autoplay=1&showinfo=0&controls=0"></iframe> */}


        </div>


        <div ref={OverviewRef} className="flex  flex-col   transform -translate-y-10  space-y-2 p-7 md:px-12 mt-40 ">
          <h2 className="  mb-2 md:mb-7 text-3xl text-gray-800 " style={{ fontFamily: "Belleza" }}>
            DUNNWOOD GREEN-LUXURY APARTMENTS
          </h2>

          <p className="text-black  leading-6" style={{ fontSize: "12pt", fontWeight: "300   " }}>
            Morrell Builders is thrilled to announce our newest project! Dunnwood Green will provide the same quality, value and innovation Rochester home buyers have revered for three generations. Three luxury buildings offering single and multiple bedroom residences surrounded by a golf course and wooded trails.  A community club house featuring your favorite coffee bar, a beloved pub, a comfy library, and a state-of-the-art fitness center. Our goal is to energize and elevate your lifestyle.
          </p>
          <p className="text-black  py-2  " style={{ fontSize: "16px", fontWeight: "300" }}>
            As you learn more, we hope you will become equally as excited, so stay tuned and we will provide additional details in the coming months!
          </p>
        </div>

        <div ref={NeighboorhoodRef} className="  relative  w-full   mb-6     " style={{ height: "92vh" }}>
          <Image
            className="  "
            alt="Mountains"
            src="/mainimg.jpg"
            layout="fill"
            objectFit="cover"
            quality={70}
            priority
          />
          <div className=" flex flex-col items-center space-y-4  absolute top-1/3 left-12 md:left-72 text-white ">
            <h3 className="text-xl md:text-6xl " style={{ fontFamily: "Belleza" }}>NEIGHBORHOOD</h3>
            <p className="text-lg">IN THE HEART OF ROCHESTER-SURROUNDED BY</p>
            <p className="text-center text-lg">LOCUST HILL COUNTRY CLUB,  JEFFERSON ROAD, PITTSFORD, NY</p>
          </div>

        </div>

        <div ref={AmenitiesRef} >

          <Amenities />
        </div>
      </main>

      <footer ref={ContactREf} className={styles.footer} id="AMENITIES">

        <FooterHigh />
        <FooterLow />


      </footer>
    </div >
  )
}
