import { Box, Image, Text } from "@chakra-ui/react";

interface ItemStyleProps {
  style: string;
  icon: string;
}

export const ItemStyle = ({ style, icon }: ItemStyleProps) => {
  return (
    <Box alignSelf="center">
      <Image src={icon} alt={style} m="0" />
      <Text textAlign="center" mt="6" fontSize="lg" fontWeight="medium">
        {style}
      </Text>
    </Box>
  );
};
