import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        border={"1px solid black"}
        position={"sticky"}
        top={0}
        zIndex={999}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Box>
              <Image
                width={"50px"}
                src="https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-school-logo-design-template-vector-png-image_6705854.png"
              />
            </Box>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
                activeStyle={{ color: "red" }}
              >
                <Box>Home</Box>
              </Link>
              <Link
                to="Intro"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
                activeStyle={{ color: "red" }}
              >
                <Box>Intro</Box>
              </Link>
              <Link
                to="Animation"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
                activeStyle={{ color: "red" }}
              >
                <Box>Vision</Box>
              </Link>
              <Link 
                to="Rating"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                style={{ cursor: "pointer" }}
                activeStyle={{ color: "red" }}
                
              >
              <Box>Rating</Box>
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-school-logo-design-template-vector-png-image_6705854.png"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
