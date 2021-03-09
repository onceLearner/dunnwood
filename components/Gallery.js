import React, { useState, useEffect } from 'react'
import Image from "next/image"
import { titlesImgs } from './data/Gallery'

import styles from '../styles/Home.module.css'




const Gallery = () => {





    const [choosedImg, setChoosedImg] = useState(titlesImgs[0].imgName)



    return (
        <div className=" w-full bg-gray-900 h-screen   relative flex flex-col mt-20" style={{ fontFamily: "Belleza" }}>
            <div className={` absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-black to-gray-100 ${styles.bgImg}`} style={{ zIndex: "10", opacity: "0.67" }}>
            </div>



            {
                titlesImgs.map(tm =>

                    <Image key={tm.title} style src={`/gallery/${choosedImg}`} className={`${tm.imgName === choosedImg ? styles.show : styles.hide}`} layout="fill" objectFit="cover" quality={75} priority />

                )
            }
            <div className="flex flex-col absolute top-0 cursor-pointer  justify-around    pt-3 p-4  h-full ">
                {titlesImgs.map(tm =>

                    <h2 key={tm.title} className="md:text-7xl text-2xl text-white  tracking-normal font-extrabold  capitalize  word box-content transition ease-in duration-150 hover:text-green-600" onMouseOver={() => setChoosedImg(tm.imgName)} onClick={() => setChoosedImg(tm.imgName)} style={{ zIndex: "20" }}>  {tm.title} </h2>

                )
                }
            </div>





        </div>
    )
}

export default Gallery
