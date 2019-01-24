import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'
import { Link } from '@reach/router'
import Header from '../components/header/header.js'
import Categories from '../components/categories/categories.js'

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



export default withRouteData(({posts}) => (
    <Container>
        <Header />
        <Categories />
        <PostsContainer>
            <ul>
                {posts.map(post => (
                    <li key={post.data.slug}>
                        <Link to={`/post/${post.data.slug}`}>{post.data.title}</Link>
                    </li>
                ))}
            </ul>
        </PostsContainer>
    </Container>
))