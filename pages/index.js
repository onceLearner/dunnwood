import React, { useRef, useEffect, useState } from "react"
import Head from 'next/head'
import Image from "next/image"

import Amenities from '../components/Amenities'
import FooterHigh from '../components/FooterHigh'
import FooterLow from '../components/FooterLow'
import Navigation from '../components/Navigation'
import styles from '../styles/Home.module.css'

import MainV5 from "../public/mainv21.mp4"
import Vchunk1 from "../public/vchunk1.mp4"
import { imgArray } from "../components/data/amenities"
import { magicMouse } from "../lib/magic_mouse"
import Gallery from "../components/Gallery"














export default function Home() {




  const VideoRef = useRef()
  const OverviewRef = useRef()
  const NeighboorhoodRef = useRef()
  const AmenitiesRef = useRef()
  const ContactREf = useRef()

  const arrRef = [{ refName: OverviewRef, tabName: "OVERVIEW" }, { refName: NeighboorhoodRef, tabName: "NEIGHBORHOOD" }, { refName: AmenitiesRef, tabName: "AMENITIES" }, { refName: ContactREf, tabName: "CONTACT" }]




  useEffect(() => {



    const options = {
      "cursorOuter": "circle-basic",
      "hoverEffect": "pointer-blur",
      "hoverItemMove": true,
      "defaultCursor": true,
      "outerWidth": 30,
      "outerHeight": 30
    };
    if (process.browser)
      if (window.screen.width > 600) {
        magicMouse(options)
      }

  }, [])






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


        <div ref={VideoRef} className="  relative overflow-hidden    border-purple-700 w-full    bg-black bg-opacity-30" style={{ height: "92vh" }}>

          <video

            autoPlay
            loop
            muted

            style={{

              position: "relative",
              width: "100%",
              height: "120%",
              overflow: "hidden",
              left: "0",
              top: "0",
              bottom: "0",
              padding: "none",
              objectFit: "cover ",
              transform: "translate(-0%,-8%)",
              zIndex: "-1"
            }}
          >
            <source src={Vchunk1} type="video/mp4" />


          </video>
          {/* <iframe className="w-full h-full" src="https://www.youtube.com/embed/Cjeu-YZA9c4?autoplay=1&showinfo=0&controls=0"></iframe> */}


        </div>


        <Gallery />

        <div ref={OverviewRef} className="flex  flex-col   transform -translate-y-10  space-y-2 p-7 md:px-12 mt-20 ">
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

        <div ref={NeighboorhoodRef} className="  flex flex-col items-end relative  w-full   mb-6     " style={{ height: "92vh" }}>
          <Image
            className="  "
            alt="Mountains"
            src="/mainimg.jpg"
            layout="fill"
            objectFit="cover"
            quality={70}
            priority
          />
          <div className=" flex flex-col items-center   space-y-4   border-pink-600 absolute left-0 right-0 top-1/3   text-white " style={{ transform: "translate(0%,0%)", }}>
            <h3 className="text-3xl md:text-6xl text-center " style={{ fontFamily: "Belleza" }}>NEIGHBORHOOD</h3>
            <p className="text-lg font-light text-center">IN THE HEART OF ROCHESTER-SURROUNDED BY</p>
            <p className="text-center text-lg font-light">LOCUST HILL COUNTRY CLUB,  JEFFERSON ROAD, PITTSFORD, NY</p>
          </div>



        </div>

        <div ref={AmenitiesRef} >

          <Amenities />
        </div>
      </main>
      <div id="magic-cursor" >
        <div id="ball">
          <div id="hold-event"></div>
          <div id="ball-loader"></div>
        </div>
      </div>

      <footer ref={ContactREf} className="flex flex-col   w-full" id="AMENITIES">

        <FooterHigh />
        <FooterLow videoRef={VideoRef} />


      </footer>


    </div >
  )
}
