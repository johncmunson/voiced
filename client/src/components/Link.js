import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const P = styled.p`
    margin-top: 50px;
    text-align: center;
    width: 50%;
`

const Link = (props) => (
    <Wrapper>
        <P>Voiced is currently processing your website. In a few moments please click the link below to get some questions and answers.</P>
        <RouterLink to='/qa'>retrieve questions and answers</RouterLink>
    </Wrapper>
)

export default Link
