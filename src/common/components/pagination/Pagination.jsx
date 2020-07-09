import React from 'react'
import { Link } from 'react-router-dom'
import './Pagination.scss'

export const Pagination = ({
    pageNumber=0, pageCount=10,
}) => {

    return (
        <div className='pagination-component'>
            { pageNumber > 0  && <><Link to={'?pageNumber='+(pageNumber-1)} className='link'>Previous</Link></> }
            { pageNumber > 0 && pageNumber < pageCount-1 && <span className='separator'> | </span> }
            { pageNumber < pageCount-1 && <Link to={'?pageNumber='+(pageNumber+1)} className='link'>Next</Link> }
        </div>
    )
}