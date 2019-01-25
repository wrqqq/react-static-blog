import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'
import styled from 'styled-components'

const Container = styled.div`
   width: 70%;
   background:ghostwhite;
   font-size: 25px;
   margin: auto;
   padding: 20px;
`

export default withRouteData(({ post }) => (
    <div>
        <Container>
            <Link to="/">К списку</Link>
            {console.log(post)}
            <br />
            <h3>{post.data.title}</h3>
            <p>{post.data.body}</p>
        </Container>
    </div>
))
