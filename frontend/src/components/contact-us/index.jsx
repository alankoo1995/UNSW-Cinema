import React from 'react'
import { Content } from './styles'
import { Form, Input, Tag, Button, Upload, Icon } from 'antd'

import Heading from '../../common/heading'

class ContactUs extends React.Component {
    render() {
        const { CheckableTag } = Tag
        return (
            <React.Fragment>
            <Heading text="CONTACT US" />
            <Content>
                <Form layout="vertical">
                    <Form.Item label="GIVEN NAME">
                        <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item label="SURNAME">
                        <Input placeholder="Last Name" />
                    </Form.Item>
                    <Form.Item label="EMAIL ADDRESS" >
                        <Input placeholder="email@domain.com" />
                    </Form.Item>
                    <Form.Item label="MOBILE NUMBER">
                        <Input placeholder="0123456789" />
                    </Form.Item>
                    <Form.Item label="SUBJECT" >
                        <CheckableTag checked={true}>Infra</CheckableTag>
                        <CheckableTag checked={true}>Vouchers and Gift Cards</CheckableTag>
                        <CheckableTag>Employment</CheckableTag>
                        <CheckableTag>Report</CheckableTag>
                    </Form.Item>
                    <Form.Item label="ATTACHMENT" extra="Please attach materials if necessary">
                        <Upload name="attachment">
                            <Button><Icon type="upload" />Click to upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item label="MESSAGE">
                        <Input.TextArea placeholder="Type your message here..." autoSize={{ minRows: 2, maxRows: 6 }} allowClear={true} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Send Message</Button>
                    </Form.Item>
                </Form>
            </Content>
            </React.Fragment>
        )
    }
}

export default ContactUs;