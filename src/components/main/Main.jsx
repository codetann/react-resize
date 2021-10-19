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
      maxW="9xl"
      p="6rem 2rem 2rem 2rem"
      border="4px solid black"
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
          h="100%"
          maxW="9xl"
          align="middle"
          spacing="2rem"
          justify="center"
        >
          <Image
            maxH="60vh"
            border="4px solid black"
            src={URL.createObjectURL(file)}
          />
          <Button
            h="3rem"
            rounded="none"
            bg="purple.200"
            border="4px solid black"
          >
            Customize
          </Button>
        </VStack>
      )}
    </VStack>
  );
};
