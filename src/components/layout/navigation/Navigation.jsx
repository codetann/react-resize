import React from "react";
import { BsList, BsX } from "react-icons/bs";
import { IconButton, Heading, HStack, Spacer } from "@chakra-ui/react";

export const Navigation = ({ onOpen, isOpen, onClose }) => {
  return (
    <HStack
      top="0"
      w="100%"
      pl="2rem"
      bg="white"
      pos="fixed"
      zIndex="10"
      maxW="100vw"
      border="4px solid black"
    >
      <Heading>.resize</Heading>
      <Spacer />
      <IconButton
        h="4rem"
        w="4rem"
        color="black"
        rounded="none"
        fontSize="24px"
        _hover={{ opacity: 1 }}
        _focus={{ ring: "none" }}
        borderLeft="4px solid black"
        bg={isOpen ? "red.300" : "none"}
        onClick={isOpen ? onClose : onOpen}
        icon={isOpen ? <BsX /> : <BsList />}
      />
    </HStack>
  );
};
