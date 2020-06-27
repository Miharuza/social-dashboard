import React from "react"
import {
  Heading,
  Text,
  useColorMode,
  Switch,
  Flex,
  Box,
  FormLabel,
  SimpleGrid,
} from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FollowersCard from "../components/followersCard"

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

      <SimpleGrid columns={4} spacing={8} mt={8}>
        <FollowersCard
          username="miha.prijon"
          stat={530}
          change={5}
          social="facebook"
        />
        <FollowersCard
          username="@prijon16"
          stat={530}
          change={5}
          social="twitter"
        />
        <FollowersCard
          username="@miharuza"
          stat={530}
          change={5}
          social="instagram"
        />
        <FollowersCard
          username="TheLordisick"
          stat={530}
          change={5}
          social="youtube"
        />
      </SimpleGrid>
    </Layout>
  )
}

export default IndexPage
