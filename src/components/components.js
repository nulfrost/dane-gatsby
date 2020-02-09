import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Link } from "gatsby"

export const Header = styled.header`
  ${tw`flex flex-col sm:flex-row items-center justify-between p-3`}
`

export const Nav = styled.nav`
  ${tw``}
`

export const Name = styled(Link)`
  ${tw``}
`

export const NavLink = styled(Link)`
  ${tw`ml-2 sm:ml-5 text-gray-500 hover:text-purple-700`}
  transition: all 0.5s;
`

export const LinkContainer = styled.div``

export const ExternalLink = styled.a`
  ${tw`ml-5 text-gray-500 text-xs hover:text-purple-700`}
  transition: all 0.5s
`

export const IntroText = styled.p`
  ${tw`text-2xl sm:text-3xl text-center text-gray-900 font-thin`}
`

export const SecondaryText = styled.p`
  ${tw`text-lg`}
`

export const Project = styled.div`
  ${tw`w-1/2 rounded-lg mb-3 flex flex-col`}
`
export const ProjectTitle = styled.h2`
  ${tw`text-sm uppercase font-bold underline mb-1`}
`

export const Layout = styled.main`
  ${tw`min-h-screen max-w-6xl mx-auto py-20 px-20 flex flex-col`}
`

export const Content = styled.div`
  ${tw`flex-auto p-3 flex flex-col items-center justify-center h-auto`}
`

export const Footer = styled.footer`
  ${tw`p-3 flex flex-col sm:flex-row items-center justify-between`}
`
