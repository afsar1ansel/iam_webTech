import { Box, Text } from "@chakra-ui/react";
import { TfiFacebook } from "react-icons/tfi";
import { GrLinkedin } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { FaQuora } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BsStopwatchFill } from "react-icons/bs";
import { FaTrainSubway } from "react-icons/fa6";
// import "./footer.css";

function Footer() {
  return (
    <Box
      mt={10}
      backgroundImage={"https://t3.ftcdn.net/jpg/04/45/93/90/360_F_445939048_eVX3dTGgZAiotExm7rAhIqlbC7Z9gYtn.jpg"}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      padding={{ base: 5, md: 20 }}
      justifyContent={"space-between"}
    >
      <Box
        className="footer"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        mt={1}
        mb={{ base: 10, md: 0 }}
      >
        <Box display={"flex"} flexDirection={"column"} gap={5} mt={1}>
          <Text color={"black"} fontSize={{ base: "1.5rem", md: "2rem" }}>
            Contact Us
          </Text>
          <Text
            color={"black"}
            mt={1}
            fontSize={{ base: "1rem", md: "1.1rem" }}
          >
            Address: amet,consectetur sadipiscing elit, sed do
          </Text>
          <Text color={"black"} fontSize={{ base: "1rem", md: "1.1rem" }}>
            Email id: eirmod tempor incididunt ut labore
          </Text>
          <Text color={"black"} fontSize={{ base: "1rem", md: "1.1rem" }}>
            Phone no: 1234567890
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        mt={1}
        mb={{ base: 10, md: 0 }}
      >
        <Text
          color={"black"}
          fontSize={{ base: "1.5rem", md: "2rem" }}
          textAlign={"center"}
        >
          Follow us
        </Text>
        <Box display={"flex"} justifyContent={"center"} gap={5} mb={5}>
          <TfiFacebook color="black" size={30} />
          <GrLinkedin color="black" size={30} />
          <GrInstagram color="black" size={30} />
          <FaTwitter color="black" size={30} />
          <BsYoutube color="black" size={30} />
          <FaQuora color="black" size={30} />
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        mt={{ base: 1, md: 0 }}
      >
        <Text color={"black"} fontSize={{ base: "1.5rem", md: "2rem" }}>
          Head Office
        </Text>
        <Box
          color={"black"}
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          mt={1}
        >
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <ImLocation />
            <Text fontSize={{ base: "1rem", md: "1.1rem" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing
            </Text>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <BsStopwatchFill />
            <Text fontSize={{ base: "1rem", md: "1.1rem" }}>
              Lorem ipsum dolor sit amet consectur adipisicing elit.
            </Text>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <FaTrainSubway />
            <Text fontSize={{ base: "1rem", md: "1.1rem" }}>
              Lorem ipsum dolor amet consectetur adipisicing
            </Text>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <BsStopwatchFill />
            <Text fontSize={{ base: "1rem", md: "1.1rem" }}>
              Lorem opsum asd asdsaweeq Lorem Ipsum
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
