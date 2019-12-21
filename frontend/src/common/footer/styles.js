import styled from 'styled-components'

export const FooterWrapper = styled.div`
    background: #2c2c2c;
`

export const Boundary = styled.div`
    box-sizing: border-box;
    color: #fff;
    max-width: 1440px;
    text-align: center;

    @media (max-width: 640px) {
        margin: 30px auto;
        padding: 0 20px;
    }

    @media (min-width: 640px) {
        margin: 60px auto;
        padding: 0 40px;
    }

    ul {
        list-style-type: none;
        padding: 0 0;
        margin: 0 0;
        @media (max-width: 640px) {
            margin-top: 15px;
        }

        .footer-item {
            color: #fff;
        }

        .footer-item:hover {
            color: #ffde5c;
        }
    }
`

export const SocialMedium = styled.ul`
    list-style-type: none;
    padding: 0 0;
    margin: 0 0;

    li.social-media{
        display: inline-block;
    }

    li.social-media a {
        color: #fff;
        
        :hover {
            color: #ffde5c;
        }
    }
    li.social-media:not(:first-child) {
        margin-left: 10px;
    }
`

export const CopyRightWrapper = styled.div`
    width: 50%;
    text-align: center;
    color: #fff;

    .creator {
        position: relative;
        color: #faad14;
        ::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 0;
            bottom: 0;
            left: 0;
            background-color: #faad14;
            visibility: hidden;
            transition: all 0.3s ease-in-out;
        }
        :hover::before {
            visibility: visible;
            height: 1px;
        }
    }
`