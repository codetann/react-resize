import { Drawer } from "./drawer/Drawer";
import { Navigation } from "./navigation/Navigation";
import { VStack, useDisclosure } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack w="100%" minH="100vh" maxH="100vh" overflow="hidden">
      <Navigation isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Drawer isOpen={isOpen} />
      <VStack
        w="100%"
        transition=".3s"
        transform={`translateX(${isOpen ? "100vw" : "0"})`}
      >
        {children}
      </VStack>
    </VStack>
  );
};
