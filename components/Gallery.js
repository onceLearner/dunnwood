import React from 'react'
import Image from "next/image"
import { titlesImgs } from './data/Gallery'



const Gallery = () => {

    const [choosedImg, setChoosedImg] = React.useState(titlesImgs[0].imgName)

    return (
        <div className=" w-screen h-screen relative flex flex-col transform     mt-20">
            {
                titlesImgs.map(tm =>

                    <Image src={`/gallery/${choosedImg}`} className={`${choosedImg == tm.imgName ? '' : 'hidden'}`} layout="fill" objectFit="cover" quality={75} priority />
                )
            }


            <div className="flex flex-col absolute top-0 cursor-pointer    space-y-11 pt-10 p-10  h-full ">
                {titlesImgs.map(tm =>
                    <h2 className="text-7xl text-gray-100 font-extrabold hover:text-purple-500" onMouseOver={() => setChoosedImg(tm.imgName)}>  {tm.title} </h2>

                )
                }
            </div>





        </div>
    )
}

export default Gallery
