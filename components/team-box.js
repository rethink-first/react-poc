/* global fetch */
'use strict'

import React, {Component, PropTypes} from 'react'
import TeamResult from './team-result'
import TeamForm from './team-input-form'


export default class TeamBox extends Component {
    constructor(props) {
        super(props);
        this.handleTeamSubmit = this.handleTeamSubmit.bind(this);
        this.state = {
            teamResult: {},
            newTeam: {},
            resultStatus: "",
            data: []}
    }

    loadTeam(id){

            fetch("http://api.whil.blue/team/" + id + "/profile/public")
                .then(response => response.json())
                .then(data => this.setState({newTeam: data}))
                .catch(err => console.error(this.props.url, err.toString()))
    }
    loadTeams() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({teamResult: data}))
            .catch(err => console.error(this.props.url, err.toString()))
    }

    handleTeamSubmit(team) {
        fetch(this.props.url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Request-Method': 'POST'
            },
            body: JSON.stringify(team)
        })
            .then(response => this.parseResponse(response))
            .then(data => this.parseSubmit(data))
            .catch(err => this.parseErr(err))
    }
    parseErr(err){
        console.error(this.props.url, err.toString())
    }
    parseResponse(response){
        return response.json();
    }
    parseSubmit(result){
        //parse the result
        //error message
        //ack
        if(result.error){
            this.setState({
                teamResult: {
                    error:result.error,
                    errorCode: result.errorCode
                },
                resultStatus: "error"
            });
        } else if (result.team){
            this.setState({
                teamResult: result,
                resultStatus: "success"
            });

        }
    }
    render() {
        return (
            <div className='team-box'>
                <h1>Add team</h1>
                <TeamForm onTeamSubmit={this.handleTeamSubmit}/>
                <hr/>
                <TeamResult data={this.state.teamResult} ack={this.state.resultStatus}/>
            </div>
        )
    }
}

TeamBox.propTypes = {
    url: PropTypes.string.isRequired,
    pollInterval: PropTypes.number
}
