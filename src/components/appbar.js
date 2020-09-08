import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Avatar from "@material-ui/core/Avatar"
import AccountCircle from "@material-ui/icons/AccountCircle"
import FaceSharpIcon from "@material-ui/icons/FaceSharp"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: "#64ffda",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#0a192f" }}>
        <Toolbar color="transparent">
          <Grid
            container
            alignContent="center"
            alignItems="center"
            justify="space-evenly"
          >
            <Grid item xs={12} sm={6}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                style={{ display: "block", margin: "auto" }}
              >
                <Link
                  href="https://bipinkarki.netlify.app/"
                  rel="noopener"
                  target="_blank"
                >
                  <FaceSharpIcon fontSize="large" className={classes.root} />
                </Link>
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>
                <Box textAlign="center" m={1}>
                  <Button className={classes.root}>
                    <Link
                      className={classes.root}
                      style={{ textDecoration: "none" }}
                      to="/"
                    >
                      Home
                    </Link>
                  </Button>
                  <Button className={classes.root}>
                    <Link
                      className={classes.root}
                      style={{ textDecoration: "none" }}
                      rel="noopener"
                      target="_blank"
                      href="https://github.com/"
                    >
                      Github
                    </Link>
                  </Button>
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
