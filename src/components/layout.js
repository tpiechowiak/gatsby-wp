import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { description },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div>
    <header className="global-header">
    {isHomePage ? (
      <h1 className="main-heading">
        <span className="heading-home">
          <Link to="/">
            <span style={{color: "#FEDE5D"}}>import</span>&nbsp;
            <span style={{color: "#F17EDB"}}>React</span>&nbsp;
            <span style={{color: "#FEDE5D"}}>from</span>&nbsp;
            <span style={{color: "#FF8B39"}}>'react'</span>
            <span style={{color: "#99BBBB"}}>;</span>
          </Link>
        </span>
        <div className="heading-description">
          {parse(description)}
        </div>
      </h1>
    ) : (
      <Link className="header-link-home" to="/">
         <span style={{color: "#FEDE5D"}}>import</span>&nbsp;
          <span style={{color: "#F17EDB"}}>React</span>&nbsp;
          <span style={{color: "#FEDE5D"}}>from</span>&nbsp;
          <span style={{color: "#FF8B39"}}>'react'</span>
          <span style={{color: "#99BBBB"}}>;</span>
      </Link>
    )}
    <h2>
      <FontAwesomeIcon 
        icon={faChevronDown}
        style={{
          color: "#fff"
        }}
      />
    </h2>
    </header>
    <div className="global-wrapper" data-is-root-path={isHomePage}>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress</a>
      </footer>
    </div>
    </div>
  )
}

export default Layout
