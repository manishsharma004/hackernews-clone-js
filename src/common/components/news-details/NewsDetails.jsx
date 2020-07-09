import React from 'react'
import moment from 'moment'
import classnames from 'classnames'
import './NewsDetails.scss'
import { HideButton } from '../hide-button/HideButton'

export const NewsDetails = ({ details }) => {
    const { title, url, author, created_at } = details
      const domain = url ? new URL(url).hostname : ''
      const createdAt = moment(created_at).fromNow()

      return (
        <div className={classnames('news-details')}>
          <a href={url || undefined} className={classnames('story-title')}>
            {title || 'Untitled'}
          </a>
          { domain && <span className='website'>({domain})</span> }
          { author && <> by <span className='author'>{author}</span></>}
          { createdAt && <span className='creation-time'>{createdAt}</span>}
          <span className='hide-button'>[ <HideButton itemId={details.objectID} /> ]</span>
        </div>
      )
}
