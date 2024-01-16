import {
  Box,
  Image,
  Img,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import logo from "../Components/lms-logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiFillIeCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineAccessTime } from "react-icons/md";
import { TbBook } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleCameras,
  FcMultipleDevices,
  FcMusic,
  FcOrgUnit,
  FcPositiveDynamic,
  FcRotateCamera,
  FcSportsMode,
} from "react-icons/fc";

let data = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 10,
    price: 20,
    publish: true,
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 40,
    price: 20,
    publish: false,
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 70,
    price: 20,
    publish: true,
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 30,
    price: 20,
    publish: false,
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 60,
    price: 20,
    publish: true,
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 100,
    price: 20,
    publish: false,
  },
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 10,
    price: 20,
    publish: false,
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 40,
    price: 20,
    publish: false,
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 70,
    price: 20,
    publish: false,
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 30,
    price: 20,
    publish: true,
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 60,
    price: 20,
    publish: false,
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 100,
    price: 20,
    publish: false,
  },
];

function Browse() {
  const navigate = useNavigate();

  return (
    <Box
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box h={"100vh"} w={"15%"} boxShadow="base" bg="white">
        <Box p={"5px"}>
          <Box>
            <Image w={"100%"} h={"100%"} src={logo} alt="logo" />
          </Box>
        </Box>
        <Box mt={"15px"}>
          <Box fontWeight={"bold"} p={"10px"}>
            <Box
              w={"70%"}
              m={"auto"}
              display={"flex"}
              justifyContent={"left"}
              alignItems={"center"}
              gap={"10px"}
              cursor={"pointer"}
              onClick={() => navigate("/")}
            >
              <MdOutlineSpaceDashboard size={"18px"} />
              <Text>Dashboard</Text>
            </Box>
          </Box>
          <Box
            fontWeight={"bold"}
            p={"10px"}
            borderRight={"5px solid #1c478d"}
            backgroundColor={"#c6c2f0"}
            color={"#1c478d"}
          >
            <Box
              w={"70%"}
              m={"auto"}
              display={"flex"}
              justifyContent={"left"}
              alignItems={"center"}
              gap={"10px"}
              cursor={"pointer"}
              onClick={() => navigate("/browse")}
            >
              <AiFillIeCircle size={"18px"} />
              <Text>Browse</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box h={"100vh"} w={"85%"} overflowY={"scroll"}>
        <Box
          w={"84%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={"15px 20px"}
          boxShadow="base"
          bg="white"
          position={"fixed"}
          zIndex={50}
        >
          <Box>
            <Input w={"400px"} placeholder="Search course name" />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Box>
              <Text>Vinay Hatwar</Text>
            </Box>
            <Box>
              <Image
                borderRadius="full"
                boxSize="30px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"left"}
          alignItems={"center"}
          gap={"20px"}
          p={"20px"}
          mt={"60px"}
        >
          <Box
            border={"1px solid #dbd9d9"}
            boxShadow="xs"
            rounded={"base"}
            bg="white"
            borderRadius={"50px"}
            p={"5px 15px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5px"}
            cursor={"pointer"}
            backgroundColor={"#c6c2f0"}
            color={"#1c478d"}
            fontWeight={"bold"}
          >
            <Text>
              <FcOrgUnit />
            </Text>
            <Text>All</Text>
          </Box>
          <Box
            border={"1px solid #dbd9d9"}
            boxShadow="xs"
            rounded={"base"}
            bg="white"
            borderRadius={"50px"}
            p={"5px 15px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5px"}
            cursor={"pointer"}
            fontWeight={"bold"}
            _hover={{
              backgroundColor: "#c6c2f0",
              color: "#1c478d",
              fontWeight: "bold",
            }}
          >
            <Text>
              <FcPositiveDynamic />
            </Text>
            <Text>Accounting</Text>
          </Box>
          <Box
            border={"1px solid #dbd9d9"}
            boxShadow="xs"
            rounded={"base"}
            bg="white"
            borderRadius={"50px"}
            p={"5px 15px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5px"}
            cursor={"pointer"}
            fontWeight={"bold"}
            _hover={{
              backgroundColor: "#c6c2f0",
              color: "#1c478d",
              fontWeight: "bold",
            }}
          >
            <Text>
              <FcMultipleDevices />
            </Text>
            <Text>Computer Science</Text>
          </Box>
          <Box
            border={"1px solid #dbd9d9"}
            boxShadow="xs"
            rounded={"base"}
            bg="white"
            borderRadius={"50px"}
            p={"5px 15px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5px"}
            cursor={"pointer"}
            fontWeight={"bold"}
            _hover={{
              backgroundColor: "#c6c2f0",
              color: "#1c478d",
              fontWeight: "bold",
            }}
          >
            <Text>
              <FcEngineering />
            </Text>
            <Text>Engineering</Text>
          </Box>
          <Box
            border={"1px solid #dbd9d9"}
            boxShadow="xs"
            rounded={"base"}
            bg="white"
            borderRadius={"50px"}
            p={"5px 15px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5px"}
            cursor={"pointer"}
            fontWeight={"bold"}
            _hover={{
              backgroundColor: "#c6c2f0",
              color: "#1c478d",
              fontWeight: "bold",
            }}
          >
            <Text>
              <FcFilmReel />
            </Text>
            <Text>Filming</Text>
          </Box>
          <Box
            border={"1px solid #dbd9d9"}
            boxShadow="xs"
            rounded={"base"}
            bg="white"
            borderRadius={"50px"}
            p={"5px 15px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5px"}
            cursor={"pointer"}
            fontWeight={"bold"}
            _hover={{
              backgroundColor: "#c6c2f0",
              color: "#1c478d",
              fontWeight: "bold",
            }}
          >
            <Text>
              <FcSportsMode />
            </Text>
            <Text>Fitness</Text>
          </Box>
          <Box
            border={"1px solid #dbd9d9"}
            boxShadow="xs"
            rounded={"base"}
            bg="white"
            borderRadius={"50px"}
            p={"5px 15px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5px"}
            cursor={"pointer"}
            fontWeight={"bold"}
            _hover={{
              backgroundColor: "#c6c2f0",
              color: "#1c478d",
              fontWeight: "bold",
            }}
          >
            <Text>
              <FcMusic />
            </Text>
            <Text>Music</Text>
          </Box>
          <Box
            border={"1px solid #dbd9d9"}
            boxShadow="xs"
            rounded={"base"}
            bg="white"
            borderRadius={"50px"}
            p={"5px 15px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"5px"}
            cursor={"pointer"}
            fontWeight={"bold"}
            _hover={{
              backgroundColor: "#c6c2f0",
              color: "#1c478d",
              fontWeight: "bold",
            }}
          >
            <Text>
              <FcRotateCamera />
            </Text>
            <Text>Photography</Text>
          </Box>
        </Box>
        <Box
          p={"10px 20px"}
          display={"grid"}
          gridTemplateColumns={"repeat(4,1fr)"}
          alignItems={"flex-start"}
          gap="20px"
        >
          {data &&
            data?.map((el) => (
              <Box
                key={el.id}
                textAlign={"left"}
                border={"1px solid #dbd9d9"}
                boxShadow="xs"
                rounded={"base"}
                bg="white"
                p={"10px"}
              >
                <Img borderRadius="5px" src={el.image} alt="products" />
                <Text
                  fontWeight={"bold"}
                  fontSize={"18px"}
                  mt={"5px"}
                  noOfLines={1}
                >
                  {el.title}
                </Text>
                <Text>{el.category}</Text>
                <Box
                  display={"flex"}
                  justifyContent={"left"}
                  alignItems={"center"}
                  gap={"6px"}
                  mt={"5px"}
                >
                  <Text
                    color={"#1c478d"}
                    backgroundColor={"#c6c2f0"}
                    borderRadius={"3px"}
                    p={"1px 3px"}
                  >
                    <TbBook />
                  </Text>
                  <Text fontSize={"14px"}>{el.chapter} Chapters</Text>
                </Box>
                {el.publish ? (
                  <Box>
                    <RangeSlider
                      aria-label={["min", "max"]}
                      defaultValue={[0, el.progress]}
                    >
                      <RangeSliderTrack>
                        <RangeSliderFilledTrack bg="#1c478d" />
                      </RangeSliderTrack>
                    </RangeSlider>
                    <Text
                      color={"#1c478d"}
                      fontWeight={"bold"}
                      fontSize={"14px"}
                    >
                      {el.progress}% Complete
                    </Text>
                  </Box>
                ) : (
                  <Text
                    color={"#1c478d"}
                    fontWeight={"bold"}
                    fontSize={"14px"}
                    mt={"15px"}
                  >
                    $ {el.price}.00
                  </Text>
                )}
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}
export default Browse;
