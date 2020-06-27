import React from "react"
import {
  Heading,
  Text,
  useColorMode,
  Button,
  Switch,
  Flex,
  Box,
  FormLabel,
} from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Layout>
      <SEO title="Home" />
      <Flex justifyContent="space-between">
        <Box>
          <Heading>Social Media Dashboard</Heading>
          <Text>Total Followers: 23,004</Text>
        </Box>
        <Box>
          <FormLabel>
            {colorMode === "light" ? "Dark mode" : "Light mode"}
          </FormLabel>
          <Switch
            size="lg"
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
            color="cyan"
          />
        </Box>
      </Flex>
    </Layout>
  )
}

export default IndexPage
