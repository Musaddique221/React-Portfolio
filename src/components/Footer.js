import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Flex p="5" as="footer" justifyContent="center" bgColor="gray.400" pt="4" zIndex="sticky">
        <Text fontWeight="bold" fontSize="2xl" >Copyright © 2022 </Text>
      </Flex>
    </>
  );
};

export default Footer;
