import React from "react";


const Loader = () =>{
    return(
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,.65)] z-50">
        <div className="animate-spin rounded-full border-t-[6px] border-primary-color border-b-[6px] h-24 w-24"></div>
      </div>
    )
}

export default Loader;