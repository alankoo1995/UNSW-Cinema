import React from 'react'
import { FooterWrapper, Boundary, SocialMedium, CopyRightWrapper } from './styles'
import { Typography, Row, Col, Icon } from 'antd'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <FooterWrapper>
                    <Boundary>
                        <Row type="flex" justify="space-between">
                            <Col xl={6} lg={6} md={6} xs={12}>
                                <ul className="movie">
                                    <li><Typography.Title type="warning" level={4}>MOVIE</Typography.Title></li>
                                    <li><NavLink to="/now-showing" className="footer-item">Now Showing</NavLink></li>
                                    <li><NavLink to="/coming-soon" className="footer-item">Coming Soon</NavLink></li>
                                </ul>
                            </Col>
                            <Col xl={6} lg={6} md={6} xs={12}>
                                <ul className="membership">
                                    <li><Typography.Title type="warning" level={4}>MEMBERSHIP</Typography.Title></li>
                                    <li><NavLink to="/membership" className="footer-item">Membership Plan</NavLink></li>
                                    <li><a className="footer-item">Terms & Conditions</a></li>
                                </ul>
                            </Col>
                            <Col xl={6} lg={6} md={6} xs={12}>
                                <ul className="cinema-info">
                                    <li><Typography.Title type="warning" level={4}>CINEMA INFO</Typography.Title></li>
                                    <li><HashLink to="/about-us#a11y" className="footer-item">Accessibility</HashLink></li>
                                    <li><HashLink to="/about-us#location" className="footer-item">Location</HashLink></li>
                                </ul>
                            </Col>
                            <Col xl={6} lg={6} md={6} xs={12}>
                                <ul className="contact-us">
                                    <li><Typography.Title type="warning" level={4}>CONTACT US</Typography.Title></li>
                                    <li><span className=""><Icon type="phone" /> 012345678</span></li>
                                    <li><a hreft="mailto:cinema@unsw.edu.au" className="footer-item">Email Us</a></li>
                                    <li><NavLink to="/contact-us" className="footer-item">Leave Message</NavLink></li>
                                    <SocialMedium className="social-medias">
                                        <li className="social-media"><a href="#"><Icon type="facebook" /></a></li>
                                        <li className="social-media"><a href="#"><Icon type="twitter" /></a></li>
                                        <li className="social-media"><a href="#"><Icon type="instagram" /></a></li>
                                    </SocialMedium>
                                </ul>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center">
                            <CopyRightWrapper>
                                © Copyright 2019 <a href="https://github.com/alankoo1995/" target="_blank" className="creator">Alan Koo</a>
                            </CopyRightWrapper>
                        </Row>
                    </Boundary>

                </FooterWrapper>
            </React.Fragment>
        )
    }
}

export default Footer;