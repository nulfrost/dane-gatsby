import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Link } from "gatsby"

export const Header = styled.header`
  ${tw`flex justify-between  p-3`}
`

export const Nav = styled.nav`
  ${tw``}
`

export const Name = styled(Link)`
  ${tw`bg-purple-700 p-2 rounded text-white`}
`

export const NavLink = styled(Link)`
  ${tw`ml-5 text-gray-500 hover:text-purple-700`}
`

export const LinkContainer = styled.div``

export const ExternalLink = styled.a`
  ${tw`ml-5 text-gray-500 text-xs hover:text-purple-700`}
`

export const IntroText = styled.p`
  ${tw`text-xl text-center`}
`

export const SecondaryText = styled.p`
  ${tw`text-lg`}
`

export const Layout = styled.main`
  ${tw`min-h-screen max-w-6xl mx-auto py-20 px-20 flex flex-col`}
`

export const Content = styled.div`
  ${tw` flex-auto p-3 flex items-center justify-center`}
`

export const Footer = styled.footer`
  ${tw` p-3 flex justify-between items-center`}
`
