import { Box, Heading, Image, border } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box className="Home" marginBottom={0} >
      <Image
        width={"100%"}
        height={600}
        objectFit={"cover"}
        src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image"
      />
    </Box>
  );
}
