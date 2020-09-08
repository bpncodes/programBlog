import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Grid, CardHeader } from "@material-ui/core/"
import { Link } from "gatsby"
import Box from "@material-ui/core/Box"
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

export function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>...</StylesProvider>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    padding: 0,
    margin: "8px auto",
    background: "#ccd6f6",
  },
  media: {
    height: 140,
  },
  sec: {
    // color: "#64ffda",
    // background: "#0a192f",
  },
})

export default function SingleCard(props) {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={4} >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.img}
            title="card"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              noWrap
            >
              {props.question}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" className = {classes.sec}>
            {props.difficulty}
          </Button>
          <Button size="small" className = {classes.sec}>
            {props.language}
          </Button>

          <Button size="small" className = {classes.sec}>
            <Link to={props.path} style={{ textDecoration: "none" }}>
              View card
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
