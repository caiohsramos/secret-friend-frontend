import React from 'react'

export default (props) => {
    const url = props.match.url
    return (
        <h1>Page {url} not found</h1>
    )
}