import React from "react"
import { Link } from "gatsby"
import { Card } from "@components/card"
import { Layout } from "@components/layout"
import { SEO } from "@components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="about taoguomao" />
    <h1>react</h1>
    <Card></Card>
  </Layout>
)

export default SecondPage
