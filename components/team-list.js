'use strict'

import React, { PropTypes } from 'react'
import Team from './team'

// stateless component
const TeamList = (props) => {

  const teamNodes = props.data.map((team, i) => {
    return (
      <Team key={i} name={team.team.name} teamId={team.team.teamId} image={team.team.imageUrl} />
    )
  });

return (
    <div className='team-list'>
        {teamNodes}
    </div>
)

};

export default TeamList
