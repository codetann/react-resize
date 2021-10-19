import { useRef, useState } from "react";
import { VStack, Heading, Button, Text, Image } from "@chakra-ui/react";
import { BsCloudArrowDown } from "react-icons/bs";

export const Main = () => {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleClick = () => {
    inputRef.current.click();
  };
  const handleChange = () => {
    setFile(inputRef.current.files[0]);
  };

  return (
    <VStack
      w="100vw"
      h="100vh"
      border="4px solid black"
      p="6rem 2rem 2rem 2rem"
      maxW="9xl"
    >
      {!file && (
        <>
          <Heading mb="2rem">Upload Photo</Heading>
          <VStack
            w="100%"
            h="100%"
            p="2rem"
            maxW="900px"
            spacing="1rem"
            align="center"
            justify="center"
            border="1px dotted black"
          >
            <BsCloudArrowDown fontSize="72px" />
            <Text>Choose a photo you would like to resize/compress.</Text>
            <Text fontWeight="bold">JPEG | PNG | WEBP </Text>
            <Button onClick={handleClick}>Select Photo</Button>
            <input
              hidden
              type="file"
              ref={inputRef}
              onChange={handleChange}
              accept="image/png image/jpeg, image/webp"
            />
          </VStack>
        </>
      )}
      {file && (
        <VStack
          spacing="2rem"
          h="100%"
          justify="center"
          align="middle"
          maxW="9xl"
        >
          <Image
            border="4px solid black"
            maxH="60vh"
            src={URL.createObjectURL(file)}
          />
          <Button
            border="4px solid black"
            rounded="none"
            h="3rem"
            bg="purple.200"
          >
            Customize
          </Button>
        </VStack>
      )}
    </VStack>
  );
};
