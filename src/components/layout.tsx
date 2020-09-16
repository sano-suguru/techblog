import "semantic-ui-css/semantic.min.css"

import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import { siteMetadata } from "../../gatsby-config"
import Header from "./header"
import Footer from "./footer"

export type Props = {}

const Layout = ({ children }: React.PropsWithChildren<Props>) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          color
          repository {
            owner
            name
          }
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          position: "relative",
          paddingBottom: "120px",
          boxSizing: "border-box",
        }}
      >
        <Header
          siteTitle={data.site.siteMetadata.title}
          background={data.site.siteMetadata.color}
          repository={{
            owner: data.site.siteMetadata.repository.owner,
            name: data.site.siteMetadata.repository.name,
          }}
        />
        <main>{children}</main>
        <Footer
          background={data.site.siteMetadata.color}
          repository={{
            owner: data.site.siteMetadata.repository.owner,
            name: data.site.siteMetadata.repository.name,
          }}
        />
      </div>
    </>
  )
}

export default Layout
