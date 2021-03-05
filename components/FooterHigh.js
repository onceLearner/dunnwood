import React from 'react'

const FooterHigh = () => {
    return (
        <div className="flex  flex-wrap justify-between p-8 w-full  gap-20  text-white " style={{ backgroundColor: "#143923" }}  >
            <div className=" flex flex-col  gap-8 md:w-1/2">
                <h2 className="text-3xl  font-bold text-gray-50">
                    Apartments available from $1,400 per month.
                </h2>
                <p className=" md:text-lg ">
                    Follow along for project updates and register for grand opening incentives.
                </p>
                <p className=" text-lg ">Your Email</p>
                <input type="text" className="p-2 border-b  border-gray-100" style={{ backgroundColor: "#143923" }} />
                <p className=" md:text-lg ">How many bedrooms are you interested in? </p>
                <select className="text-black h-10">
                    <option> ...</option>
                    <option> one Bedroom</option>
                    <option> Two Bedrooms</option>
                    <option> Three Bedrooms</option>

                </select>
                <button className="p-1 font-semibold text-lg bg-gray-50 text-green-800 w-24 rounded-lg ">
                    Send
                </button>
            </div>
            <div className="md:w-1/2 w-full " >
                <iframe className="w-full" src="https://www.google.com/maps/d/u/0/embed?mid=1MPQ8gtxxOXaABvzxikXooGmWgnQIvx0R" width="100%" height="600px"></iframe>

            </div>
        </div>
    )
}

export default FooterHigh
