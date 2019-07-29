import * as React from "react"
import { graphql } from "gatsby"
import * as styles from "./Index.module.scss"
import Layout from "../components/Layout/Layout"

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    const { title, description } = this.props.data.site.siteMetadata

    return (
      <Layout>
        <div className={styles.Container}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Layout>
    )
  }
}
