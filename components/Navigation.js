import React from 'react'
import Link from "next/link"
import Image from "next/image"


const tabs = ["OVERVIEW", "NEIGHBORHOOD", "AMENITIES", "CONTACT"]



function handleBackClick(ref) {
    console.log(ref)
    ref.refName.current.scrollIntoView({ behavior: 'smooth' })
}



const Navigation = (props) => {
    const [visble, setVisible] = React.useState(false)



    return (
        <div className="flex-0 flex fixed z-10 top-0 w-full  justify-between items-center   pr-4  ">


            <Image onClick={() => olscrlToElement()} src="/logo.png" width="130" className="cursor-pointer" height="100" layout="intrinsic" priority />


            <div>
                <nav className=" md:flex   gap-12 hidden    ">



                    {tabs.map(tab =>

                        <tab key={tab} onClick={() => { handleBackClick(props.refs.find(elt => elt.tabName == tab)) }}  >
                            <button className={` text-gray-100 hover:text-white  focus:outline-none transition duration-150    font-medium cursor-pointer    `} style={{ fontFamily: "Belleza", fontSize: " 18px", fontWeight: "700" }}> {tab}</button>
                        </tab>

                    )}



                </nav>
                <div className="md:hidden cursor-pointer hover:text-red-500" onClick={() => setVisible(true)}>
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                    </svg>

                </div>
                <div className={visble ? `z-10 absolute bg-black right-0 left-0 top-0 h-screen  p-2 ` : `hidden`}>
                    <p className="p-4 absolute right-0 text-gray-100 text-lg font-bold cursor-pointer " onClick={() => setVisible(false)}>x </p>

                    <div className="flex flex-col justify-center items-center gap-6 mt-40 ">
                        {tabs.map(tab =>

                            <a key={tab} onClick={() => { handleBackClick(props.refs.find(elt => elt.tabName == tab)); setVisible(false) }}>
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