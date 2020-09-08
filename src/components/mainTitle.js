import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Image from "./image"
import { Link } from "gatsby"
import jpeg from "./main.jpeg"

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    margin: "25px auto",
    background: "#ccd6f6",
    color: "#0a192f",
  },
  sec: {
    color: "#64ffda",
    background: "#0a192f",
  },
  media: {
    height: 240,
  },
})

export default function MainTitle() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {jpeg}
          title="book"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Hey ! I'm Bipin
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I Design, Create and Develop. I'll be sharing some interview
            problems with solutions here.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link
          href="https://bipinkarki.netlify.app/"
          rel="noopener"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button size="large" >
            about me ?
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
