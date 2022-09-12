import React from 'react'

const PageNumber = (props) => {
    return (
        <span className="page">{props.number + 1} / 4</span>
    )
}

export default PageNumber