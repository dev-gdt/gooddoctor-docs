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

  async function getUserInfo() {
    const res = axios.post("http://localhost:4000/api/v1/auth/userinfo", {
      utm_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzZGYzIiwiZW1haWwiOiJ0Y2N4c2ZAZ21haWwuY29tIiwiaWF0IjoxNTk5MDU5NzU5fQ.u7h1IyZMgaU34e2TESGtlHCiUsDZ4zv5SQf-O-okG-8;",
    })
    return res.data
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
