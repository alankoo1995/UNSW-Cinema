import React from 'react'
import { ContentWrapper, Filters, MoviesWrapper, TimeslotWrapper } from './styles'
import { Button, Radio, List, Card } from 'antd'

import Heading from '../../common/heading'

class NowShowing extends React.Component {
    render() {
        const movieInfos = [{title: "Movie", description: "hey", imgUrl: "https://classic.imgix.net/movies/thumbnails/../other/l0FATbzEOIDerPfjsxKP9YT8W4e.jpg?auto=compress,format&w=610&h=255&fit=crop&v=20191213", timeslots: ["14:40", "15:20"]},
                            {title: "Movie", description: "hey", imgUrl: "https://classic.imgix.net/movies/thumbnails/../other/l0FATbzEOIDerPfjsxKP9YT8W4e.jpg?auto=compress,format&w=610&h=255&fit=crop&v=20191213", timeslots: ["14:40", "15:20"]},
                            {title: "Movie", description: "hey", imgUrl: "https://classic.imgix.net/movies/thumbnails/../other/l0FATbzEOIDerPfjsxKP9YT8W4e.jpg?auto=compress,format&w=610&h=255&fit=crop&v=20191213", timeslots: ["14:40", "15:20", "16:30", "16:30", "16:30", "16:30"]},
                            { title: "Movie", description: "hey", imgUrl: "https://classic.imgix.net/movies/thumbnails/../other/l0FATbzEOIDerPfjsxKP9YT8W4e.jpg?auto=compress,format&w=610&h=255&fit=crop&v=20191213", timeslots: ["14:40", "15:20"]},
    ]
        return (
            <React.Fragment>
                <Heading text="NOW SHOWING"/>
                <ContentWrapper>
                    <Filters>
                        <span className="filter-label">FILTER BY</span>
                        <Radio.Group defaultValue={0} buttonStyle="solid">
                            <Radio.Button value={0}>ALL</Radio.Button>
                            <Radio.Button value={1}>TODAY</Radio.Button>
                            <Radio.Button>TOMORROW</Radio.Button>
                            <Radio.Button>SATURDAY</Radio.Button>
                            <Radio.Button>SUNDAY</Radio.Button>
                            <Radio.Button>MONDAY</Radio.Button>
                            <Radio.Button>TUESDAY</Radio.Button>
                            <Radio.Button>WEDNESDAY</Radio.Button>
                        </Radio.Group>
                    </Filters>
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
                                <Card hoverable={true} actions={[
                                    <TimeslotWrapper>
                                        <Button.Group>
                                            {item.timeslots.map(timeslot => (
                                                <Button type="primary" key={timeslot} value={timeslot} >{timeslot}</Button>
                                            ))}
                                        </Button.Group>
                                    </TimeslotWrapper>
                                ]}
                                    cover={<a href="#"><img src={item.imgUrl} style={{ display: "block", width: "100%" }} /></a>} >
                                    <Card.Meta title={item.title} description={item.description} />

                                </Card>
                            </List.Item>
                        )} />
                    </MoviesWrapper>
                </ContentWrapper>
            </React.Fragment>
        )
    }
}

export default NowShowing