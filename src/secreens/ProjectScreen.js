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
            source="https://lnkd.in/dyyjwxxT"
            git=" https://lnkd.in/dnZ2FTER"
            src="/"
            desc="This is a Full  Javascript  App  "
          />{" "}
        </Flex>
      </Flex>
    </>
  );
};

export default ProjectsScreen;
