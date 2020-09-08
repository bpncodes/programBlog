/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { Link } from "gatsby"
import { JssProvider } from "react-jss"

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ButtonAppBar from "./appbar"
import Header from "./header"
import "./layout.css"
import BottomAppBar from "./bottomapp"
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles"

const Layout = ({ children, classPrefix }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: classPrefix,
  })

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ButtonAppBar />
      <JssProvider generateClassName={generateClassName}>
        <main>{children}</main>
      </JssProvider>
      <BottomAppBar />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
