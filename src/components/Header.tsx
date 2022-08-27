import React from "react";
import { Flex, Image, Icon, Box } from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useRouter } from "next/router";

export const Header = () => {
  const { asPath, push } = useRouter();
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1240}
      mx="auto"
      alignItems="center"
      justify="flex-start"
      py={["4", "6"]}
    >
      {asPath !== "/" && (
        <Icon
          as={RiArrowLeftSLine}
          fontSize="2xl"
          cursor="pointer"
          onClick={() => push("/")}
        />
      )}
      <Box w="100%">
        <Image src="/img/Logo.svg" alt="Logo" mx="auto" />
      </Box>
    </Flex>
  );
};
