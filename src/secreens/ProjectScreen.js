import { Flex, Heading } from "@chakra-ui/react";
import { ProjectCard } from "../components/Card";

const ProjectsScreen = () => {
  return (
    <>
      <Flex
        w="full"
        direction="column"
        justifyContent="center"
        alignItems="center"
        mt="86px"
        py="10"
        zIndex="100"
      >
        <Flex
          mt="40px"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading
            as="h2"
            fontSize={{ lg: "5xl", base: "3xl" }}
            fontWeight="medium"
          >
            My Recent Projects
          </Heading>
        </Flex>
        <Flex direction="row" justifyContent="center" wrap="wrap">
          <ProjectCard
            source="https://musaddique-ecommerce-web-app.netlify.app/"
            git="https://github.com/Musaddique221/ecommerce-web"
            src="/"
            desc="This is a Full Stack Javascript web App for ecommerce store"
          />{" "}
        </Flex>
      </Flex>
    </>
  );
};

export default ProjectsScreen;
