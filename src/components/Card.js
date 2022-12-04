import { Flex, Heading, Icon ,Link,  Text} from "@chakra-ui/react";

export const Card = ({ children, ic }) => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        border="2px solid gray"
        borderColor="gray.400"
        p="9"
        shadow="3px 2px gray"
        _hover={{ shadow: "5px 5px 5px 5px gray" }}
        rounded="md"
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Icon as={ic} my="3" w="20" h="20" />
        <Heading my="3" as="h3" fontSize="3xl">
          {children}
        </Heading>
      </Flex>
    </>
  );
};

export const ProjectCard = ({ desc, git, source, src }) => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        // border="2px  2px solid purple"
        borderColor="black"
        p="3"
        shadow="lg"
        dropShadow="lg"
        shadowColor="gray"
        _hover={{ shadow: "4px 4px 4px 5px gray" }}
        rounded="md"
        mt="6"
        wrap="wrap"
        m="8"
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Text my="8">{desc}</Text>
        <Flex my="6" gap="10">
          <Link
            p="5"
            border="1px solid black"
            rounded="md"
            shadow="md"
            _hover={{ textDecor: "none", bgColor: "gray", fontWeight: "bold" }}
            href={git}
            target="_blank"
          >
            Browse Code
          </Link>
          <Link
            p="5"
            border="1px solid black"
            rounded="md"
            shadow="md"
            _hover={{ textDecor: "none", bgColor: "gray" ,fontWeight: "bold" }}
            href={source}
            target="_blank"
          >
            Live
          </Link>
        </Flex>
      </Flex>
    </>
  );
};
