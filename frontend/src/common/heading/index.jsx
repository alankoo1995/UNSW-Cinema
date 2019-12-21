import React from 'react'
import { Heading } from './styles'

class CommonHeading extends React.Component {

    render() {
        return (
            <Heading><h1>{this.props.text}</h1></Heading>
        )
    }
}

export default CommonHeading