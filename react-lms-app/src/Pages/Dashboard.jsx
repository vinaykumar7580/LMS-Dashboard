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
import {useNavigate} from "react-router-dom"

let data = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 10,
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 40,
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 70,
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 30,
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 60,
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 100,
  },
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 10,
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 40,
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 70,
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 30,
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 60,
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coding For Beginer",
    category: "Technology",
    chapter: 2,
    progress: 100,
  },
];

function Dashboard() {

  const navigate=useNavigate()

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
          <Box
            borderRight={"5px solid #1c478d"}
            backgroundColor={"#c6c2f0"}
            color={"#1c478d"}
            fontWeight={"bold"}
            p={"10px"}
          >
            <Box
              w={"70%"}
              m={"auto"}
              display={"flex"}
              justifyContent={"left"}
              alignItems={"center"}
              gap={"10px"}
              cursor={"pointer"}
              onClick={()=>navigate("/")}
            >
              <MdOutlineSpaceDashboard size={"18px"} />
              <Text>Dashboard</Text>
            </Box>
          </Box>
          <Box fontWeight={"bold"} p={"10px"}>
            <Box
              w={"70%"}
              m={"auto"}
              display={"flex"}
              justifyContent={"left"}
              alignItems={"center"}
              gap={"10px"}
              cursor={"pointer"}
              onClick={()=>navigate("/browse")}
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
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"15px"}
          p={"20px"}
          mt={"80px"}
        >
          <Box
            w={"50%"}
            border={"1px solid #dbd9d9"}
            boxShadow="xs"
            rounded={"base"}
            bg="white"
            p={"10px"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"5px"}
              color={"#1c478d"}
            >
              <Box backgroundColor={"#c6c2f0"} borderRadius={"120px"}>
                <MdOutlineAccessTime size={"40px"} />
              </Box>
              <Box textAlign={"left"}>
                <Text fontWeight={"bold"}>In Progress</Text>
                <Text>3 Courses</Text>
              </Box>
            </Box>
          </Box>
          <Box
            w={"50%"}
            border={"1px solid #dbd9d9"}
            boxShadow="xs"
            rounded={"base"}
            bg="white"
            p={"10px"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"5px"}
              color={"#1c478d"}
            >
              <Box backgroundColor={"#c6c2f0"} borderRadius={"120px"}>
                <AiOutlineCheckCircle size={"40px"} />
              </Box>
              <Box textAlign={"left"}>
                <Text fontWeight={"bold"}>Completed</Text>
                <Text>4 Courses</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          p={"10px 20px"}
          display={"grid"}
          gridTemplateColumns={"repeat(4,1fr)"}
          alignItems={"center"}
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
                <RangeSlider
                  aria-label={["min", "max"]}
                  defaultValue={[0, el.progress]}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack bg="#1c478d" />
                  </RangeSliderTrack>
                </RangeSlider>
                <Text color={"#1c478d"} fontWeight={"bold"} fontSize={"14px"}>
                  {el.progress}% Complete
                </Text>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}
export default Dashboard;
