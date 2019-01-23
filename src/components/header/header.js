import React from 'react'
import styled from 'styled-components'


const StyledHeader = styled.header`
    padding: 0 10px;
`

const Title = styled.h1`
    margin: 0;
`

const Description = styled.p`
    color: black;
`

export default () => (
    <StyledHeader>
        <Title>Блог</Title>
        <br />
        <Description>lorem</Description>
    </StyledHeader>
)

