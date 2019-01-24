import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'

export default withRouteData(({ post }) => (
  <div>
    <Link to="/">{'<'} Back</Link>
    <br />
    <h3>{post.data.title}</h3>
    <p>{post.data.body}</p>
  </div>
))
