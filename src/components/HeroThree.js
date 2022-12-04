import { Flex,  Text, Heading, Link, Icon } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
const HeroThree = () => {
  return (
    <>
      <Flex
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        m="3"
        w="full"
        h="300px"
        p="7"
        wrap="wrap"
        backdropFilter="saturate(180%) blur(10px)"

      >
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          p="5"
          borderBottom="1px"
          shadow="lg"
          borderColor="gray.200"
        >
          <Heading as="h2" fontSize="4xl">
            Find Me On
          </Heading>
          <Text fontSize={{ lg: "2xl", base: "xl" }} mt="4">
            Feel free to Connect with me
          </Text>
          <Flex mt="4" direction="row" gap="10">
            <Link href="https://Github.com/Musaddique221">
              <Icon as={BsGithub} w="8" h="8" />
            </Link>
            <Link href="https://www.Linkedin.com/in/musaddique-shaikh-23246a228">
              <Icon as={BsLinkedin} w="8" h="8" />
            </Link>
            <Link href="/">
              <Icon as={BsTwitter} w="8" h="8" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HeroThree;