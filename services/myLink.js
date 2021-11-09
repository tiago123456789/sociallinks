import prismic from "prismic-javascript"

const getDataByPageId = (pageId) => {
    const client = prismic.client("https://social-links-tiago.prismic.io/api/v2")
    return client.getSingle(pageId)
}

export {
    getDataByPageId
}