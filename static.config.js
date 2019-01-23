import React from 'react'
import axios from 'axios'

export default {
    getSiteData: () => ({
        title: 'React Static',
    }),
    getRoutes: async () => {
        const { data: posts } = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        )
        return [
            {
                path: '/blog',
                getData: () => ({
                    posts,
                }),
                children: posts.map(post => ({
                    path: `/post/${post.id}`,
                    component: 'src/containers/Post',
                    getData: () => ({
                        post,
                    }),
                })),
            },
        ]
    },
    Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
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