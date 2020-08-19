import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"

const Demo = (props) => {
  return (
    <Layout title={"demo"} description="description demo">
      <div className="docusaurus-highlight-code-line">
        <h1>demo</h1>
        <p>hello world</p>
      </div>
    </Layout>
  )
}

export default Demo
