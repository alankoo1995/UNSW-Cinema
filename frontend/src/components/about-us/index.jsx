import React from 'react'
import { Content, Wrapper, DividerContainer, MapContainer } from './styles'
import { Typography, Divider, Row, Col, Button } from 'antd'
import { NavLink } from 'react-router-dom'

import Heading from '../../common/heading/index'

class AboutUs extends React.Component {
    render() {
        const {Title, Paragraph, Text } = Typography
        return (
            <React.Fragment>
                <Heading text="About Us" />
                <Content>
                    <Wrapper>
                        <Typography>
                            <Title id="a11y">Accessibility</Title>
                            <Paragraph>
                                You can visit via Anzac Parade. We provides facilities for those with
                                physical disabilities or special needs. There is an accessible restroom,
                                direct or lift access to all cinemas, designated areas for wheelchair seating, 
                                a baby change table and toddler booster seats available for all patrons. 
                                All of our cinemas are fitted with hearing loops. We regularly screen open caption 
                                sessions and sensory friendly sessions.
                            </Paragraph>
                            <Title>WHEELCHAIR ACCESSIBLE BATHROOMS</Title>
                            <Paragraph>
                                There is an accessible bathroom on the ground floor adjacent to the ladies bathroom in the foyer.
                            </Paragraph>
                            <Title id="location">Location</Title>
                            <MapComponent />
                            <Title style={{}}>
                                Contact Us
                            </Title>
                            <Paragraph>
                                <Text strong>Phone Number: </Text> 0412345678
                            </Paragraph>
                            <Paragraph>
                                <Text strong>Email Address: </Text> cinema@unsw.edu.au
                            </Paragraph>
                            <Paragraph>
                                <DividerContainer>
                                    <Divider>OR</Divider>
                                </DividerContainer>
                            </Paragraph>
                            <NavLink to="/contact-us"><Button type="primary">Leave your message online</Button></NavLink>
                    </Typography>
                    </Wrapper>
                </Content>
            </React.Fragment>
        )
    }
}

class MapComponent extends React.Component {
    render() {
        return (
            <MapContainer>
                {/* generate by "embedgooglemap.net"  */}
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=unsw&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </MapContainer>
        )
    }
}

export default AboutUs;