import React from "react"
import LinkPage from "../components/LinkPage"
import { getDataByPageId } from "../services/myLink" 

const Index = (props) => {
    return <LinkPage 
        prismic={props.prismic} 
        description="Meus links é uma aplicação que centraliza seus contatos em um só lugar." />
}

export async function getServerSideProps() {
    const data = await getDataByPageId(`links`)
    return {
        props: {
            prismic: data.data
        }
    }
}

export default Index