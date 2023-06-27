import React from 'react'
import {Box, Flex, Text} from "@chakra-ui/react"
import {FaWhatsappSquare} from "react-icons/fa"

export const Topnav = () => {
    

  return (
    <>
    <Box border="2px solid green" w="100%" h="30vh" bg="darkgreen" >
       
       <Flex justifyContent={"space-between"} w="10%" h="10vh" ml="250px" gap="5" >
            <Text mt="5" fontSize={"2rem"}><FaWhatsappSquare/> </Text>
             <Text mt="5" fontSize={"1.2rem"} color={"#fff"} fontWeight={"600"} letterSpacing={1}> WHATSAPP  </Text>
       </Flex>

    </Box>
    
    </>
  )
}
