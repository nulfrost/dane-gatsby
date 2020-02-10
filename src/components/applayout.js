import React from "react"
import {
  Header,
  Layout,
  NavLink,
  Footer,
  ExternalLink,
} from "../components/components"

const AppLayout = ({ children }) => (
  <>
    <Layout>
      <Header>
        <h1>Dane Miller</h1>
        <nav>
          <NavLink to="/">home</NavLink>
          <NavLink to="/projects">projects</NavLink>
        </nav>
      </Header>
      {children}
      <Footer>
        <a href="mailto:khadane.miller@gmail.com" className="text-xs">
          Contact me!
        </a>
        <div>
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
        </div>
      </Footer>
    </Layout>
  </>
)

export default AppLayout
