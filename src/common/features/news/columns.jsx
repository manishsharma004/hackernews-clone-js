import React from "react"
import { UpvoteButton } from "common/components/upvote-button/UpvoteButton"
import { NewsDetails } from "common/components/news-details/NewsDetails"

export const columns = [
    {
        name: "Comments",
        renderHead(column) {
            return column.name
        },
        render(item) {
            return <span>{item.num_comments || "-"}</span>
        },
    },
    {
        name: "Vote Count",
        render(item) {
            return item.voteCount + ""
        },
    },
    {
        name: "UpVote",
        render(item) {
            return <UpvoteButton itemId={item.objectID} />
        },
    },
    {
        name: "News Details",
        render(item) {
            return <NewsDetails details={item} />
        },
    },
]
