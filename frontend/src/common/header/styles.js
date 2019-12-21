import styled from 'styled-components'
import { Button as button } from 'antd'


export const MenuContainer = styled.div`
    margin-bottom: 10px;
`
export const SearchBar = styled.div`
    margin-left: 5px;
    width: 160px;

    &.slide-enter {
        transition: all .2s ease-out;
    }

    &.slide-enter-active {
        width: 260px;
    }

    &.slide-enter-done {
        width: 260px;
    }

    &.slide-exit {
        transition: all .2s ease-out;
    }

    &.slide-exit-active {
        width: 160px;
    }

    &.slide-exit-done {
        width: 160px;
    }
`

export const Button = styled(button)`
    &.btn-reg {
    }
    &.btn-login {
        background: #ffde5c;
    }
    &.btn-cart {
    }
`

