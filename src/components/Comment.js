import React from 'react'
import moment from 'moment'

const Comment = (props) => {

    const { name, content, date } = props.comment;
    
    const convertDate = (date) => {
        let newDate = moment(date).format('YYYY-MM-DD');
        return newDate;
    }

    return (
        <div className="comment">
            <div className="name">
                <h5>{name}, <span className="font-medium">发布时间：{convertDate(date)}</span></h5>
            </div>
            <div className="content">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Comment