import { Box,  Flex, Heading, Icon, Link } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Flex
        bgColor="gray.400"
        shadow="md"
        position="fixed"
        zIndex="sticky"
        w="full"
        borderBottom="2px"
        as="header"
        justifyContent="space-between"
        alignItems="center"
        p="3"
        direction={{ lg: "row", md: "column", base: "column" }}
      >
        <Flex alignItems="center">
          <Link as={RouterLink} to="/" _hover={{ textDecor: "underline" }}>
            <Heading
              ml={{ lg: "226px", md: "200px", base: "0" }}
              as="h2"
              fontSize="3xl"
              textShadow="1px 1px "
            >
              Musaddique Shaikh
            </Heading>
          </Link>
        </Flex>

        <Flex mt="3" alignItems="center" gap="6" justifyContent="space-evenly">
          <Link as={RouterLink} to="/about" fontSize="xl" fontWeight="bold">
            About
          </Link>
          <Link as={RouterLink} to="/projects" fontSize="xl" fontWeight="bold">
            Projects
          </Link>
          <Link as={RouterLink} to="/resume" fontSize="xl" fontWeight="bold">
            Resume
          </Link>
        </Flex>
        <Box
          mr={{ lg: "163px", md: "140px", base: "0" }}
          display={{ lg: "block", md: "block", base: "block"}}
          marginTop={{lg: "2", md: "2", base: "2"}}

        >
          <Flex
            alignItems="center"
            gap="3"
            justifyContent="space-evenly"
            direction="row"
          >
            <Link as={RouterLink} to="https://Github.com/Musaddique221">
              <Icon as={BsGithub} w="5" h="5" mx="2" />
            </Link>
            <Link
              as={RouterLink}
              to="https://www.Linkedin.com/in/musaddique-shaikh-23246a228"
            >
              <Icon as={BsLinkedin} w="5" h="5" mx="2" />
            </Link>
            <Link as={RouterLink} to="/">
              <Icon as={BsTwitter} w="5" h="5" mx="2" />
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
