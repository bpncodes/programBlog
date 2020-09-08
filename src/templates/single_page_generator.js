import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import MainTitle from "../components/mainTitle"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import SingleCard from "../components/small_grid_card"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AltCard from "../components/cardList"
import NewSinglePost from "../components/single_post"

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      excerpt(pruneLength: 9999)
      frontmatter {
        path
        title
        author
        date
        language
        question
        difficulty
        img
        description
        descriptionImage
      }
    }
  }
`
export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title="View Post" />
      <Grid container style={{ background: "#0a192f" }}>
        <Grid item xs={0} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Typography style={{ display: "block", margin: "auto" }}>
            <Box
              textAlign="center"
              fontWeight="fontWeightRegular"
              fontSize={30}
              m={1}
              style={{ color: "#8892b0" }}
            >
              {/* {post.frontmatter.language}  */}
            </Box>
          </Typography>
          <Grid container spacing={2}>
            <NewSinglePost
              path={post.frontmatter.path}
              date={post.frontmatter.date}
              title={post.frontmatter.title}
              author={post.frontmatter.author}
              language={post.frontmatter.language}
              difficulty={post.frontmatter.difficulty}
              img={post.frontmatter.img}
              question={post.frontmatter.question}
              descriptionImage={post.frontmatter.descriptionImage}
              solution={post.excerpt}
              description={post.frontmatter.description}
            />
          </Grid>
        </Grid>
        <Grid item xs={6} sm={4}>
          <h1></h1>
        </Grid>
      </Grid>
    </Layout>
  )
}
{
  /* <Layout>
      <div>
        <Link to="/">Go Back</Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <h1>Language : {post.frontmatter.language}</h1>
        <h1>Difficulty : {post.frontmatter.difficulty}</h1>
      </div>
    </Layout> */
}
