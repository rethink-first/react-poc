'use strict'

import React, {PropTypes} from 'react'

// stateless component
const Team = (props) => {
    return (
        <div className='team'>
            <div className='team-name'>{props.name}</div>
            <div className='team-image'>{props.imageUrl}</div>
            <div className='team-id'>{props.teamId}</div>
        </div>
    )
}

Team.propTypes = {
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

export default Team
