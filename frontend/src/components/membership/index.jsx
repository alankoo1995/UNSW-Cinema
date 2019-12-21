import React from 'react'
import { Content } from './styles'

import Heading from '../../common/heading'
import MembershipWrapper from './membership-wrapper'

class Membership extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Heading text="Membership" />
                <Content>
                    <MembershipWrapper />
                </Content>
            </React.Fragment>
        )
    }
}

export default Membership;