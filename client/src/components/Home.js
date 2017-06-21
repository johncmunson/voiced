import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Tagline = styled.p`
    margin-top: 50px;
    text-align: center;
    width: 50%;
`

const Input = styled.input`
    margin-top: 125px;
    width: 500px;
    ::-webkit-input-placeholder {
        text-align: center;
    }
`

const Home = withRouter(({ history, handleSubmit }) => {
    let content
    return (
            <Wrapper>
                <Tagline><i>Voiced</i> reads a web site and turns your information into questions and answers that can be made available on Amazon Echo, Google Home and soon, Apple HomePod.</Tagline>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit(content.value)
                        history.push('/link')
                    }}
                >
                    <span>Voice your site:&nbsp;</span>
                    <Input
                        type='text'
                        innerRef={node => content = node}
                    />
                    <input type='submit' />

                </form>
            </Wrapper>
    )
})

export default Home
