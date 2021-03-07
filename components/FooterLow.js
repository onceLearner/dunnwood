import React from 'react'


function handleBackClick(ref) {
    console.log(ref)
    ref.current.scrollIntoView({ behavior: 'smooth' })
}

const FooterLow = (props) => {
    return (
        <div className="flex flex-col space-y-20  p-4   w-full" style={{ backgroundColor: "	#0e1111" }}  >
            <div className="flex flex-wrap space-y-9   justify-between mt-10">
                <div className=" space-y-3 md:w-5/12      ">
                    <h3 className="text-2xl md:text-5xl text-white" style={{ fontFamily: "Belleza" }}> CONTACT DETAILS </h3>
                    <p className="flex   md:text-xl gap-1  text-gray-300" style={{ lineHeight: 0.75 }}> Email: <a href="mailto:info@dunnwoodgreen.com">info@dunnwoodgreen.com</a></p>
                    <p className="flex  md:text-xl gap-1 text-gray-300" style={{ lineHeight: 0.75 }}>Phone: <a href="tel:5857506030">(585) 750-6030</a></p>

                </div>
                <div className="text-3xl font-bold  md:w-6/12  text-gray-50 ">


                    Luxury Apartment Living, Room to Play, Ultimate Flexibility

            </div>
            </div>
            <div className="flex flex-col  ">
                <div className="copyright text-sm font-bold py-6 text-gray-100">2020 Copyright
            
                   <a target="_blank" href="https://dunnwoodgreen.com">Dunnwood Green</a>
                   </div>
                  
                  
                   <svg  onClick={()=>handleBackClick(props.videoRef)} className="text-white w-6 h-6 ml-16 mt-3 cursor-pointer hover:text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                   </svg>

                    
                    
                
            </div>
            <div className="h-6 w-6 text-white">
               

            </div>


        </div >
    )
}

export default FooterLow
