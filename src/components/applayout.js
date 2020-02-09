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
          <NavLink to="/">home</NavLink>
          <NavLink to="/projects">projects</NavLink>
        </Nav>
      </Header>
      {children}
      <Footer>
        <a href="mailto:khadane.miller@gmail.com" className="text-xs">
          Contact me!
        </a>
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
