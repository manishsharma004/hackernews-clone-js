import React from 'react'
import { useSelector } from 'react-redux'
import LineChart from 'common/components/line-chart/LineChart'

export const VoteChart = () => {

    const newsList = useSelector(state => state.news.items)
    const upvotesMap = useSelector(state => state.upvotes.upvotes)

    const upvoteChartData = newsList.map(newsItem => [newsItem.objectID, upvotesMap[newsItem.objectID]])

    return (
        <div className='vote-chart-container'>
            <LineChart
                title=''
                name=''
                data={upvoteChartData}
                axesTitle={['ID', 'Votes']}
            />
        </div>
    )
}