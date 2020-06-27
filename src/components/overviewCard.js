import React from "react"
import {
  Box,
  Text,
  Image,
  useColorMode,
  Flex,
  Stat,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/core"
import facebookIcon from "../images/icon-facebook.svg"
import twitterIcon from "../images/icon-twitter.svg"
import instagramIcon from "../images/icon-instagram.svg"
import youtubeIcon from "../images/icon-youtube.svg"

const OverviewCard = ({ social, stat, change, metric }) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      backgroundColor={colorMode === "light" ? "gray.100" : "gray.600"}
      p={4}
      borderRadius="lg"
    >
      <Flex justify="space-between">
        <Text>{metric}</Text>
        <Image
          src={
            social === "facebook"
              ? facebookIcon
              : social === "twitter"
              ? twitterIcon
              : social === "instagram"
              ? instagramIcon
              : social === "youtube"
              ? youtubeIcon
              : null
          }
          size="24px"
          mr={4}
        />
      </Flex>
      <Stat
        mt={4}
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <StatNumber fontSize={40} fontWeight={700}>
          {stat}
        </StatNumber>

        <StatHelpText
          color={colorMode === "light" ? "green.600" : "green.300"}
          fontWeight={700}
        >
          <StatArrow type="increase" />
          {change}%
        </StatHelpText>
      </Stat>
    </Box>
  )
}

export default OverviewCard
