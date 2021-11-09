import React from "react"
import prismic from "prismic-javascript"

const Index = (props) => {
    return (
        <div className="w-screen h-screen" style={{ background: props.prismic.background_color }}>
            <div className="w-1/2 mx-auto text-center">
                <h1 className="text-3xl py-3">{props.prismic.title[0].text}</h1>
                <img
                    className="mx-auto my-8 rounded-full h-40 w-40 shadow-lg bg-white"
                    src={props.prismic.logo.url} />
                {
                    props.prismic.body.map(item => {
                        if (item.slice_type == "section_links") {
                            return (
                                <h2 className="text-center text-3xl my-8 ">{item.primary.text[0].text}</h2>
                            )
                        }
                        if (item.slice_type == "links") {
                            return (
                                <>
                                    <a
                                        href={item.primary.add_link.url}
                                        target={item.primary.add_link.target}
                                        className="p-2 pl-5 pr-5 bg-black text-white text-lg rounded-lg focus:border-4">
                                        {item.primary.button_text[0].text}
                                    </a>
                                    <br />
                                    <br />
                                </>

                            )
                        }
                        return (
                            <></>
                        )
                    })
                }
            </div>
            <footer>
                <p className="text-center mx-auto py-3 bottom">Código fonte: https://github.com/tiago123456789/sociallinks</p>
            </footer>
        </div>
    )
}

export async function getServerSideProps() {
    const client = prismic.client("https://social-links-tiago.prismic.io/api/v2")
    const data = await client.getSingle("links")
    return {
        props: {
            prismic: data.data
        }
    }
}

export default Index