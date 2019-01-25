import React from 'react'

const fs = require('fs')
const klaw = require('klaw')
const path = require('path')
const matter = require('gray-matter')


function getPosts () {
  const items = []
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if posts directory exists //
    if (fs.existsSync('./public/posts')) {
      klaw('./public/posts')
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Create slug for URL //
            dataObj.data.slug = dataObj.data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // posts = items for below routes //
          resolve(items)
        })
    } else {
      // If src/posts directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}

export default {
  getSiteData: () => ({
    title: 'blog',
  }),
  getRoutes: async () => {
    const posts = await getPosts()
    return [
      {
        path: '/',
        component: 'src/components/container/container',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/posts/${post.data.slug}`,
          component: 'src/components/post/post',
          getData: () => ({
            post,
          }),
        })),
      },
      {

      }
    ]
  },
  Document: ({
    Html, Head, Body, children, siteData, renderMeta,
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <Body>
        {children}
        <script src="redirect.js" />
      </Body>
    </Html>
  ),
}
