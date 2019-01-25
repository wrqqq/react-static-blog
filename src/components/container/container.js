import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'
import { Link } from '@reach/router'
import Header from '../header/header.js'
import Categories from '../categories/categories.js'

const Container = styled.main`
    width: 80%;
    margin: 20px auto;
    padding: 10px;
`

const PostsContainer = styled.ul`
    margin: 20px auto;
    padding: 10px;
    background:#fff;
    list-style-type: none;
    width: 80%;
    font-size: 24px;
`


export default withRouteData(({ posts }) => (
  <Container>
    <Header />
    <Categories />
    <PostsContainer>
      {posts.map(post => (
        <li key={post.data.slug}>
          <Link to={`/posts/${post.data.slug}`}>{post.data.title}</Link>
        </li>
            ))}
    </PostsContainer>
  </Container>
))
