import { Flex, Image, Heading, Text, Box, Badge } from "@chakra-ui/react";
import humanImg from "@/assets/images/human.png";

export function Landing() {
  const leftSection = (
    <Box>
      <Heading
        fontSize={{ base: "2xl", md: "4xl", xl: "7xl" }}
        color="secondary"
      >
        Hi, my name <br /> is Tien{" "}
        <Text as="span" color="primary.dark">
          _
        </Text>
      </Heading>
      <Text fontSize="lg" color="secondary">
        I am{" "}
        <Text as="span" fontWeight="bold">
          a software developer/tester
        </Text>{" "}
        <br /> located in Ho Chi Minh - Viet Nam
      </Text>
    </Box>
  );
  const badgeExperience = (
    <Badge bg="primary.light" borderRadius={7} p={3} textAlign="center">
      <Text fontSize="xl">{new Date().getFullYear() - 2021}</Text>
      <Text>years of experience</Text>
    </Badge>
  );
  const rightSection = (
    <Box mt={{ base: 10, md: 0 }}>
      <Flex justify="flex-end">{badgeExperience}</Flex>
      <Image src={humanImg} w={400} />
    </Box>
  );

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-evenly"
      mt={{ base: 50, md: 150 }}
    >
      {leftSection}
      {rightSection}
    </Flex>
  );
}
