import axios from 'axios'
import { RETRIEVE_COMING_SOON_MOVIE_LIST, RETRIEVE_NOW_SHOWING_MOVIE_LIST} from './action-types'

const _retrieveNowShowing = data => ({
    type: RETRIEVE_NOW_SHOWING_MOVIE_LIST,
    data 
})

const _retrieveComingSoon = data => ({
    type: RETRIEVE_COMING_SOON_MOVIE_LIST,
    data
})

export const retrieveNowShowing = () => {
    return dispatch => {
        axios.get('/api/now-showing.json')
            .then(res=>{
                const data = res.data
                dispatch(_retrieveNowShowing(data.data))
            }).catch(()=>{
                console.log('error')
            })
    }
}

export const retrieveComingSoon = () => {
    return dispatch => {
        axios.get('/api/coming-soon.json')
                .then(res=> {
                    const data = res.data
                    dispatch(_retrieveComingSoon(data.data))
                }).catch(()=> {
                    console.log('error')
                })
    }
}