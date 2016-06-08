'use strict'

import React, { Component, PropTypes } from 'react'

export default class CommentForm extends Component {

  constructor (props) {
    super(props)
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
    this.props.onCommentSubmit({

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
    // this.refs.name.value = '';
    // this.refs.slug.value = '';
    // this.refs.imageUrl.value = '';
    // this.refs.domains.value = '';
    // this.refs.verifyEmail.value = true;
    // this.refs.sections.value = "";
    // this.refs.adminEmail.value = '';
    // this.refs.cap.value = 50;
    // this.refs.termsAndConditions.value = true;
    // this.refs.endDate.value = '';
    return
  }

  render () {
    return (
      <form className='comment-form' onSubmit={this.handleSubmit}>
        <input type='text' placeholder=' name' ref='name'defaultValue="zarg3" /><br/>
        <input type='text' placeholder='slug' ref='slug' defaultValue="zarg3"/><br/>
        <input type='text' placeholder='image' ref='imageUrl'defaultValue="zarg3.png" /><br/>
        <input type='text' placeholder='domains' ref='domains'defaultValue="zarg3.com" /><br/>
        <input type='text' placeholder='verify' ref='verifyEmail' defaultValue="true" /><br/>
        <input type='text' placeholder='sections' ref='sections' defaultValue="yoga,mindfulness,grow,search-inside-yourself" /><br/>
        <input type='text' placeholder='admin' ref='adminEmail' defaultValue="salima@whil.com" /><br/>
        <input type='text' placeholder='cap' ref='cap' defaultValue="50"/><br/>
        <input type='text' placeholder='T&C' ref='termsAndConditions'defaultValue="true" /><br/>
        <input type='text' placeholder='End Date' ref='endDate' defaultValue="2017-1-1"/><br/>
        <input type='submit' value='Post' />
      </form>
    )
  }
}

CommentForm.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired
}
