import React from "react"
import SEO from "../components/seo"
import AppLayout from "../components/applayout"
import { Content, IntroText } from "../components/components"

const IndexPage = () => (
  <AppLayout>
    <SEO title="Home" />
    <Content>
      <div className="flex items-center justify-center">
        <IntroText>
          I am a web developer that loves{" "}
          <span className="line-through">breaking</span> building fast and
          reliable web applications.
        </IntroText>
      </div>
    </Content>
  </AppLayout>
)

export default IndexPage
