import React from "react"

export default ({ url }) => {
    return (
        <img 
            className="mx-auto my-8 rounded-full h-40 w-40 shadow-lg bg-white"
            src={url} 
        />
    )
}