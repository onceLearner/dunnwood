import React from 'react'

const FooterLow = () => {
    return (
        <div className="flex flex-col space-y-20  p-4    text-white " style={{ backgroundColor: "	#0e1111" }}  >
            <div className="flex flex-wrap gap-10    justify-between mt-10">
                <div className=" space-y-3 md:w-5/12      ">
                    <h3 className="text-2xl md:text-5xl"> CONTACT DETAILS </h3>
                    <p className="flex   md:text-xl gap-1  text-gray-300" style={{ lineHeight: 0.75 }}> Email: <a href="mailto:info@dunnwoodgreen.com">info@dunnwoodgreen.com</a></p>
                    <p className="flex  md:text-xl gap-1 text-gray-300" style={{ lineHeight: 0.75 }}>Phone: <a href="tel:5857506030">(585) 750-6030</a></p>

                </div>
                <div className="text-3xl font-bold  md:w-6/12  text-gray-50 ">


                    Luxury Apartment Living, Room to Play, Ultimate Flexibility

            </div>
            </div>
            <div className="copyright text-sm font-bold py-6 text-gray-100">2020 Copyright <a target="_blank" href="https://dunnwoodgreen.com">Dunnwood Green</a>
            </div>


        </div >
    )
}

export default FooterLow
