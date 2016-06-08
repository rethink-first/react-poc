'use strict'

import React, { Component, PropTypes } from 'react'

export default class TeamForm extends Component {

  constructor (props) {
    super(props);
      let dt = new Date();
      this.timeString = dt.toISOString().split("Z")[0];
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    const name = this.refs.name.value.trim()
    const slug = this.refs.slug.value.trim()
    const imageUrl = this.refs.imageUrl.value.trim()
    const domains = this.refs.domains.value.trim()
    const verifyEmail = this.refs.verifyEmail.value.trim()
    const sections = this.refs.sections.value.trim()
    const adminEmail = this.refs.adminEmail.value.trim()
    const cap = this.refs.cap.value.trim()
    const termsAndConditions = this.refs.termsAndConditions.value.trim()
    const endDate = this.refs.endDate.value.trim()


    // TODO: send request to the server
    this.props.onTeamSubmit({
      "name": name,
      "slug": slug,
      "imageUrl": imageUrl ,
      "domains": domains,
      "verifyEmail": verifyEmail,
      "sections": sections,
      "adminEmail": adminEmail,
      "cap": cap,
      "termsAndConditions": termsAndConditions,
      "endDate": endDate
    });
    return
  }

  render () {
    return (
      <form className='team-form' onSubmit={this.handleSubmit}>
          <span>Team Name: </span>
        <input type='text' placeholder=' name' ref='name'defaultValue="zarg3" /><br/>
          <span>Team Slug: </span>
        <input type='text' placeholder='slug' ref='slug' defaultValue="zarg3"/><br/>
          <span>Image URL: </span>
        <input type='text' placeholder='image' ref='imageUrl'defaultValue="zarg3.png" /><br/>
          <span>Domains: </span>
        <input type='text' placeholder='domains' ref='domains'defaultValue="zarg3.com" /><br/>
          <span>Verify Email: </span>
        <input type='text' placeholder='verify' ref='verifyEmail' defaultValue="true" /><br/>
          <span>Sections: </span>
        <input type='text' placeholder='sections' ref='sections' defaultValue="yoga,mindfulness,grow,search-inside-yourself" /><br/>
          <span>Admin Email: </span>
        <input type='text' placeholder='admin' ref='adminEmail' defaultValue="salima@whil.com" /><br/>
          <span>Cap: </span>
        <input type='text' placeholder='cap' ref='cap' defaultValue="50"/><br/>
          <span>Terms & Conditions: </span>
        <input type='text' placeholder='T&C' ref='termsAndConditions'defaultValue="true" /><br/>
          <span>End Date: </span>
          <input type='datetime-local'  ref='endDate' defaultValue={this.timeString}/><br/>
        <input type='submit' value='Post' />
      </form>
    )
  }
}

TeamForm.propTypes = {
  onTeamSubmit: PropTypes.func.isRequired
}
