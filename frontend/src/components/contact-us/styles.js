import styled from 'styled-components'

export const Content = styled.div`
    max-width: 1440px;
    padding: 0 40px;
    margin: 0 auto;

    .ant-form {
        margin-bottom: 20px;
        @media (min-width: 640px) {
            width: 600px;
        }
        @media (max-width: 640px) {
            width: 300px;
        }
        @media (max-width: 320px) {
            width: 250px;
        }


    }
    .ant-form-item-label {
        text-transform: uppercase;
        font-weight: bold;
    }
`

export const FormRow = styled.div``

