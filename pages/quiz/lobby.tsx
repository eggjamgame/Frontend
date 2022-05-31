import { Heading, Box, Flex, VStack, Text, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { QuizLobbyLayout } from "@layouts/quiz";

const QuizLobby: NextPage = () => {
  return (
    <QuizLobbyLayout>
      <Head>
        <title>eggjamgame - 퀴즈 로비</title>
        <meta name="description" content="Eggjamgame. Quiz Lobby" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        marginTop={{ base: "25vh", md: "19rem" }}
        boxShadow={"0px 0px 0px 8px rgba(255, 212, 148, 0.5)"}
        justify={"center"}
        alignItems={"center"}
        maxHeight={"18rem"}
        height={"33%"}
        width={"100%"}
        backgroundColor={"rgba(255 212 148 / 1)"}
      >
        <Heading
          fontSize={{ base: "6xl", sm: "6xl", md: "7xl", lg: "8xl" }}
          fontWeight="bold"
        >
          인물 퀴즈
        </Heading>
      </Flex>
      <Text paddingTop={"50px"}>반갑습니다.</Text>
      <Text fontSize={"3xl"}>19년모쏠 님</Text>
      <Box>
        <Button
          borderRadius={"2xl"}
          size={"lg"}
          fontSize={"2xl"}
          height="4rem"
          paddingX={"6rem"}
          bgColor={"#844F00"}
          _hover={{
            bgColor: "brand.700",
          }}
          _active={{
            bgColor: "brand.700",
          }}
          colorScheme={"brand"}
          marginTop={"4rem"}
        >
          시작하기
        </Button>
      </Box>
    </QuizLobbyLayout>
  );
};

export default QuizLobby;