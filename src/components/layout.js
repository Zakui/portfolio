/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ScrollingProvider } from "react-scroll-section";

import Header from "./sections/header"
import Welcome from "./sections/welcome"
import Contact from './sections/contact'
import Work from './sections/work'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query AllDatasQuery {
      allProjectsJson {
        edges {
          node {
            img
            name
            link
            github
            site
            entreprise
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ScrollingProvider scrollBehavior="smooth">
        {children}
        <Header />
        <Welcome title={data.site.siteMetadata.title}/>
        <Work data={data.allProjectsJson.edges}/>
        <Contact />
        <footer>
          <p><a href="#welcome-section" className="footer-name">Jules Thea</a></p>
          <p className="created-at">&copy; Created by <strong>Jules Théa</strong></p>
        </footer>
      </ScrollingProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
