import React, { useCallback } from 'react'
import './UpvoteButton.scss'
import { useDispatch } from 'react-redux'
import { upvoteItem } from 'common/redux/upvoteSlice'

export const UpvoteButton = ({ itemId }) => {
    
    const dispatch = useDispatch()

    const upvote = useCallback(
        () => {
            dispatch(upvoteItem(itemId))
        }, [itemId, dispatch],
    )

    return (
        <span onClick={upvote} className="votearrow" title="upvote"></span>
    )
}
