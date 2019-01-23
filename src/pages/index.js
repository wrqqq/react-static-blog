import React from 'react'
import { withSiteData } from 'react-static'
import Header from '../components/header/header.js'
import Categories from '../components/categories/categories.js'
import styled from 'styled-components'

const Container = styled.main`
    width: 90%;
    margin: 20px auto;
    padding: 10px;
`

const PostsContainer = styled.div`
    margin: auto 20px;
    background:#fff;
    width: 90%;
`

export default withSiteData(() => (
    <Container>
        <Header />
        <Categories />
        <PostsContainer/>
    </Container>
))