import {Box, Input, Text} from "@chakra-ui/react"

function Dashboard(){
    return(
        <Box h={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Box h={"100vh"} w={"15%"} boxShadow='base' bg='white'>
                <Box border={"1px solid red"} p={"15px"}>
                    <Box>Logo</Box>
                </Box>
                <Box mt={"15px"}>
                    <Text border={"1px solid red"} p={"10px"}>Dashboard</Text>
                    <Text border={"1px solid red"} p={"10px"}>Browse</Text>
                </Box>
            </Box>
            <Box h={"100vh"} w={"85%"}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={"15px 20px"} boxShadow='base' bg='white'>
                    <Box>
                        <Input w={"400px"} placeholder="Search course name"/>
                    </Box>
                    <Box>
                    <Box>Logout</Box>
                    </Box>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"15px"} p={"20px"}>
                    <Box w={"50%"} boxShadow='xs' rounded={"base"} bg='white' p={"10px"}>In Progress</Box>
                    <Box w={"50%"} boxShadow='xs' rounded={"base"} bg='white' p={"10px"}>Completed</Box>
                </Box>
                <Box p={"10px 20px"}>Products</Box>
            </Box>

        </Box>
    )
}
export default Dashboard