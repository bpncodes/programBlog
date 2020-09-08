import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Collapse from "@material-ui/core/Collapse"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { red } from "@material-ui/core/colors"
import FavoriteIcon from "@material-ui/icons/Favorite"
import { Grid } from "@material-ui/core/"
import ShareIcon from "@material-ui/icons/Share"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import AspectRatioIcon from "@material-ui/icons/AspectRatio"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import { Link } from "gatsby"
import Highlight from "react-highlight.js"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  smallmedia: {
    height: "auto",
    maxWidth: "100%",
    margin: "auto",
    paddingTop: "80%",
    backgroundSize: "contain",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default function NewSinglePost(props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            style={{ display: "block", margin: "auto" }}
          >
            <Link to="/" rel="noopener" target="_blank">
              <SkipPreviousIcon />
            </Link>
          </IconButton>
        }
        title={`${props.language} - ${props.difficulty}`}
        subheader={props.date}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.question}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Expand" onClick={handleExpandClick}>
          <AspectRatioIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
          View Answer
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Here is the solution of the given problem :
          </Typography>

          <SyntaxHighlighter language="python" style={atomOneDark}>
            {props.solution}
          </SyntaxHighlighter>
          {/* <iframe src={props.solution} height="400" width="100%"></iframe> */}

          <Typography paragraph>{props.description}</Typography>
          <Grid container>
            <Grid item xs="2" md="4"></Grid>
            <Grid item xs="8" md="4">
              {props.descriptionImage && (
                <CardMedia
                  className={classes.smallmedia}
                  image={props.descriptionImage}
                  title={props.title}
                  style={{ justify: "space-around" }}
                />
              )}
            </Grid>
            <Grid item xs="2" md="4"></Grid>
          </Grid>
        </CardContent>
      </Collapse>
      <CardMedia
        className={classes.media}
        image={props.img}
        title={props.title}
      />
    </Card>
  )
}
