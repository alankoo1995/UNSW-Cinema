import React from 'react'
import { Carousel, Feature, Content, MoviesWrapper } from './styles'
import { List, Card, Button, Icon, Row, Col, Typography } from 'antd'
import {NavLink} from 'react-router-dom'

import Heading from '../../common/heading'
import MembershipWrapper from '../../components/membership/membership-wrapper'

class Home extends React.Component {

    render() {
        const movieInfos = [{ title: "Movie", description: "hey", imgUrl: "https://classic.imgix.net/movies/thumbnails/../other/l0FATbzEOIDerPfjsxKP9YT8W4e.jpg?auto=compress,format&w=610&h=255&fit=crop&v=20191213", timeslots: ["14:40", "15:20"] },
            { title: "Movie", description: "hey", imgUrl: "https://classic.imgix.net/movies/thumbnails/../other/l0FATbzEOIDerPfjsxKP9YT8W4e.jpg?auto=compress,format&w=610&h=255&fit=crop&v=20191213", timeslots: ["14:40", "15:20"] },
            { title: "Movie", description: "hey", imgUrl: "https://classic.imgix.net/movies/thumbnails/../other/l0FATbzEOIDerPfjsxKP9YT8W4e.jpg?auto=compress,format&w=610&h=255&fit=crop&v=20191213", timeslots: ["14:40", "15:20"] },
        ]
        return (
            <React.Fragment>
                <Carousel autoplay>
                    <Feature>
                        <div className="text">
                            <p className="feature-desc">Hello World</p>
                            <p className="feature-title">Hello World</p>
                            <a className="feature-book-link">BOOK TICKETS &gt;</a>
                        </div>
                    </Feature>
                    <Feature>
                        <div className="text">
                            <p className="feature-desc">1234</p>
                            <p className="feature-title">123</p>
                            <a className="feature-book-link">BOOK TICKETS &gt;</a>
                        </div>
                    </Feature>
                </Carousel>
                <Heading text="Film showing today" />
                <Content>
                    <MoviesWrapper>
                        <List grid={{
                            gutter: 20,
                            xs: 1,
                            sm: 2,
                            md: 2,
                            lg: 3,
                            xl: 3,
                            xxl: 3,
                        }} dataSource={movieInfos} renderItem={item => (
                            <List.Item>
                                <Card hoverable={true} cover={<a href="#"><img src={item.imgUrl} style={{ display: "block", width: "100%" }} /></a>} >
                                    <Card.Meta title={item.title} description={item.description} />
                                </Card>
                            </List.Item>
                        )} />
                        <NavLink to="/now-showing"><Button type="primary" className="see-more-btn">See all films & session times<Icon type="right" /></Button></NavLink>
                    </MoviesWrapper>
                    <Heading text="membership" />
                    <MembershipWrapper />
                </Content>
            </React.Fragment>
            )
        }
}

export default Home;