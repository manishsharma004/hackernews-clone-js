import React, { useState, useEffect, useMemo } from 'react'
import Table from 'common/components/table/fluid-table/FluidTable'
import { columns } from './columns'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews } from 'common/redux/newsSlice'
import { Pagination } from 'common/components/pagination/Pagination'
import { useLocation } from 'react-router-dom'
import { VoteChart } from '../vote-chart/VoteChart'


export const News = ({
    ...restProps
}) => {
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0)

    const newsItems = useSelector((state) => state.news.items)
    const pageCount = useSelector((state) => state.news.pages)
    const upvotes = useSelector((state) => state.upvotes.upvotes)
    const hiddenItems = useSelector((state) => state.hide.hiddenItems)
    const itemsPerPage = useSelector((state) => state.app.itemsPerPage)
    const location = useLocation()

    const upvotedNonHiddenItems = newsItems.filter(item => !hiddenItems[item.objectID]).map(item => ({
        ...item,
        voteCount: upvotes[item.objectID] || item.voteCount
    }))

    useEffect(() => {
        const pageNumber = Number(new URLSearchParams(location.search).get('pageNumber'))
        setPageNumber(pageNumber)
        return () => {
        }
    }, [location])
    useEffect(() => {
        dispatch(fetchNews(pageNumber, itemsPerPage))

        return () => {
        }
    }, [pageNumber, itemsPerPage, dispatch])

    const pagination = useMemo(() => <Pagination pageNumber={pageNumber} pageCount={pageCount} />, [pageNumber, pageCount])

    return (
        <div>
            <Table columns={columns} data={upvotedNonHiddenItems} />
            <div className='pagination-container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', padding: '10px', }}>
                {pagination}
            </div>
            <div style={{border: "2px solid #ff6601", borderWidth: "2px 0px"}}>
                <VoteChart />
            </div>
        </div>
    )
}

export default News