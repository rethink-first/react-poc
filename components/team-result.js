'use strict'

import React, { PropTypes } from 'react'
import Team from './team'


function processProps(props){
    return props
}
// stateless component
const TeamResult = (props) => {
    switch (props.ack) {
        case "error":
            return (
                <div className='team-result '>
                    <div className='team-error'>{props.data.error}</div>
                </div>
            )
        case "success":
            let dt = new Date(props.data.team.created);
            let n = dt.toJSON();
            let api = "http://api.whil.blue/team/" + props.data.team.teamId +"/profile/public";
            return (
                <div className='team-result'>
                    <h4>SUCCESS</h4> 
                    <hr/>
                    <div>Team Name:&nbsp;<span className="result">{props.data.team.name}</span></div>
                    <div>Team Slug:&nbsp;<span className="result">{props.data.team.slug}</span></div>
                    <div>Image URL:&nbsp;<span className="result"> {props.data.team.imageUrl}</span></div>
                    <div>Id: &nbsp;<span className="result">{props.data.team.teamId}</span></div>
                    <div>View raw data from api: <br/>
                        <a href={api}>{api}</a>
                    </div>
                </div>
            )

        default:
            return (
                <div className='team-result'>
                    <div >waiting...</div>
                </div>
            )


    }
}

export default TeamResult
