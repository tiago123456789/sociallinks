import React from "react"

export default ({ url, target, text }) => {
    return (
        <>
            <a
                href={url}
                target={target}
                className="p-2 pl-5 pr-5
            bg-black text-white text-lg rounded-lg focus:border-4">
                {text}
            </a>
            <br />
            <br />
        </>
    )
}