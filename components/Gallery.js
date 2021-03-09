import React from 'react'
import Image from "next/image"
import { titlesImgs } from './data/Gallery'

import styles from '../styles/Home.module.css'




const Gallery = () => {

    const [choosedImg, setChoosedImg] = React.useState(titlesImgs[0].imgName)

    return (
        <div className=" w-full h-screen relative flex flex-col    mt-20" style={{}}>



            {
                titlesImgs.map(tm =>

                    <Image style src={`/gallery/${choosedImg}`} className={`${tm.imgName === choosedImg ? styles.show : styles.iconContainer}`} layout="fill" objectFit="cover" quality={75} priority />

                )
            }
            <div className="flex flex-col absolute top-0 cursor-pointer  justify-evenly    pt-10 p-10  h-full ">
                {titlesImgs.map(tm =>

                    <h2 className="md:text-6xl text-xl text-gray-100 font-extrabold  box-content transition ease-in duration-150 hover:text-green-500" onMouseOver={() => setChoosedImg(tm.imgName)} onClick={() => setChoosedImg(tm.imgName)}>  {tm.title} </h2>

                )
                }
            </div>





        </div>
    )
}

export default Gallery
