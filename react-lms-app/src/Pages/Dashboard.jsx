import { Box, Image, Input, Text } from "@chakra-ui/react";
import logo from "../Components/lms-logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiFillIeCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineAccessTime } from "react-icons/md";

function Dashboard() {
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
            >
              <AiFillIeCircle size={"18px"} />
              <Text>Browse</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box h={"100vh"} w={"85%"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={"15px 20px"}
          boxShadow="base"
          bg="white"
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
        >
          <Box
            w={"50%"}
            border={"1px solid #dbd9d9"}
            boxShadow="xs"
            rounded={"base"}
            bg="white"
            p={"10px"}
          >
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"5px"} color={"#1c478d"}>
                <Box backgroundColor={"#c6c2f0"} borderRadius={"120px"}>
                    <MdOutlineAccessTime size={"40px"}/>
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
             <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"5px"} color={"#1c478d"}>
                <Box backgroundColor={"#c6c2f0"} borderRadius={"120px"}>
                    <AiOutlineCheckCircle size={"40px"}/>
                </Box>
                <Box textAlign={"left"}>
                    <Text fontWeight={"bold"}>Completed</Text>
                    <Text>4 Courses</Text>
                </Box>
            </Box>
          </Box>
        </Box>
        <Box p={"10px 20px"}>Products</Box>
      </Box>
    </Box>
  );
}
export default Dashboard;
