import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"
import styles from "./styles.module.css"
const Demo = (props) => {
  return (
    <Layout title={"api"} description="Description API">
      <div>
        <h1>demo</h1>
        <p>hello world</p>
      </div>
    </Layout>
  )
}

export default Demo
