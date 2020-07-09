import React from 'react'
import './HideButton.scss'
import { hideItem } from 'common/redux/hideSlice'
import { useDispatch } from 'react-redux'

export const HideButton = ({
    itemId
}) => {

    const dispatch = useDispatch()

    return (
        <span onClick={() => {
            dispatch(hideItem(itemId))
        }} className='hide-button-span'>hide</span>
    )
}