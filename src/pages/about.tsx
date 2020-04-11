import React from "react"
import styled from "styled-components"
import { Layout } from "@components/layout"
import { SEO } from "@components/seo"

class About extends React.Component {
  render() {
    return (
      <Layout style={{ maxWidth: "100%" }}>
        <SEO title="about taoguomao" />
        <div>test</div>
      </Layout>
    )
  }
}

export default About
