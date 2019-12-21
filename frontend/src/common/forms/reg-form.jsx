import React from 'react'
import { FormWrapper } from './styles'
import { Form, Icon, Input, Button, Checkbox, Radio } from 'antd'

class RegForm extends React.Component {

    state = {
        confirmDirty: false,
        autoCompleteResult: []
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of forms: ', values)
            }
        })
    }

    handleConfirmBlur = e => {
        const { value } = e.target
        this.setState({
            confirmDirty: this.state.confirmDirty || !value
        })
    }

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props
        if (value && value !== form.getFieldValue('password')) {
            callback('The Passwords you entered does not match')
        } else {
            callback()
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true})
        }
        callback()
    }

    handleWebsiteChange = value => {
        let autoCompleteResult
        if (!value) {
            autoCompleteResult = []
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`)
        }
        this.setState({autoCompleteResult})
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const { autoCompleteResult } = this.state

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            }
        }

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <FormWrapper>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item label="Email">
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email',
                                message: 'Invalid email address'
                            }, {
                                required: true,
                                message: 'Please input your email'
                            }]
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Password" hasFeedback>
                        { getFieldDecorator('password', {
                            rules: [{
                                required: true,
                                message: "Please input your password"
                            }, {
                                validator: this.validateToNextPassword
                            }]
                        })(<Input.Password />) }
                    </Form.Item>
                    <Form.Item label="Confirm Password" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true,
                                message: "Please confirm your password"
                            }, {
                                validator: this.compareToFirstPassword
                            }]
                        })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                    </Form.Item>
                    <Form.Item label="Phone Number">
                        { getFieldDecorator('phone', {
                            rules: [{
                                required: true,
                                message: "Please input your phone number"
                            }]
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Plan">
                        {getFieldDecorator('modifier', {
                            initialValue: 'free'
                        })(<Radio.Group>
                            <Radio value="free">Free Plan</Radio>
                            <Radio value="premium">Premium Plan</Radio>
                        </Radio.Group>)}
                    </Form.Item>
                </Form>
            </FormWrapper>
        )
    }
}

const RegFormWrapper = Form.create({ name: 'normal_login' })(RegForm)

export default RegFormWrapper