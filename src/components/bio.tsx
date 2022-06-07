/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

const Bio = () => {
  const { author } = useStaticQuery(graphql`
    query BioQuery {
      # if there was more than one user, this would need to be filtered
      author: wpUser {
        name
        firstName
        lastName
        twitter: name
        description
        avatar {
          url
        }
      }
    }
  `)

  const avatarUrl = author?.avatar?.url

  return (
    <div className="bio">
      {avatarUrl && (
        <img
          alt={author?.firstName || ``}
          className="bio-avatar"
          src={avatarUrl}
        />
      )}
        {author?.firstName && (
          <div>
            <div
              style={{
                padding: "20px 0",
              }}
            >
              Napisane przez:&nbsp; <strong>{author.firstName}&nbsp;{author.lastName}</strong>
              {` `}
              {author?.description || null}
              {` `}
              {author.name && (
                <a className="github" href={`https://github.com/${author.name || ``}`}>
                  <FontAwesomeIcon icon={faGithub} />&nbsp; GitHub {author.name}
                </a>
              )}
            </div>
          </div>
        )}
    </div>
  )
}

export default Bio
