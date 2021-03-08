import React, { useState } from 'react'
import Image from "next/image"
import { imgArray, paragArray } from "./data/amenities"





const Amenities = () => {

    const LoaderImg = "/Fountain.gif"

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [choosedImg, setChoosedImg] = useState(imgArray[0])

    return (
        <div className="flex flex-col  items-center "  >
            <div className="text-3xl text-gray-900 leading-10 p-4 md:mb-4 text-center  md:w-3/5" style={{ fontFamily: "Belleza" }}>
                COME HOME TO DUNNWOOD GREEN WHERE YOU CAN RELAX IN THE COMFORT OF A NEW HOME WITH THE FLEXIBILITY TO WORK, TRAVEL AND EXPLORE.

            </div>
            <div className="flex flex-wrap  justify-between p-7 md:p-1  md:mb-10  md:px-7  md:mt-10 mb-2    ">
                <div className="  md:w-1/2  ">
                    {paragArray.map(parag => (
                        <div className="flex items-start space-y-5 space-x-3   ">
                            <span className="font-bold text-3xl transform translate-y-2 ">.</span>
                            <p className="text-black leading-7 ">{parag}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <div className={` ${open ? 'bg-gray-200 opacity-70  z-10   fixed top-0 right-0 left-0 bottom-0 transition ease-in duration-300 ' : ''} `} > </div>

                    <div className={`  ${open ? " flex flex-col items-center " : ""}`}>

                        <button className={`${open ? 'fixed top-9 hover:text-gray-400   right-5    z-50 text-2xl  font-bold border-2 px-2 border-gray-600 ' : 'hidden'}`} onClick={() => setOpen(false)}> X</button>
                        <div className={`${open ? 'shadow-2xl fixed top-10 right-0 left-0 mx-3 h-72  md:h-4/5 mt-10  z-50 p-7  transition ease-in duration-400 delay-150 border-2  border-gray-500 rounded   space-y-7 bg-white ' : 'hidden'}`}>


                            {

                                loading ?

                                    <Image src="/Fountain.gif" width="100" className="" height="20" />
                                    :
                                    <Image src={choosedImg} className="  " layout="fill" quality={100} />

                            }



                        </div>


                    </div>
                </div>
                <div className="flex flex-col  md:hidden space-y-8  mt-2      ">
                    {
                        imgArray.map(Img => (
                            <div>
                                <Image src={Img} onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500); setChoosedImg(Img); setOpen(true) }} className=" cursor-pointer" width="430" quality={1} height="240" priority />
                            </div>
                        ))
                    }


                </div>

                <div className=" hidden md:flex flex-wrap   w-1/2        items-center justify-between       ">
                    {
                        imgArray.map(Img => (
                            <div className="relative w-72 h-44   ">
                                <Image src={Img} onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500); setChoosedImg(Img); setOpen(true) }} className="cursor-pointer" layout="fill" objectFit="cover" quality={1} priority />
                            </div>
                        ))
                    }


                </div>
                <div className="">

                </div>

            </div>

        </div>
    )
}

export default Amenities
