'use strict'

import React, {PropTypes} from 'react'
import marked from 'marked'

// stateless component
const Comment = (props) => {
    console.log("I AM COMMENT");
    console.log(props);
    return (
        <div className='comment'>
            <div className='comment-author'>{props[0]}</div>
            <div className='comment-author'>{props[1]}</div>
            <div className='comment-author'>{props[2]}</div>
            <div className='comment-author'>{props[3]}</div>
            <div className='comment-author'>{props[4]}</div>
            <div className='comment-author'>{props.sections}</div>
            <div className='comment-author'>{props.adminEmail}</div>
            <div className='comment-author'>{props.cap}</div>
            <div className='comment-author'>{props.termsAndConditions}</div>
            <div className='comment-author'>{props.endDate}</div>
        </div>
    )
}

Comment.propTypes = {
    name: PropTypes.string,
    slug: PropTypes.string,
    imageUrl: PropTypes.string,
    domains: PropTypes.string,
    verifyEmail: PropTypes.bool,
    sections: PropTypes.string,
    adminEmail: PropTypes.bool,
    cap: PropTypes.number,
    termsAndConditions: PropTypes.bool,
    endDate: PropTypes.string
}

export default Comment
