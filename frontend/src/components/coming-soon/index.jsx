import React from 'react'
import { Content, ButtonWrapper } from './styles'
import { List, Card, Icon, Button } from 'antd'

import Heading from '../../common/heading/index'

class ComingSoon extends React.Component {
    render() {
        const grid = {gutter: 20, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3}
        const data = [{ title: "Movie", description: "hey", imgUrl: "https://classic.imgix.net/movies/thumbnails/../other/l0FATbzEOIDerPfjsxKP9YT8W4e.jpg?auto=compress,format&w=610&h=255&fit=crop&v=20191213", timeslots: ["14:40", "15:20"] },
            { title: "Movie", description: "hey", imgUrl: "https://classic.imgix.net/movies/thumbnails/../other/l0FATbzEOIDerPfjsxKP9YT8W4e.jpg?auto=compress,format&w=610&h=255&fit=crop&v=20191213", timeslots: ["14:40", "15:20"] },
            { title: "Movie", description: "hey3", imgUrl: "https://classic.imgix.net/movies/thumbnails/../other/l0FATbzEOIDerPfjsxKP9YT8W4e.jpg?auto=compress,format&w=610&h=255&fit=crop&v=20191213", timeslots: ["14:40", "15:20"] },
        ]
        return (
            <React.Fragment>
                <Heading text="coming soon" />
                <Content>
                    <List grid={grid} dataSource={data} renderItem={item=>(
                        <List.Item>
                            <Card hoverable={true} actions={[
                                    <ButtonWrapper>
                                        <Button type="primary"><Icon type="calendar" />ADD REMINDER</Button>
                                    </ButtonWrapper>
                                ]} cover={
                                    <a href="#">
                                        <img src={item.imgUrl} style={{display: "block", width: "100%"}} />
                                    </a>
                                }>
                            <Card.Meta title={item.title} description={item.description} />
                            </Card>
                        </List.Item>
                    )} 
                    />
                </Content>
            </React.Fragment>
        )
    }
}

export default ComingSoon;