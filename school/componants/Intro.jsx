import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Intro() {
  return (
    <Box
      className="Intro"
      margin={"auto"}
      textAlign={"center"}
      fontFamily={"monospace"}
      backgroundColor={"#ebebeb"}
      padding={"30px"}
    >
      <Heading
        // marginTop={"50px"}
        color={"red.700"}
        size={"3xl"}
        fontFamily={"inherit"}
      >
        Welcome to{" "}
      </Heading>
      <Heading color={"red.700"} size={"2xl"} fontFamily={"inherit"}>
        The Apna School
      </Heading>
      <Box
        width={"10%"}
        margin={"auto"}
        marginTop={"20px"}
        border={"5px solid #4A8FD0"}
      ></Box>
      <Heading size={"lg"}>"Empowering Minds, Shaping Futures."</Heading>
      <Text
        fontFamily={"serif"}
        marginTop={"20px"}
        fontSize={"lg"}
        marginBottom={"80px"}
      >
        Unlocking Potential, Nurturing Dreams: Where Learning Knows No Limits.
        Fostering Growth, Inspiring Excellence: Guiding Every Student Toward
        Success and Beyond.
      </Text>

      <Flex
        justifyContent={"center"}
        flexDirection={{
          base: "column",
          md: "row",
        }}
        gap={{
          base: "20px",
          md: "10px",
        }}
        marginTop={{
          base: "30px",
          md: "0px",
        }}
      >
        <Box
          width={{
            base: "100%",
            md: "10%",
          }}
          padding={"10px"}
          backgroundColor={"#0F4F8C"}
          marginBottom={{
            base: "20px",
            md: "0px",
          }}
          _hover={{
            cursor: "pointer",
            transform: "scale(1.1)",
            backgroundColor: "#4A8FD0",
          }}
        >
          <Image
            margin={"auto"}
            src="https://tbcsc.org/files/_cache/b8f9c222e5dfde109cf0795d09815d06.png"
          />
          <Text
            marginTop={"10px"}
            fontWeight={"bold"}
            color={"white"}
            fontSize={"20px"}
          >
            Enroll
          </Text>
        </Box>
        <Box
          width={{
            base: "100%",
            md: "10%",
          }}
          padding={"10px"}
          backgroundColor={"#0F4F8C"}
          marginBottom={{
            base: "20px",
            md: "0px",
          }}
          _hover={{
            cursor: "pointer",
            transform: "scale(1.1)",
            backgroundColor: "#4A8FD0",
          }}
        >
          <Image
            margin={"auto"}
            src="https://tbcsc.org/files/_cache/8a3146e154e3465699b7d8015d8110d3.png"
          />
          <Text
            marginTop={"10px"}
            fontWeight={"bold"}
            color={"white"}
            fontSize={"20px"}
          >
            Teachers
          </Text>
        </Box>
        <Box
          width={{
            base: "100%",
            md: "10%",
          }}
          padding={"10px"}
          backgroundColor={"#0F4F8C"}
          marginBottom={{
            base: "20px",
            md: "0px",
          }}
          _hover={{
            cursor: "pointer",
            transform: "scale(1.1)",
            backgroundColor: "#4A8FD0",
          }}
        >
          <Image
            margin={"auto"}
            src="https://tbcsc.org/files/_cache/ce2a9da9e420145cca9e78339f0882b9.png"
          />
          <Text
            marginTop={"10px"}
            fontWeight={"bold"}
            color={"white"}
            fontSize={"20px"}
          >
            Support
          </Text>
        </Box>
        <Box
          width={{
            base: "100%",
            md: "10%",
          }}
          padding={"10px"}
          backgroundColor={"#0F4F8C"}
          marginBottom={{
            base: "20px",
            md: "0px",
          }}
          _hover={{
            cursor: "pointer",
            transform: "scale(1.1)",
            backgroundColor: "#4A8FD0",
          }}
        >
          <Image
            margin={"auto"}
            src="https://tbcsc.org/files/_cache/0917084b9a1f188e1e7eaa9656d7a3c0.png"
          />
          <Text
            marginTop={"10px"}
            fontWeight={"bold"}
            color={"white"}
            fontSize={"20px"}
          >
            Grow
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
