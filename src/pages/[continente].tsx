import { Flex, Text, Image, SimpleGrid, HStack, Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { CidadeItem } from "../components/CidadesItem";
import { Header } from "../components/Header";
import { Continente } from "../util/Continentes";

interface ContinentesProps {
  name: string;
  slogan: string;
  img: string;
  description: string;
  languages: number;
}

export default function Continentes({
  name,
  slogan,
  img,
  description,
  languages,
}: ContinentesProps) {
  return (
    <Flex direction="column">
      <Header />
      <Flex as="section" h={500} mt="2" position="relative">
        <Image
          src={img}
          alt={name}
          w="100%"
          h={500}
          position="absolute"
          filter="auto"
          brightness="50%"
        />
        <Flex
          w="100%"
          maxW={1240}
          mx="auto"
          py={["6", "8", "14"]}
          px="4"
          justify="flex-start"
          align="flex-end"
          position="relative"
        >
          <Text
            color="gray.50"
            fontSize={["lg", "2xl", "4xl"]}
            fontWeight="bold"
          >
            {name}
          </Text>
        </Flex>
      </Flex>

      <SimpleGrid
        minChildWidth={["100%", "100%", "550px"]}
        maxW={1240}
        w="100%"
        mx="auto"
        mt="20"
        alignItems="center"
        gap="4"
        px={["4", "6"]}
      >
        <Text fontSize="md" lineHeight="2" color="gray.700">
          {description}
        </Text>
        <HStack ml="4" spacing="6">
          <Box alignSelf="center" flex="1">
            <Text
              textAlign="center"
              fontSize="4xl"
              fontWeight="bold"
              color="yellow.400"
            >
              50
            </Text>
            <Text textAlign="center" fontSize="lg" fontWeight="medium">
              Países
            </Text>
          </Box>
          <Box alignSelf="center" flex="1">
            <Text
              textAlign="center"
              fontSize="4xl"
              fontWeight="bold"
              color="yellow.400"
            >
              {languages}
            </Text>
            <Text textAlign="center" fontSize="lg" fontWeight="medium">
              Línguas
            </Text>
          </Box>
          <Box alignSelf="center" flex="1">
            <Text
              textAlign="center"
              fontSize="4xl"
              fontWeight="bold"
              color="yellow.400"
            >
              5
            </Text>
            <Text textAlign="center" fontSize="lg" fontWeight="medium">
              Cidades
            </Text>
          </Box>
        </HStack>
      </SimpleGrid>

      <Flex
        direction="column"
        maxW={1240}
        w="100%"
        mx="auto"
        mt="20"
        px={["4", "6"]}
      >
        <Text fontSize="3xl" fontWeight="medium">
          Cidades 5
        </Text>

        <SimpleGrid minChildWidth="279px" gap="6" my="6">
          <CidadeItem
            cidade="Londres"
            país="Reino Unido"
            pais_bandeira="https://img.freepik.com/fotos-gratis/close-da-bandeira-realista-do-reino-unido-com-texturas-interessantes_181624-18977.jpg?w=1380&t=st=1661619074~exp=1661619674~hmac=169304eabe5e5550eb15e7475ffb7b7f72c0b03c087760269d27bd47264580f2"
            img="https://img.freepik.com/fotos-gratis/famosa-tower-bridge-a-noite-londres-inglaterra_268835-1390.jpg?w=1380&t=st=1661619142~exp=1661619742~hmac=246cd6f423021f717b41ef09a0bb7f83f766e0325037857477e5df7b6d50ad50"
          />
          <CidadeItem
            cidade="Londres"
            país="Reino Unido"
            pais_bandeira="https://img.freepik.com/fotos-gratis/close-da-bandeira-realista-do-reino-unido-com-texturas-interessantes_181624-18977.jpg?w=1380&t=st=1661619074~exp=1661619674~hmac=169304eabe5e5550eb15e7475ffb7b7f72c0b03c087760269d27bd47264580f2"
            img="https://img.freepik.com/fotos-gratis/famosa-tower-bridge-a-noite-londres-inglaterra_268835-1390.jpg?w=1380&t=st=1661619142~exp=1661619742~hmac=246cd6f423021f717b41ef09a0bb7f83f766e0325037857477e5df7b6d50ad50"
          />
          <CidadeItem
            cidade="Londres"
            país="Reino Unido"
            pais_bandeira="https://img.freepik.com/fotos-gratis/close-da-bandeira-realista-do-reino-unido-com-texturas-interessantes_181624-18977.jpg?w=1380&t=st=1661619074~exp=1661619674~hmac=169304eabe5e5550eb15e7475ffb7b7f72c0b03c087760269d27bd47264580f2"
            img="https://img.freepik.com/fotos-gratis/famosa-tower-bridge-a-noite-londres-inglaterra_268835-1390.jpg?w=1380&t=st=1661619142~exp=1661619742~hmac=246cd6f423021f717b41ef09a0bb7f83f766e0325037857477e5df7b6d50ad50"
          />
          <CidadeItem
            cidade="Londres"
            país="Reino Unido"
            pais_bandeira="https://img.freepik.com/fotos-gratis/close-da-bandeira-realista-do-reino-unido-com-texturas-interessantes_181624-18977.jpg?w=1380&t=st=1661619074~exp=1661619674~hmac=169304eabe5e5550eb15e7475ffb7b7f72c0b03c087760269d27bd47264580f2"
            img="https://img.freepik.com/fotos-gratis/famosa-tower-bridge-a-noite-londres-inglaterra_268835-1390.jpg?w=1380&t=st=1661619142~exp=1661619742~hmac=246cd6f423021f717b41ef09a0bb7f83f766e0325037857477e5df7b6d50ad50"
          />
          <CidadeItem
            cidade="Londres"
            país="Reino Unido"
            pais_bandeira="https://img.freepik.com/fotos-gratis/close-da-bandeira-realista-do-reino-unido-com-texturas-interessantes_181624-18977.jpg?w=1380&t=st=1661619074~exp=1661619674~hmac=169304eabe5e5550eb15e7475ffb7b7f72c0b03c087760269d27bd47264580f2"
            img="https://img.freepik.com/fotos-gratis/famosa-tower-bridge-a-noite-londres-inglaterra_268835-1390.jpg?w=1380&t=st=1661619142~exp=1661619742~hmac=246cd6f423021f717b41ef09a0bb7f83f766e0325037857477e5df7b6d50ad50"
          />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Continente.map((continente) => {
    return { params: { continente: continente.name.toLowerCase() } };
  });
  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = Continente.filter(
    (continente) => continente.name.toLowerCase() === params.continente
  )[0];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...data,
    },
  };
};
