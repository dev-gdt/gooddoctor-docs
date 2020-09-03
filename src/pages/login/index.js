import React, { useEffect } from "react"
import styles from "./styles.module.css"
import Layout from "@theme/Layout"
import axios from "axios"

export default function Index() {
  // http://gotama.website:4000/auth/google,
  // http://gotama.website:4000/auth/login/success
  // http://gotama.website:4000/auth/logout

  async function getUserInfo() {
    const res = fetch("http://gotama.website:4000/auth/login/success")
    return res
  }

  useEffect(() => {
    const val = getUserInfo()
    console.log(val)
  }, [])

  return (
    <Layout title={"login"} description="login">
      <div>login</div>
    </Layout>
  )
}
