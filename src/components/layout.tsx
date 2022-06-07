import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faWordpress } from "@fortawesome/free-brands-svg-icons/faWordpress";

type Props = {
  isHomePage: boolean | undefined;
  children: any;
}

const Layout = ({ isHomePage, children }: Props) => {
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
    <header className="global-header" data-is-root-path={isHomePage}>
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
        <p>
          <FontAwesomeIcon 
            icon={faChevronDown}
            style={{
              color: "#fff",
              display: "flex",
              alignSelf: "flex-end",
            }}
            className="icon-down"
          />
        </p>
    </header>
    <div className="global-wrapper" data-is-root-path={isHomePage}>

      <main>{children}</main>

      <footer>
        <p>
          Z <FontAwesomeIcon icon={faHeart}style={{ color: "#de004e" }}/> do <FontAwesomeIcon icon={faReact} style={{ color: "#61DAFB" }} />
          {` `}
          użyto <a href="https://www.gatsbyjs.com">Gatsby</a>,
          {` `}
          by uczynić <a id="wordpress" href="https://wordpress.org/"><FontAwesomeIcon icon={faWordpress} /></a> szybszym.
        </p>
        <p>
          Copyright © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
    </div>
  )
}

export default Layout
