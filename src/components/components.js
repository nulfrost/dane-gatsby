import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import tw from "tailwind.macro"
import { Link } from "gatsby"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-80px)
  }

  to {
    opacity: 1;
    transform: translateY(0px)
  }
`

export const Header = styled.header`
  ${tw`flex flex-col justify-between p-3 sm:flex-row`}
`

export const NavLink = styled(Link)`
  ${tw`text-xl text-gray-500 hover:text-purple-700 sm:text-lg`}
  transition: all 0.5s;
`

export const ExternalLink = styled.a`
  ${tw`ml-5 text-lg text-gray-500 sm:text-sm hover:text-purple-700`}
  transition: all 0.5s
`

export const IntroText = styled.p`
  ${tw`text-2xl font-thin text-center text-gray-900 sm:text-3xl`}
  animation: ${fadeIn} 2s;
`

export const Project = styled.a`
  ${tw`flex flex-col w-full p-3 mb-3 rounded-lg md:w-3/4 lg:w-3/5 hover:bg-gray-400`}
`
export const ProjectTitle = styled.h2`
  ${tw`mb-1 text-lg font-bold underline uppercase`}
`

export const Layout = styled.main`
  ${tw`flex flex-col w-full min-h-screen px-5 py-20 mx-auto sm:max-w-6xl sm:py-20 sm:px-20`}
`

export const Content = styled.div`
  ${tw`flex flex-col items-center justify-center flex-auto h-auto p-3`}
`

export const Footer = styled.footer`
  ${tw`flex flex-col items-start p-3 sm:flex-row`}
`
