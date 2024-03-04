import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import React, { useState, useEffect, useRef } from "react";

const Rating = () => {
  const counts = [
    { start: 0, end: 1 },
    { start: 0, end: 30 },
    { start: 0, end: 750 },
  ];
  const [currentCounts, setCurrentCounts] = useState(
    counts.map((item) => ({ count: item.start, endValue: item.end }))
  );
  const icons = [
    "https://times2.org/files/_cache/629ffb28d396757db4741cf2d74753fb.png",
    "https://times2.org/files/_cache/662f987280cc916ffbecf9662aa73197.png",
    "https://times2.org/files/_cache/287d2a589114f24910364bac6d8a5400.png",
  ];

  const names = [
    "PROVIDENCE STEM SCHOOL",
    "SCHOOL PROGRAMS",
    "CURRENT STUDENTS",
  ];

  const divRefs = useRef([]);

  useEffect(() => {
    divRefs.current = Array(counts.length)
      .fill(null)
      .map((_, index) => divRefs.current[index] || React.createRef());

    const handleScroll = () => {
      if (window.scrollY >= 900) {
        const animationDuration = 4000;
        const framesPerSecond = 60;

        const intervals = currentCounts.map((item, index) => {
          const totalFrames = (animationDuration / 1000) * framesPerSecond;
          const increment = item.endValue / totalFrames;

          return setInterval(() => {
            setCurrentCounts((prevCounts) => {
              const newCounts = [...prevCounts];
              if (newCounts[index].count + increment < item.endValue) {
                newCounts[index].count += increment;
              } else {
                newCounts[index].count = item.endValue;
                clearInterval(intervals[index]);
              }
              return newCounts;
            });
          }, 6000 / framesPerSecond);
        });

        return () => {
          intervals.forEach((interval) => clearInterval(interval));
        };
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentCounts, counts.length]);

  return (
    <Box
      className="Rating"
      display={"flex"}
      flexDirection={{ base: "column", md: "row", lg: "row", xl: "row" }}
      justifyContent={"center"}
      gap={5}
      mt={20}
      backgroundColor={"#ebebeb"}
      padding={{ base: "10px", md: "40px", lg: "40px", xl: "40px" }}
    >
      {counts.map((item, index) => (
        <div
          key={index}
          ref={(el) => (divRefs.current[index] = el)}
          // className="auto-number"
          style={{ textAlign: "center" }}
        >
          <Image margin={"auto"} src={icons[index]} />
          <Heading
            color={"#91002e"}
            fontSize={{ base: "2rem", md: "3rem", lg: "3rem", xl: "3rem" }}
            textAlign={"center"}
          >
            {index == 0 ? "#" : ""}
            {Math.round(currentCounts[index].count)}
            {index == 0 ? "" : "+"}
          </Heading>

          <Heading size={"md"} color={"#91002e"} margin={"auto"}>
            {names[index]}
          </Heading>

          <Text
            fontSize={{ base: "0.6rem", md: "0.8rem", lg: "1rem", xl: "1rem" }}
          ></Text>
        </div>
      ))}
    </Box>
  );
};

export default Rating;
