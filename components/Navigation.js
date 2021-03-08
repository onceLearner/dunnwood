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
    const [isHover, setIsHover] = React.useState(false)



    return (
        <div className="flex-0 flex fixed z-10 top-0 w-full    justify-between items-center   pr-10 pt-1  ">

            <Image src="/logo.png" className="cursor-pointer " width={process.browser && window.screen.width > 600 ? 135 : 90} height={process.browser && window.screen.width > 600 ? 105 : 70} layout="intrinsic" quality={100} priority />

            <div>
                <ul className=" md:flex   space-x-12 hidden     ">



                    {tabs.map(tab =>

                        <a>
                            <span id="navItem" key={tab} onClick={() => { handleBackClick(props.refs.find(elt => elt.tabName == tab)) }} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={` ${isHover ? ' opacity-40 hover:opacity-95' : ' '}  text-gray-100  hover:opacity-20       focus:outline-none transition duration-200      cursor-pointer    `} style={{ fontFamily: "Belleza", fontSize: " 18px", fontWeight: "700", transform: [{ rotate: '180deg' }] }}> {tab}</span>

                        </a>
                    )}



                </ul>
                <div className="md:hidden cursor-pointer mr-4 hover:text-red-500" onClick={() => setVisible(true)}>
                    <svg className="h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                    </svg>

                </div>
                <div className={visble ? `z-10 absolute bg-black right-0 left-0 top-0 h-screen  p-2 ` : `hidden`}>
                    <p className="p-6  absolute right-5 text-gray-100 text-xl font-bold cursor-pointer " onClick={() => setVisible(false)}>x </p>

                    <div className="flex flex-col justify-center items-center space-y-8 mt-40 ">
                        {tabs.map(tab =>

                            <a key={tab} onClick={() => { handleBackClick(props.refs.find(elt => elt.tabName == tab)); setVisible(false) }}>
                                <button className={`   text-gray-100 hover:text-red-500 focus:outline-none transition duration-150   text-3xl  font-extrabold cursor-pointer   `} style={{ fontFamily: "Belleza", fontSize: " 32px", fontWeight: "700" }}> {tab}</button>
                            </a>

                        )}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Navigation