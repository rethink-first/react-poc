/* global fetch */
'use strict'

import React, {Component, PropTypes} from 'react'
import CommentList from './comment-list'
import CommentForm from './comment-form'

export default class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.state = {data: []}
    }

    loadComments() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({data: data}))
            .catch(err => console.error(this.props.url, err.toString()))
    }

    componentDidMount() {
        // this.loadComments()
        // setInterval(() => this.loadComments(), this.props.pollInterval)
    }

    handleCommentSubmit(comment) {
        const comments = this.state.data;
        const newComments = comments.concat([comment]);
        this.setState({data: newComments});

        fetch(this.props.url, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Request-Method': 'POST'
            },
            body: JSON.stringify(comment)
        })
            .then(response => response.json())
            .then(data => this.setState({data: [data]}))
            .catch(err => console.error(this.props.url, err.toString()))
    }

    render() {
        return (
            <div className='comment-box'>
                <h1>Add team</h1>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
                <hr/>
                <CommentList data={this.state.data}/>
            </div>
        )
    }
}

CommentBox.propTypes = {
    url: PropTypes.string.isRequired,
    pollInterval: PropTypes.number
}
