import React from "react";
import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import Head from "next/head";
import { ItemStyle } from "../components/ItemStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Lazy } from "swiper";
import { ContinenteItem } from "../components/ContinentItem";
import { Continente } from "../util/Continentes";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const styleMods = [
    { style: "vida noturna", icon: "/img/cocktail.svg" },
    { style: "praia", icon: "/img/surf.svg" },
    { style: "moderno", icon: "/img/building.svg" },
    { style: "clássico", icon: "/img/museum.svg" },
    { style: "e mais...", icon: "/img/earth.svg" },
  ];

  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>
      <Flex direction="column" w="100%">
        <Header />

        <Flex
          as="section"
          backgroundImage="https://img.freepik.com/fotos-gratis/lindo-ceu-noturno-com-estrelas-brilhantes_53876-16414.jpg?w=1060&t=st=1661540225~exp=1661540825~hmac=983d01494e2d45bcc5f864f3c4c3106c92aab2ced3c30937991ad26f47b43ab3"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          h={300}
          mt="2"
        >
          <Flex
            w="100%"
            maxW={1240}
            mx="auto"
            py={["6", "8", "14"]}
            px="4"
            justify={["center", "center", "center", "space-between"]}
            align="center"
            position="relative"
          >
            <Box>
              <Text color="gray.50" fontSize="3xl">
                5 Continentes,
              </Text>
              <Text color="gray.50" fontSize="3xl">
                infinitas possibilidades
              </Text>
              <Text color="gray.100" mt="8">
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Box>

            {isWideVersion && (
              <Image
                src="/img/Airplane.svg"
                alt="Icone de um avião"
                position="absolute"
                bottom={-6}
                right="0"
              />
            )}
          </Flex>
        </Flex>

        <Flex
          direction="column"
          as="section"
          w="100%"
          maxW={1240}
          mx="auto"
          px={["4", "4", "6"]}
          mt="20"
        >
          <Stack
            direction="row"
            w="100%"
            justify="space-around"
            spacing="8"
            flexWrap="wrap"
          >
            {styleMods.map(({ style, icon }) => (
              <ItemStyle icon={icon} style={style} key={style} />
            ))}
          </Stack>
          <Box
            borderBottomWidth="2px"
            borderColor="gray.500"
            mx="auto"
            w="90px"
            h="80px"
          ></Box>
        </Flex>

        <Flex
          direction="column"
          as="section"
          w="100%"
          maxW={1240}
          mx="auto"
          mt="20"
        >
          <Text fontSize="3xl" fontWeight="medium" textAlign="center">
            Vamos nessa?
          </Text>
          <Text fontSize="3xl" fontWeight="medium" textAlign="center">
            Então escolha seu continente
          </Text>

          <Box my="8">
            <Swiper
              lazy={true}
              navigation={true}
              modules={[Navigation, Pagination, Lazy]}
              pagination={{
                clickable: true,
              }}
              spaceBetween={30}
            >
              {Continente.map((continente) => (
                <SwiperSlide key={continente.name}>
                  <ContinenteItem
                    continente={continente.name}
                    slogan={continente.slogan}
                    img={continente.img}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
