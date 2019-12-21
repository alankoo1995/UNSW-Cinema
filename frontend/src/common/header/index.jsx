import React from 'react'
import { MenuContainer,SearchBar, Button } from './styles'
import { NavLink } from 'react-router-dom'
import { Row, Col, Input, Icon, Menu, Modal } from 'antd'
import { CSSTransition } from 'react-transition-group'

import LoginForm from '../forms/login-form'
import Cart from '../cart/cart'
class Header extends React.Component {
    
    state = {
        loginToggle: false,
        confirming: false,
        searching: false
    }

    handleSearchBarOnFocus = () => {
        this.setState({
            searching: true
        })
    }

    handleSearchBarOnBlur = () => {
        this.setState({
            searching: false
        })
    }

    handleCartBtnOnClick = () => {
        console.log("111")
        const cart = this.refs.cart
        cart.showDrawer()
    }

    handleLoginToggle = () => this.setState({
        loginToggle: !this.state.loginToggle
    })

    handleLoginCancel = () => {
        this.setState({
            loginToggle: false
        })
    }

    handleLoginOk = () => {
        this.setState({
            confirming: true
        })
        setTimeout(()=>{
            console.log("get data")
            this.setState({
                confirming: false
            })
        }, 1000)
    }

    render() {
        const { Search } = Input
        return (
            <React.Fragment>
                <Cart ref="cart" />
                <Modal title="title"
                    visible={this.state.loginToggle}
                    onOk={this.handleLoginOk}
                    onCancel={this.handleLoginCancel}
                    confirmLoading={this.state.confirming}>
                    <LoginForm />
                </Modal>
                <MenuContainer>
                    <Row type="flex" justify="space-between">
                        <Col>
                            <CSSTransition in={this.state.searching} timeout={200} classNames="slide">
                            <SearchBar>
                                <Search size="small" placeholder="search..." 
                                        onFocus={this.handleSearchBarOnFocus}
                                        onBlur={this.handleSearchBarOnBlur} />
                            </SearchBar>
                            </CSSTransition>
                        </Col>
                        <Col>
                            <Button className="btn-cart" icon="shopping-cart" size="small" onClick={this.handleCartBtnOnClick}/>
                            <NavLink to="/membership"><Button className="btn-reg" size="small">JOIN THE CLUB</Button></NavLink>
                            <Button className="btn-login" size="small" onClick={this.handleLoginToggle}>CLUB SIGN IN</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Menu mode="horizontal" style={{ display: "flex", justifyContent: "space-around", fontWeight: "Bold", background: "inherit" }}>
                            <Menu.Item><NavLink to="/"><Icon type="home" />HOME</NavLink></Menu.Item>
                            <Menu.Item><NavLink to="/now-showing"><Icon type="line-chart" />NOW SHOWING</NavLink></Menu.Item>
                            <Menu.Item><NavLink to="/coming-soon"><Icon type="calendar" />COMING SOON</NavLink></Menu.Item>
                            <Menu.Item><NavLink to="/about-us"><Icon type="apartment" />About Us</NavLink></Menu.Item>
                            <Menu.Item><NavLink to="/contact-us"><Icon type="message" />Contact Us</NavLink></Menu.Item>
                        </Menu>
                    </Row>
                </MenuContainer>
            </React.Fragment>
        )
    }
}

export default Header;