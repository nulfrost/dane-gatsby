import React from "react"
import {
  Header,
  Layout,
  Nav,
  NavLink,
  Footer,
  ExternalLink,
  LinkContainer,
  Name,
} from "../components/components"

const AppLayout = ({ children }) => (
  <>
    <Layout>
      <Header>
        <Name>Dane Miller</Name>
        <Nav>
          <NavLink to="/projects">projects</NavLink>
          <NavLink to="/tech">tech</NavLink>
        </Nav>
      </Header>
      {children}
      <Footer>
        <small>dane@danethe.dev</small>
        <LinkContainer>
          <ExternalLink
            href="https://twitter.com/hybridearth"
            rel="noopener noreferrer"
            target="_blank"
          >
            twitter
          </ExternalLink>
          <ExternalLink
            href="https://github.com/Danex2"
            rel="noopener noreferrer"
            target="_blank"
          >
            github
          </ExternalLink>
          <ExternalLink
            href="https://github.com/Danex2"
            rel="noopener noreferrer"
            target="_blank"
          >
            linkedin
          </ExternalLink>
        </LinkContainer>
      </Footer>
    </Layout>
  </>
)

export default AppLayout
