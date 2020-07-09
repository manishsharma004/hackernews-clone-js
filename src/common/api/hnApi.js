import axios from 'axios'

// type SearchResult = {
//     items: HackerNewsItem[],
//     nbItems: number,
//     nbPages: number,
//     itemsPerPage: number,
// }

export async function fetchNewsItems(pageNumber=0, itemsPerPage=20, token=axios.CancelToken.source().token) {
    const url = 'https://hn.algolia.com/api/v1/search'
    const params = {
        page: pageNumber,
        hitsPerPage: itemsPerPage
    }

    try {
        const newsResponse = await axios.get(url, { params, cancelToken: token })
        const {
            hits: items,
            nbHits: nbItems,
            nbPages,
            hitsPerPage: itemsPerPage,
        } = newsResponse.data

        return {
            items: items.map(item => ({...item, voteCount: item.points || 0})),
            nbItems, nbPages, itemsPerPage
        }
    } catch(err) {
        console.log(err)
        throw err
    }
}