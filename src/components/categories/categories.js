import React from 'react'
import styled from 'styled-components'

const StyledC  = styled.div`
    font-size: 30px;
    text-align: center;
    background: ghostwhite;
    padding: 15px; 
`

const StyledCItem = styled.a`
    margin-right: 20px;
    border-bottom: 1px solid black;
    text-decoration: none;
    color: #000;
`

function Categories() {
    return (
        <StyledC >
            <StyledCItem href='#'>Фронтенд</StyledCItem>
            <StyledCItem href='#'>Разное</StyledCItem>
        </StyledC>
    )
}

export default Categories;