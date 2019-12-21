import styled from 'styled-components'

export const Heading = styled.div`
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    margin: 30px 0 15px 0;
    opacity: 0.7;
    overflow: hidden;
    h1 {
        display: inline-block;
        position: relative;

        ::before, ::after {
            content: '';
            position: absolute;
            top: 50%;
            height: 1px;
            width: 10000px;
            background: #34495e;
        }

        ::after {
            right: 100%;
            margin-right: 10px;
        }

        ::before {
            left: 100%;
            margin-left: 10px;
        }

    }
`