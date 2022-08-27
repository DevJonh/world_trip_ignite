import { Flex, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

interface ContinenteItemProps {
  continente: string;
  slogan: string;
  img: string;
}

export const ContinenteItem = ({
  continente,
  slogan,
  img,
}: ContinenteItemProps) => {
  return (
    <Flex
      position="relative"
      direction="column"
      align="center"
      justify="center"
      minH={450}
      w="100%"
    >
      <Image
        src={img}
        alt={continente}
        h={450}
        w="100%"
        position="absolute"
        top={0}
        left={0}
        filter="auto"
        brightness="60%"
        zIndex={-1}
      />
      <Link href={`/${continente.toLowerCase()}`}>
        <ChakraLink as="a" _hover={{ textDecoration: "none" }}>
          <Text fontSize="3xl" fontWeight="bold" color="gray.50">
            {continente}
          </Text>
          <Text fontSize="md" fontWeight="bold" color="gray.50">
            {slogan}
          </Text>
        </ChakraLink>
      </Link>
    </Flex>
  );
};
