import React from "react"
import { getDataByPageId } from "../../services/myLink" 
import LinkPage from "../../components/LinkPage";


const Index = (props) => {
    return <LinkPage prismic={props.prismic} />
}

export async function getServerSideProps(context) {
    const slug = context.params.slug;
    const data = await getDataByPageId(`${slug}_links`)
    if (!data) {
        return {
            props: {
                prismic: null
            }
        }
    }

    return {
        props: {
            prismic: data.data
        }
    }
}

export default Index