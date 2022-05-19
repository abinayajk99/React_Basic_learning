import React, { Component } from 'react'

export default class Stationary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            items:['pen','pencile']
        }
    }
    render() {
        return (
        <div>{this.state.items}</div>
        )
    }
}
