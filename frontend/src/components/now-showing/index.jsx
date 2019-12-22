import React from 'react'
import { connect } from 'react-redux'
import { ContentWrapper, Filters, MoviesWrapper, TimeslotWrapper } from './styles'
import { Button, Radio, List, Card } from 'antd'

import Heading from '../../common/heading'
import { retrieveNowShowing } from '../../redux/actions';

class NowShowing extends React.Component {
    state = {
        weekdays: [ 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY' ],
        currentDay: 0,
        selectedDay: 0,
        filters: []
    }

    componentDidMount() {
        this.generateFilters()
        const { handleRetrieveNowShowing } = this.props
        handleRetrieveNowShowing()
    }

    generateFilters = () => {
        let currentDate = new Date()
        let currentDay = currentDate.getDay()
        let rawSerials = [0, 1, 2, 3, 4, 5, 6]
        let processingSerials = this.rotateSortedArray(rawSerials, currentDay)
        let filters = processingSerials.reduce((acc, cur)=> acc.concat(this.state.weekdays[cur]), [])
        this.setState({
            filters: filters
        })
    }

    rotateSortedArray = (array, ind) => {
        if (ind === 0)
            return array
        let rest = array.splice(0, ind)
        array = array.concat(rest)
        return array
    }
    
    handleFiltersOnChange = event => {
        this.setState({
            selectedDay: event.target.value
        })
    }
    render() {
        const movieInfos = this.props.movies.movieList

        return (
            <React.Fragment>
                <Heading text="NOW SHOWING"/>
                <ContentWrapper>
                    <Filters>
                        <span className="filter-label">FILTER BY</span>
                        <Radio.Group value={this.state.selectedDay} onChange={this.handleFiltersOnChange} buttonStyle="solid">
                            {this.state.filters.map( (weekday, index)=>
                                <Radio.Button value={index} key={index}>{weekday}</Radio.Button>
                            ) }
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
                        }} dataSource={movieInfos} renderItem={item => {
                            const { weekdays, selectedDay } = this.state
                            // let a = item.timeslots.hasOwnProperty(weekdays[selectedDay].toLowerCase())
                            // console.log(a)
                            if (!item.timeslots.hasOwnProperty(weekdays[selectedDay].toLowerCase()))
                                return <></>

                            const timeslots = item.timeslots[weekdays[selectedDay].toLowerCase()]
                            return ( <List.Item>
                                <Card hoverable={true} actions={[
                                    <TimeslotWrapper>
                                        <Button.Group>
                                            {timeslots.map(timeslot => (
                                                <Button type="primary" key={timeslot} value={timeslot} >{timeslot}</Button>
                                            ))}
                                        </Button.Group>
                                    </TimeslotWrapper>
                                ]}
                                    cover={<img src={item.imgUrl} />} >
                                    <Card.Meta title={item.title} description={(
                                        <span><b>{item.ratings}</b> · {item.description}</span>
                                    )} />

                                </Card>
                            </List.Item>
                        )}} />
                    </MoviesWrapper>
                </ContentWrapper>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {movies: state.movieList}
}

const mapDispatchToProps = dispatch => {
    return {
        handleRetrieveNowShowing() {
            dispatch(retrieveNowShowing())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NowShowing)