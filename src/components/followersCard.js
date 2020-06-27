import React from "react"
import {
  Box,
  Flex,
  Image,
  Text,
  useColorMode,
  Stat,
  StatNumber,
  StatLabel,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/core"
import facebookIcon from "../images/icon-facebook.svg"
import twitterIcon from "../images/icon-twitter.svg"
import instagramIcon from "../images/icon-instagram.svg"
import youtubeIcon from "../images/icon-youtube.svg"

const FollowersCard = ({ social, username, stat, change }) => {
  const { colorMode } = useColorMode()

  return (
    <Box
      backgroundColor={colorMode === "light" ? "gray.100" : "gray.600"}
      p={4}
      borderRadius="lg"
      textAlign="center"
      borderTop="4px solid"
      borderTopColor={
        social === "facebook"
          ? "facebook.500"
          : social === "twitter"
          ? "twitter.500"
          : social === "instagram"
          ? "orange.400"
          : social === "youtube"
          ? "red.500"
          : null
      }
    >
      <Flex justify="center">
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
        <Text>{username}</Text>
      </Flex>
      <Stat mt={4}>
        <StatNumber fontSize={40} fontWeight={700}>
          {stat}
        </StatNumber>
        <StatLabel
          letterSpacing="5px"
          color={colorMode === "light" ? "gray.500" : "gray.400"}
          mb={4}
        >
          FOLLOWERS
        </StatLabel>
        <StatHelpText
          color={colorMode === "light" ? "green.600" : "green.300"}
          fontWeight={700}
        >
          <StatArrow type="increase" />
          {change} today
        </StatHelpText>
      </Stat>
    </Box>
  )
}

export default FollowersCard
