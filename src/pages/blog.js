import React from "react"
import Layout from "../components/layout"
import Link from "gatsby-link"

function Blog({ data }) {
  return (
    <Layout>
    {/* <Link to="/">Go back</Link>
      <div>
        <h1>Hi these are the blog posts.</h1>
        {console.log(data.allMarkdownRemark.edges)}
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>
              Posted By {post.node.frontmatter.author} on{" "}
              {post.node.frontmatter.date}
            </small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <br />
          </div>
        ))}
      </div> */}
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query BlogIndexQuery {
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             path
//             author
//             date
//           }
//         }
//       }
//     }
//   }
// `
export default Blog
