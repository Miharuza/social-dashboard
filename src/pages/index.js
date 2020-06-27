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
import OverviewCard from "../components/overviewCard"

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

      <Heading mt={16} mb={4}>
        Overview - Today
      </Heading>
      <SimpleGrid columns={4} rows={2} spacing={8}>
        <OverviewCard
          social="facebook"
          stat={50}
          change={2}
          metric="Page views"
        />
        <OverviewCard social="facebook" stat={50} change={2} metric="Likes" />

        <OverviewCard social="instagram" stat={50} change={2} metric="Likes" />
        <OverviewCard
          social="instagram"
          stat={50}
          change={2}
          metric="Profile views"
        />

        <OverviewCard social="twitter" stat={50} change={2} metric="Retweets" />
        <OverviewCard social="twitter" stat={50} change={2} metric="Likes" />

        <OverviewCard social="youtube" stat={50} change={2} metric="Likes" />
        <OverviewCard
          social="youtube"
          stat={50}
          change={2}
          metric="Total views"
        />
      </SimpleGrid>
    </Layout>
  )
}

export default IndexPage
