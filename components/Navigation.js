import React from 'react'
import Link from "next/link"
import Image from "next/image"


const tabs = ["OVERVIEW", "NEIGHBORHOOD", "AMENITIES", "CONTACT"]

const Navigation = () => {
    const [visble, setVisible] = React.useState(false)
    return (
        <div className="flex-0 flex   justify-between items-center  pr-4  ">
            <Link href="/" >

                <Image src="/logo.png" width="130" className="cursor-pointer" height="100" priority />

            </Link>
            <div>
                <nav className=" md:flex   gap-12 hidden     ">



                    {tabs.map(tab =>

                        <tab key={tab} href={`#${tab}`}  >
                            <button className={` text-gray-50 hover:text-red-500 focus:outline-none transition duration-150    font-medium cursor-pointer    `} style={{ fontFamily: "Montserrat", fontWeight: "600", fontSize: "15px" }}> {tab}</button>
                        </tab>

                    )}



                </nav>
                <div className="md:hidden cursor-pointer hover:text-red-500" onClick={() => setVisible(true)}>
                    <svg className="h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                    </svg>

                </div>
                <div className={visble ? `z-10 absolute bg-black right-0 left-0 top-0 h-full  p-2 ` : `hidden`}>
                    <p className="p-2 absolute right-0 text-gray-100 text-lg font-bold cursor-pointer " onClick={() => setVisible(false)}>x </p>

                    <div className="flex flex-col justify-center items-center gap-6 mt-40 ">
                        {tabs.map(tab =>

                            <a key={tab} href={`#${tab}`} >
                                <button className={` text-gray-100 hover:text-red-500 focus:outline-none transition duration-150   text-3xl  font-extrabold cursor-pointer   `} style={{ fontFamily: "Montserrat" }}> {tab}</button>
                            </a>

                        )}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Navigation