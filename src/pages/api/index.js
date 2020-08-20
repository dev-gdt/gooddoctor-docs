import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"
import styles from "./styles.module.css"
import "rapidoc"

const APIPage = (props) => {
  if (location.search) {
    let param = new URLSearchParams(location.search)

    let url = param.get("url")
    let specUrl = ""
    switch (url) {
      case "utm":
        specUrl = "http://utm.gooddoctor.local/swagger.json"
        break
      case "guandala":
        specUrl = "http://utm.gooddoctor.local/swagger.json"
        break
      case "nominatim":
        specUrl = "http://utm.gooddoctor.local/swagger.json"
        break
    }

    return (
      <Layout title={"utm page"} description="Description API">
        <rapi-doc
          rapi-doc
          id="thedoc"
          regular-font="Open Sans"
          mono-font="Roboto Mono"
          show-header="false"
          bg-color=""
          text-color=""
          nav-bg-color="#3e4b54"
          nav-text-color=""
          nav-hover-bg-color=""
          nav-hover-text-color=""
          nav-accent-color="#fd6964"
          primary-color="#ea526f"
          render-style="read"
          theme="light"
          spec-url={specUrl}
          render-style="read"
          style={{ height: "calc(100vh - 60px)", width: "100%" }}
        ></rapi-doc>
      </Layout>
    )
  }
  return (
    <Layout title={"api"} description="Description API">
      <div>
        <Link to={useBaseUrl("/api?url=utm")}>UTM Generator</Link>
      </div>
      <div>
        <Link to={useBaseUrl("/api?url=guandala")}>Guandala</Link>
      </div>
      <div>
        <Link to={useBaseUrl("/api?url=nominatim")}>Nominatim</Link>
      </div>
    </Layout>
  )
}

export default APIPage
