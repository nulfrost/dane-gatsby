import React from "react"

import SEO from "../components/seo"

import AppLayout from "../components/applayout"

import { Content, IntroText } from "../components/components"

const IndexPage = () => (
  <AppLayout>
    <SEO title="Home" />
    <Content>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IntroText>
          I'm a Frontend developer passionate about building{" "}
          <span style={{ color: "red" }}>fast</span> and{" "}
          <span style={{ color: "green" }}>reliable</span> web applications.
        </IntroText>
      </div>
    </Content>
  </AppLayout>
)

export default IndexPage
