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

const IndexPage = ({ data }) => (
  <Layout classPrefix='ap'>
    <SEO title="Home" />
    <Grid container style={{ background: "#0a192f" }}>
      <Grid item xs={0} sm={2}></Grid>
      <Grid item xs={12} sm={8}>
        <MainTitle />
        <Typography style={{ display: "block", margin: "auto" }}>
          <Box
            textAlign="left"
            fontWeight="fontWeightRegular"
            fontSize={30}
            m={1}
            style={{ color: "#8892b0" }}
          >
            interview questions
          </Box>
          <br />
        </Typography>
        <Grid container spacing={2}>
          {data.allMarkdownRemark.edges.map(post => (
            <SingleCard
              key={post.node.id}
              title={post.node.frontmatter.title}
              description={post.node.html}
              path={post.node.frontmatter.path}
              language={post.node.frontmatter.language}
              difficulty={post.node.frontmatter.difficulty}
              img={post.node.frontmatter.img}
              question={post.node.frontmatter.question}
            />
          ))}
        </Grid>
      </Grid>
      <Grid item xs={6} sm={4}>
        <h1></h1>
      </Grid>
    </Grid>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            title
            path
            author
            date
            language
            question
            difficulty
            img
          }
        }
      }
    }
  }
`

export default IndexPage

{
  /* <div key={post.node.id}>
                <h3>{post.node.frontmatter.title}</h3>
                <small>
                  Posted By {post.node.frontmatter.author} on{" "}
                  {post.node.frontmatter.date}
                </small>
                <br />
                Language : {post.node.frontmatter.language}
                <br />
                <Link to={post.node.frontmatter.path}>Read More</Link>
                <br />
                <br />
                <br />
              </div> */
}
