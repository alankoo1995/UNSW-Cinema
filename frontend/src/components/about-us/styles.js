import styled from 'styled-components'

export const Content = styled.div`
    max-width: 1440px;
    padding: 0 40px;
    margin: 0 auto 40px auto;
`

export const Wrapper = styled.div`
    @media (min-width: 1440px) {
        width: 1440px;
    }
    @media (max-width: 1440px) {
        width: 960px;
    }
    @media (max-width: 1000px) {
        width: 650px;
    }
    @media (max-width: 640px) {
        width: 500px;
        padding: 0 30px;
    }
    @media (max-width: 320px) {
        width: 280px;
        padding: 0 0px;
    }
`

export const DividerContainer = styled.div`
    width: 203px;
    .ant-divider {
        ::before, ::after {
            border-top: 1px solid #2c2c2c;
        }
    }
`
export const MapContainer = styled.div`
    .mapouter{
        position:relative;
        text-align: left;
        @media (max-width: 1440px) {
            height:500px;
            width:600px;
        }

        @media (max-width: 768px) {
            height: 333px;
            width: 400px;
        }

        @media (max-width: 640px) {
            height: 200px;
            width: 240px;
        }
    }

    .gmap_canvas {
        overflow:hidden;
        background:none!important;
        @media (max-width: 1440px) {
            height:500px;
            width:600px;
        }
        @media (max-width: 768px) {
            height: 333px;
            width: 400px;
        }
        @media (max-width: 640px) {
            height: 200px;
            width: 240px;
        }
    }
`