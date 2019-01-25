import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'

export default withRouteData(({ post }) => (
  <div>
      {console.log(post)}
    <Link to="/">{'<'} Back</Link>
    <br />
    <h3>{post.data.title}</h3>
    <p>{post.data.body}</p>
  </div>
))
