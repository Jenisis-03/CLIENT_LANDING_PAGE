import * as React from "react";
import {
  Box,
  Stack,
  Text,
  Icon,
  Avatar,
  Button,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { MdLocationOn, MdAccessTime } from "react-icons/md";

export default function CallToActionWithAnnotation() {
  return (
    <Center h="100vh">
      <Stack align="center" spacing={8}>
        <Stack direction="row" align="center" spacing={8}>
          <Avatar
            size="2lg"
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
            onClick={(e) => {
              const ripple = document.createElement("span");
              ripple.classList.add("ripple");
              ripple.style.left = `${e.clientX - e.target.offsetLeft}px`;
              ripple.style.top = `${e.clientY - e.target.offsetTop}px`;
              e.target.appendChild(ripple);
              setTimeout(() => {
                ripple.remove();
              }, 1000);
            }}
          />
          <Box
            borderRadius="5px"
            p="25px"
            maxW={{ base: "90%", md: "50%" }}
            maxH="50%"
            boxShadow="rgba(221, 221, 221, 0.75) 0px 0px 25px 0px"
            ml={{ base: "0", md: "auto" }}
          >
            <Stack direction="row">
              <Icon as={MdAccessTime} fontSize="18px" color="teal.500" />
              <Text color="gray.700" fontSize="16px">
                Next Available at{" "}
                <Text as="span" color="teal.500" fontSize="16px">
                  9:00 AM,Tomorrow
                </Text>
              </Text>
            </Stack>
            <Stack direction="row" pt={2}>
              <Icon as={MdLocationOn} fontSize="18px" color="teal.500" />
              <Text color="gray.600" fontSize="14px">
                B-50, Jessore Road, Rajbari, Dum Dum, Kolkata, West Bengal -700079
              </Text>
            </Stack>
            <Box borderBottom="1px solid rgb(189, 189, 189)" py={3} />
            <Text textAlign="center" color="teal.500" fontWeight={600} fontSize={18} pt={4}>
              Book Clinic Visit
            </Text>
            <Text textAlign="center" color="teal.500" fontSize={12}>
              No Booking Fee
            </Text>
          </Box>
        </Stack>
        <Button colorScheme="teal">Book Now</Button>
      </Stack>
    </Center>
  );
}