import React from "react"
import SEO from "../components/seo"
import { Content, Project, ProjectTitle } from "../components/components"
import AppLayout from "../components/applayout"

const Projects = () => (
  <AppLayout>
    <SEO title="Projects" />
    <Content>
      <h1 className="mb-3 font-bold text-xl text-left">Web</h1>
      <Project>
        <ProjectTitle>Coin Info</ProjectTitle>
        <p>View price data about various cryptocurrencies.</p>
        <p className="text-xs lowercase">
          React &bull; Styled-Components &bull; coinmarketcap api
        </p>
      </Project>
    </Content>
  </AppLayout>
)

export default Projects
