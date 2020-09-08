import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const Header = ({ siteTitle }) => <header></header>

{
  /* {siteTitle} uncomment to use siteTitle from metadata */
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

//Unused File