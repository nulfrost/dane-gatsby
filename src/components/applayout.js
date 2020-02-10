import React from "react"
import {
  Header,
  Layout,
  NavLink,
  Footer,
  ExternalLink,
} from "../components/components"
import { Link } from "gatsby"

const AppLayout = ({ children }) => (
  <>
    <Layout>
      <Header>
        <Link to="/" className="text-2xl sm:text-lg">
          {" "}
          Dane Miller
        </Link>
        <nav className="flex justify-between w-full sm:w-1/2 lg:w-1/3 items-center">
          <NavLink to="/">home</NavLink>
          <NavLink to="/projects">projects</NavLink>
          <a
            style={{ transition: "all 0.5s" }}
            href="mailto:khadane.miller@gmail.com"
            className="text-gray-500 hover:text-purple-700 text-xl sm:text-lg"
          >
            contact me
          </a>
        </nav>
      </Header>
      {children}
      <Footer>
        <div>
          {[
            {
              name: "twitter",
              link: "https://twitter.com/hybridearth",
            },
            {
              name: "github",
              link: "https://github.com/Danex2",
            },
            {
              name: "linkedin",
              link: "https://www.linkedin.com/in/dane-miller-96b461164/",
            },
          ].map(({ name, link }) => (
            <ExternalLink href={link} rel="noopener noreferrer" target="_blank">
              {name}
            </ExternalLink>
          ))}
        </div>
      </Footer>
    </Layout>
  </>
)

export default AppLayout
