import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Link } from "gatsby"

export const Header = styled.header`
  ${tw`flex flex-col sm:flex-row justify-between p-3`}
`

export const NavLink = styled(Link)`
  ${tw` text-gray-500 hover:text-purple-700 text-xl sm:text-lg`}
  transition: all 0.5s;
`

export const ExternalLink = styled.a`
  ${tw`ml-5 text-gray-500 text-lg sm:text-sm hover:text-purple-700`}
  transition: all 0.5s
`

export const IntroText = styled.p`
  ${tw`text-2xl sm:text-3xl text-center text-gray-900 font-thin`}
`

export const Project = styled.a`
  ${tw`w-full sm:w-3/5 rounded-lg mb-3 flex flex-col hover:bg-gray-400 p-3`}
`
export const ProjectTitle = styled.h2`
  ${tw`text-lg uppercase font-bold underline mb-1`}
`

export const Layout = styled.main`
  ${tw`min-h-screen w-full sm:max-w-6xl mx-auto px-5 py-20 sm:py-20 sm:px-20 flex flex-col`}
`

export const Content = styled.div`
  ${tw`flex-auto p-3 flex flex-col items-center justify-center h-auto`}
`

export const Footer = styled.footer`
  ${tw`p-3 flex flex-col sm:flex-row items-start`}
`
