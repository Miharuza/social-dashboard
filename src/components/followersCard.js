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

const FollowersCard = () => {
  const { colorMode } = useColorMode()
  return (
    <Box
      backgroundColor={colorMode === "light" ? "gray.100" : "gray.600"}
      p={4}
      borderRadius="lg"
      textAlign="center"
      borderTop="4px solid"
      borderTopColor="blue.500"
    >
      <Flex justify="center">
        <Image src={facebookIcon} size="24px" mr={4} />
        <Text>@miharuza</Text>
      </Flex>
      <Stat mt={4}>
        <StatNumber fontSize={40} fontWeight={700}>
          530
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
          <StatArrow type="increase" />5 today
        </StatHelpText>
      </Stat>
    </Box>
  )
}

export default FollowersCard
