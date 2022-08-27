import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CidadeItemProps {
  img: string;
  cidade: string;
  país: string;
  pais_bandeira: string;
}

export const CidadeItem = ({
  img,
  cidade,
  pais_bandeira,
  país,
}: CidadeItemProps) => {
  return (
    <Box borderRadius="4px" border="1px solid rgba(255, 186, 8, 0.5);">
      <Image src={img} alt={cidade} />
      <Flex justify="space-between" mx="4" my="4" align="center">
        <Box>
          <Text fontWeight="medium" fontSize="lg">
            {cidade}
          </Text>
          <Text mt="2" color="gray.500">
            {país}
          </Text>
        </Box>
        <Image
          w="30px"
          h="30px"
          src={pais_bandeira}
          alt={país}
          borderRadius="50%"
        />
      </Flex>
    </Box>
  );
};
