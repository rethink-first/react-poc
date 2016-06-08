'use strict'

import React, { PropTypes } from 'react'
import Team from './team'


function processProps(props){
    return props
}
// stateless component
const TeamResult = (props) => {
    // if(props.ack){
    //     let result = processProps(props);
    //     return (
    //         <div className='team'>
    //             <div className='team-name'>{result.name}</div>
    //             <div className='team-image'>{result.imageUrl}</div>
    //             <div className='team-id'>{result.teamId}</div>
    //         </div>
    //     )
    // }else{
    // }
    switch (props.ack) {
        case "error":
            return (
                <div className='team'>
                    <div className='team-error'>{props.data.error}</div>
                </div>
            )
        case "success":
            let dt = new Date(props.data.team.created);
            let n = dt.toJSON();
            let api = "http://api.whil.blue/team/" + props.data.team.teamId +"/profile/public";
            return (
                <div className='team'>
                    <div>SUCCESS</div>
                    <div>Team Name: {props.data.team.name}</div>
                    <div>Team Slug: {props.data.team.slug}</div>
                    <div>Image URL: {props.data.team.imageUrl}</div>
                    <div>Id: {props.data.team.teamId}</div>
                    <div>View raw data from api: <br/>
                        <a href={api}>{api}</a>
                    </div>
                </div>
            )

        default:
            return (
                <div className='team'>
                    <div className='team-error'>BUDGUEß</div>
                </div>
            )


    }
}

export default TeamResult
