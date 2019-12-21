import React from 'react'
import { MembershipWrapper } from './styles'
import { Row, Col, Card, Button, Modal } from 'antd'

import RegForm from '../../common/forms/reg-form'

class MembershipWrapperComponent extends React.Component {

    state = {
        regToggle: false,
        modalConfirming: false
    }

    handleJoinBtn = (type) => {
        this.setState({
            regToggle: true
        })
    }

    handleJoinOk = () => {
        this.setState({
            modalConfirming: true
        })
        setTimeout(()=>{
            this.setState({
                regToggle: false,
                modalConfirming: false
            })
        }, 2000)
    }

    handleJoinCancel = () => {
        this.setState({
            regToggle: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <Modal visible={this.state.regToggle}
                        confirmLoading={this.state.modalConfirming}
                        onOk={this.handleJoinOk}
                        onCancel={this.handleJoinCancel}
                        title="Register" >
                        <RegForm />
                </Modal>
                <MembershipWrapper>
                    <Row type="flex" justify="center">
                        <Col span={12} className="membership-card-wrapper">
                            <Card className="membership-item" hoverable cover={
                                <img src="https://classic.imgix.net/movies/thumbnails/../other/l0FATbzEOIDerPfjsxKP9YT8W4e.jpg?auto=compress,format&w=610&h=255&fit=crop&v=20191213" />
                            }>
                                <h2 className="membership-card-title">Free Plan</h2>
                                <p className="membership-card-content">2 x free tickets per season</p>
                                <p className="membership-card-content">1 x discount tickets every Tuesday</p>
                                <p className="membership-card-content">1 x event every weekend</p>
                                <Button type="primary" block className="join-btn" onClick={this.handleJoinBtn}>Join Now</Button>
                            </Card>
                        </Col>
                        <Col span={12} className="membership-card-wrapper">
                            <Card className="membership-item" hoverable cover={
                                <img src="https://classic.imgix.net/movies/thumbnails/../other/l0FATbzEOIDerPfjsxKP9YT8W4e.jpg?auto=compress,format&w=610&h=255&fit=crop&v=20191213" />
                            }>
                                <h2 className="membership-card-title">Premium Plan</h2>
                                <p className="membership-card-content">6 x free tickets per season</p>
                                <p className="membership-card-content">20% discount per tickets</p>
                                <p className="membership-card-content">1 x event every weekend</p>
                                <p className="membership-card-content">1 x special meetup every month</p>
                                <p className="membership-card-content">free food including cola and popcorn</p>
                                <Button type="primary" block className="join-btn" onClick={this.handleJoinBtn}>Join Now</Button>
                            </Card>
                        </Col>
                    </Row>
                </MembershipWrapper>
            </React.Fragment>
        )
    }
}

export default MembershipWrapperComponent;