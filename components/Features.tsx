import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react"
import { IoAnalyticsSharp, IoLocationSharp, IoLogoBitcoin, IoSearchSharp, IoTimeSharp } from "react-icons/io5"
import { ReactElement } from "react"

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Hello 
          </Text>
          <Heading>About ME</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
          Dr. Harshu Das is a renowned and experienced Consultant Physician. He brings with him an experience of 20 years and has been associated with some of the best hospitals. A dedicated compassionate doctor who handles many challenging cases with the latest cutting edge technology. He offers patient-friendly scientific advice to your problems while maintaining the highest professional and ethical values.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
  icon={<Icon as={IoLocationSharp} color={"yellow.500"} w={5} h={5} />}
  iconBg={useColorModeValue("yellow.100", "yellow.900")}
  text={"B-50, Jessore Road, Rajbari, Dum Dum, Kolkata, West Bengal -700079"}
/>
<Feature
  icon={<Icon as={IoTimeSharp} color={"green.500"} w={5} h={5} />}
  iconBg={useColorModeValue("green.100", "green.900")}
  text={
    <table>
      <tr>
        <th>OPD Hours</th>
        <th>Day</th>
        <th>Time</th>
      </tr>
      <tr>
        <td></td>
        <td>Monday</td>
        <td>9:00 AM-6:00 PM</td>
      </tr>
      <tr>
        <td></td>
        <td>Tuesday</td>
        <td>9:00 AM-6:00 PM</td>
      </tr>
      <tr>
        <td></td>
        <td>Wednesday</td>
        <td>9:00 AM-6:00 PM</td>
      </tr>
      <tr>
        <td></td>
        <td>Thursday</td>
        <td>9:00 AM-6:00 PM</td>
      </tr>
      <tr>
        <td></td>
        <td>Friday</td>
        <td>9:00 AM-6:00 PM</td>
      </tr>
      <tr>
        <td></td>
        <td>Saturday</td>
        <td>9:00 AM-6:00 PM</td>
      </tr>
      <tr>
        <td></td>
        <td>Sunday</td>
        <td>Closed</td>
      </tr>
    </table>}
/>
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "/home/homie/Desktop/test_1/components/OIP.jpeg"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
          }