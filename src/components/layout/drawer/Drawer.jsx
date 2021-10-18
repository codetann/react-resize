import React from "react";
import { VStack } from "@chakra-ui/react";

export const Drawer = ({ isOpen, onClose }) => {
  return (
    <VStack
      top="0"
      w="100%"
      pt="5rem"
      maxW="100vw"
      minH="100vh"
      pos="fixed"
      transition=".3s"
      border="4px solid black"
      transform={`translateX(${isOpen ? "0px" : "-100vw"})`}
    >
      <p>Hello</p>
    </VStack>
  );
};
