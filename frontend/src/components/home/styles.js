import styled from 'styled-components'
import { Carousel as carousel} from 'antd'

export const Carousel = styled(carousel)`
    height: 320px;
    line-height: 1.5;
    background: #2b2b42;
`

export const Feature = styled.div`
    height: 320px;
    position: relative;
    background: url("https://classic.imgix.net/movies/headers/../other/l0FATbzEOIDerPfjsxKP9YT8W4e.jpg?auto=compress,format&w=1440&h=602&fit=crop&v=20191213") no-repeat;
    background-size: cover;
    overflow: hidden;

    div.text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: inherit;
        text-align: center;
    }
    
    p {
        margin: 0 0;
    }

    p.feature-title {
        text-transform: uppercase;
        font-size: 24px;
        font-weight: bold;
        color: #fff;
        margin: 20px 0;
    }

    p.feature-desc {
        font-size: 18px;
        color: #1890ff;
    }
    
    a.feature-book-link {
        padding: 15px 15px 0 15px;
        border-top: 1px solid #1890ff;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
    }
`

export const Content = styled.div`
    max-width: 1440px;
    padding: 0 40px;
    margin: 0 auto;
`

export const MoviesWrapper = styled.div`
    padding-bottom: 20px;
    .see-more-btn {
        float: right;
        border-color: transparent;
    }
`