import React from "react"
import PropTypes from "prop-types"
import { Box, useColorMode } from "@chakra-ui/core"

const Layout = ({ children }) => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Box
        backgroundColor={colorMode === "light" ? "gray.50" : "gray.700"}
        h={300}
        borderRadius="10px"
      />
      <Box p={8} maxW={1400} maxH="100vh" mx="auto" mt={-280}>
        <main>{children}</main>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
