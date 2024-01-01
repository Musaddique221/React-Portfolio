import { Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <>
      <Text fontSize={{ lg: "5xl", base: "3xl" }}>
        <Typewriter
          options={{
            strings: ["Full Stack Developer", "React Developer", "Shopify Developer", "Wordpress Developer"],
            autoStart: true,
            loop: true,
            deleteSpeed: 70,
          }}
          fontSize="4xl"
        />
      </Text>
    </>
  );
};

export default Type;