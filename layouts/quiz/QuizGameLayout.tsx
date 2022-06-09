import React, { FC } from "react";
import { Heading, VStack } from "@chakra-ui/react";
import { QuizBaseLayout } from ".";
import "@fontsource/montserrat/700.css";
import { Timer } from "components/quiz/Timer";

interface Props {
  quizCategory?: string;
  children?: JSX.Element | JSX.Element[] | string | string[];
  remainingTime?: number;
}

export const QuizGameLayout: FC<Props> = ({
  quizCategory,
  children,
  remainingTime,
}) => {
  return (
    <QuizBaseLayout>
      <>
        {remainingTime && <Timer remainingTime={remainingTime} />}
        <VStack height={"full"} rowGap={"2rem"}>
          <Heading color={"#FFF1DC"} fontSize={"3rem"} mt={"3.5rem"}>
            {quizCategory} 퀴즈
          </Heading>
          <VStack
            bgColor={{ base: "unset", md: "#FFD494" }}
            height={"70vh"}
            width={{ base: "100%", md: "66vw" }}
            rounded={"3xl"}
          >
            {children}
          </VStack>
        </VStack>
      </>
    </QuizBaseLayout>
  );
};
