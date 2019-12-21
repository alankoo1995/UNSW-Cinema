import React from 'react'
import { CartWrapper, ItemWrapper, CartItem, CheckoutWrapper, AmountWrapper } from './styles'
import { Drawer, Divider, Button, Avatar, List, InputNumber, Icon, Statistic, Row } from 'antd'

class Cart extends React.Component {
    state = {
        cartVisible: false,
        items: [1, 2, 3,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    }

    showDrawer = () => {
        this.setState({
            cartVisible: true
        })
    }

    handleCartClose = () => {
        this.setState({
            cartVisible: false
        })
    }

    render() {
        return (
            <CartWrapper>
                <Drawer title="Shopping Cart" placement="right" closable={true} onClose={this.handleCartClose} 
                        visible={this.state.cartVisible}>
                    <ItemWrapper>
                        <List block itemLayout="vertical" dataSource={this.state.items} 
                                renderItem={item=>(
                                // <List.Item extra={<img width={100} src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />} >
                                //     <List.Item.Meta
                                //         title={<a href="#">{item}</a>}
                                //         description={<AmountWrapper>
                                //             <label>Amount: </label>
                                //             <InputNumber defaultValue={2} size="small" />
                                //         </AmountWrapper>}
                                //     />
                                // </List.Item>
                                <List.Item extra={<img width={90} src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}>
                                    <List.Item.Meta title="12345678990"
                                                    description={
                                                    <AmountWrapper>
                                                        <div>
                                                            <span>${12} x {2} = ${24}</span>
                                                        </div>
                                                        <InputNumber size="small" min={1} defaultValue={2} />
                                                        <Button className="close-btn" size="small" icon="close-circle" />
                                                    </AmountWrapper>}
                                    />
                                </List.Item>
                        )} />
                    </ItemWrapper>
                    <CheckoutWrapper>
                        <Divider />
                        <Row>
                            <span style={{fontSize: "18px", fontWeight: "bold"}}>Total</span>
                            <Statistic value={123} prefix="$" precision={2} style={{ float: "right" }} />
                        </Row>
                        <Button block type="primary">Checkout</Button>
                    </CheckoutWrapper>
                </Drawer>
            </CartWrapper>
        )
    }
}

export default Cart