import React from "react";
import LinkButton from "./LinkButton";
import Section from "./Section";
import NotFound from "./NotFound";
import Image from "./Image"


export default (props) => {
    const renderSectionAndLinks = () => {
        return props.prismic.body.map((item, index) => {
            if (item.slice_type == "section_links") {
                return <Section key={index} text={item.primary.text[0].text} />;
            }
            if (item.slice_type == "links") {
                return <LinkButton
                    key={index}
                    url={item.primary.add_link.url}
                    target={item.primary.add_link.target}
                    text={item.primary.button_text[0].text} />
            }
            return (
                <></>
            )
        })
    }

    if (!props.prismic) {
        return <NotFound />;
    }

    return (
        <div className="w-screen h-screen" style={{ background: props.prismic.background_color }}>
            <div className="w-1/2 mx-auto text-center">
                <h1 className="text-3xl py-3">{props.prismic.title[0].text}</h1>
                { props.description && 
                    <p>{props.description}</p>
                }
                <Image url={props.prismic.logo.url} />
                {renderSectionAndLinks()}
            </div>
        </div>
    )
}