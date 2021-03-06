import React, { useState } from 'react'
import Image from "next/image"
import { imgArray, paragArray } from "./data/amenities"



const Amenities = () => {

    const [open, setOpen] = useState(false)

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
                    <div className={` ${open ? 'bg-gray-200 opacity-70  z-10   fixed top-0 right-0 left-0 bottom-0 transition ease-in duration-150 ' : ''} `} > </div>

                    <div className={`  ${open ? " flex flex-col items-center " : ""}`}>
                        <div className={`${open ? 'fixed top-2  z-50' : 'hidden'}`} onClick={() => setOpen(false)}> X</div>
                        <div className={`${open ? 'shadow-2xl fixed top-8 right-0 left-0 h-60  md:h-4/5 w-full mx-20 mt-10  z-50 p-7  transition ease-in duration-300 delay-150  flex flex-col items-center space-y-7 bg-white ' : 'hidden'}`}>


                            <Image src={imgArray[0]} className="  " layout="fill" quality={100} />





                        </div>


                    </div>
                </div>
                <div className="flex flex-wrap  md:hidden md:w-1/2 gap-7">
                    {
                        imgArray.map(Img => (
                            <Image src={Img} onClick={() => setOpen(true)} className="w-20 cursor-pointer" width="430" quality={1} height="240" priority />

                        ))
                    }


                </div>

                <div className=" hidden md:flex flex-wrap    md:w-1/2 gap-7">
                    {
                        imgArray.map(Img => (
                            <Image onClick={() => setOpen(true)} src={Img} className="w-20 cursor-pointer" width="280" quality={1} height="150" priority />

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
