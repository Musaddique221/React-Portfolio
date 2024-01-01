import React from "react";
import { Flex, Text, Heading, List, ListItem } from "@chakra-ui/react";
import {
  DiJavascript1,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiReact,
  DiMongodb,
  DiWordpress,
  Diexpress,
} from "react-icons/di";

import { FaShopify } from "react-icons/fa";

import {
  SiRedux,
  SiChakraui,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";
import { Card } from "../components/Card";
import { AiFillGithub } from "react-icons/ai";
// import GitHubCalendar from "react-github-calendar";

const AboutScreen = () => {
  const skill = [
    { skill: "HTML", ic: DiHtml5 },
    { skill: "CSS", ic: DiCss3 },
    { skill: "JavaScript", ic: DiJavascript1 },
    { skill: "React js", ic: DiReact },
    { skill: "Node js", ic: DiNodejs },

    { skill: "Mongo DB", ic: DiMongodb },
    { skill: "Redux", ic: SiRedux },
    { skill: "Chakra UI", ic: SiChakraui },
    { skill: "Wordpress", ic: DiWordpress },
    { skill: "Shopify", ic: FaShopify },
  ];

  const tools = [
    { skill: "VsCode", ic: SiVisualstudiocode },
    { skill: "PostMan", ic: SiPostman },
    { skill: "Git", ic: AiFillGithub },
  ];

  return (
    <>
      <Flex
        w="full"
        mt="85px"
        justifyContent="center"
        alignItems="center"
        py="10"
        wrap="wrap"
        direction="column"
        zIndex="100"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          wrap="wrap"
          gap="10"
          borderBottom="2px"
          borderColor="black"
          shadow="lg"
          mt="10"
          backdropFilter="saturate(180%) blur(10px)"
        >
          <Flex mx="10" direction="column">
            <Heading
              as="h2"
              fontWeight="medium"
              fontSize={{ lg: "5xl", base: "3xl" }}
            >
              Know who
              <span
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                I'M
              </span>
            </Heading>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="medium"
              mt="3"
              mb="2"
            >
              Hello every one, I am{" "}
              <span
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                Musaddique Khalil Shaikh{" "}
              </span>
              , <br /> born and broughtup in Mumbai, India
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="medium"
              mt="3"
              mb="2"
            >
              I completed my{" "}
              <span
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                Graduation in commerce
              </span>{" "}
              from <br /> N.K.T college in 2022
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="medium"
              mt="3"
              mb="2"
            >
              Although I dont have any experience,
              <br /> i am fluent in{" "}
              <span
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                Javascript
              </span>{" "}
              and in{" "}
              <span
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                {" "}
                MERN stack
              </span>
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="medium"
              mt="3"
              mb="2"
            >
              I did an offline Course in{" "}
              <span
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  marginLeft: "4px",
                  marginRight: "4px",
                }}
              >
                {" "}
                Full Stack JavaScript Development from RST forum
              </span>
            </Text>
            <Text
              fontSize={{ lg: "2xl", base: "xl" }}
              fontWeight="medium"
              mt="3"
              mb="2"
            >
              Apart From Coding here are the things i Do:
            </Text>
            <List>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                Playing Cricket
              </ListItem>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                Computer games
              </ListItem>
              <ListItem
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                Fitness
              </ListItem>
            </List>
          </Flex>
        </Flex>

        <Flex
          mt="10"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h2" fontSize="5xl" fontWeight="bold">
            Professional{" "}
            <span
              style={{
                color: "gray",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              {" "}
              Skillset
            </span>
          </Heading>
          <Flex
            p="10"
            direction="row"
            justifyContent="center"
            wrap="wrap"
            gap="20"
          >
            {skill.map((item) => (
              <Card ic={item.ic}>{item.skill}</Card>
            ))}
          </Flex>
        </Flex>

        <Flex
          mt="10"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h2" fontSize="5xl" fontWeight="bold">
            Tools{" "}
            <span
              style={{
                color: "gray",
                fontWeight: "bold",
                marginLeft: "4px",
                marginRight: "4px",
              }}
            >
              {" "}
              I Use
            </span>
          </Heading>
          <Flex
            p="10"
            direction="row"
            justifyContent="center"
            wrap="wrap"
            gap="20"
          >
            {tools.map((item) => (
              <Card ic={item.ic}>{item.skill}</Card>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default AboutScreen;
