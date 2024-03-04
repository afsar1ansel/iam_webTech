import { Box, FormControl, FormHelperText, FormLabel, Heading, Image, Input, Textarea } from "@chakra-ui/react";
import { Button } from "react-scroll";

export default function Contact(){

    return (
      <Box
      className="Contact"
        mt={10}
        display="flex"
        flexDirection="column"
        alignItems="end"
        backgroundImage={
          "https://img.freepik.com/free-photo/happy-school-friends-copy-space_23-2148764068.jpg?w=1060&t=st=1709565991~exp=1709566591~hmac=dcb6dd2008cfb8090519e0c0a8614bc1a1e4b1f8ac2459eddf207b37a9183f19"
        }
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        padding={{ base: 10, md: 20, lg: 30 }}
      >
        <Heading
          color="white"
          textAlign="center"
          marginBottom={5}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontFamily="serif"
          mr={{ base: 0, md: 20, lg: 40 }}
        >
          Contact Us
        </Heading>
        <Box
          padding={10}
          width={{ base: "90%", md: "70%", lg: "40%" }}
          backgroundColor="rgba(255, 255, 255, 0.35)"
          backdropFilter="blur(2px)"
          border="1px solid rgba(255, 255, 255, 0.18)"
          borderRadius={10}
          mt={20}
        >
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormLabel marginTop={5}>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel marginTop={5}>Subject</FormLabel>
            <Input placeholder="Subject" />
            <FormLabel marginTop={5}>Message</FormLabel>
            <Textarea
              _active={{ border: "1px solid black" }}
              placeholder="Message"
            />
            {/* <Button
              type="submit"
              marginTop={5}
              backgroundColor="black"
              color="white"
              _hover={{ backgroundColor: "white", color: "black" }}
            >
              Submit
            </Button> */}
            <Input
              marginTop={5}
              backgroundColor={"#538681"}
              color={"white"}
              borderColor={"white"}
              _hover={{ cursor: "pointer" }}
              type="submit"
              value="Submit"
            />
          </FormControl>
        </Box>
      </Box>
    );
}