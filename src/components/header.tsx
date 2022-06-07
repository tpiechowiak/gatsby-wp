import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";

type Props = {
  isHomePage: boolean | undefined;
}

const Header = ({ isHomePage }: Props) => {
  const {
    wp: {
      generalSettings: { description },
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
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
        </header>
    </div>
  )
}

export default Header;
