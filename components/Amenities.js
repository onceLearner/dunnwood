import React from 'react'
import Image from "next/image"
import { imgArray, paragArray } from "./data/amenities"



const Amenities = () => {
    return (
        <div className="flex flex-col  items-center "  >
            <div className="text-2xl text-gray-900 leading-10 font-semibold p-4 md:mb-4 text-center  md:w-3/5">
                COME HOME TO DUNNWOOD GREEN WHERE YOU CAN RELAX IN THE COMFORT OF A NEW HOME WITH THE FLEXIBILITY TO WORK, TRAVEL AND EXPLORE.

            </div>
            <div className="flex flex-wrap  justify-between p-7 md:p-1  md:mb-10  md:px-7  md:mt-10 mb-2    ">
                <div className="  md:w-1/2  ">
                    {paragArray.map(parag => (
                        <div className="flex items-start space-y-5 space-x-3   ">
                            <span className="font-bold text-3xl transform translate-y-2 ">.</span>
                            <p className="text-gray-800 leading-7 ">{parag}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap  md:hidden md:w-1/2 gap-7">
                    {
                        imgArray.map(Img => (
                            <Image src={Img} className="w-20" width="430" height="240" />

                        ))
                    }


                </div>

                <div className=" hidden md:flex flex-wrap    md:w-1/2 gap-7">
                    {
                        imgArray.map(Img => (
                            <Image src={Img} className="w-20" width="280" quality={0.2} height="150" />

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
