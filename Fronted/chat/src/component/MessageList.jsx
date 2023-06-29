import React from "react";
import { Avatar, Flex,  Text } from "@chakra-ui/react";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";


export const MessageList = ({selectedChat}) => {
  


  return (
    <>
      <Flex boxShadow={"lg"} w="100%" p="2" justifyContent={"space-between"} >

        <Flex w="30%" flexDirection={"row"} gap="2">
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            m="auto"
          />
          <Text textAlign={"center"} m="auto">{"Dan Abrahmov"} </Text>
        </Flex>

        <Flex w="10%" gap="2">

          <Flex mt="5">
            <BsSearch color="gray" fontSize={"1.2rem"} />
          </Flex>
          <Flex mt="5">
            <BsThreeDotsVertical color="gray" fontSize={"1.2rem"} />
          </Flex>
        </Flex>

      </Flex>

     {/* -------------------------------------------------- */}


     

     <Flex  h="72vh">

        {/* render  */}


     </Flex>



    </>
  );
};
