import React from 'react'
import HomeNav from '../component/HomeNav'
import { Avatar, Divider, Flex, Heading, IconButton, Image, Input, Text } from '@chakra-ui/react'
import Userbio from '../component/Userbio'
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';
import {AiFillLock} from "react-icons/ai"
import what from "../Images/what.png";
import whatsappmob from  "../Images/whatsappmob.jpg"


const chats = [
  {
    id: 1,
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    avatar:
      'https://example.com/avatar1.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    lastMessage: 'I have sent you the document.',
    avatar:
      'https://example.com/avatar2.png',
  },
  {
    id: 3,
    name: 'Ashutosh lakshakar',
    lastMessage: 'Hey, how are you?',
    avatar:
      'https://example.com/avatar1.png',
  },
  {
    id: 4,
    name: 'Avi bahre',
    lastMessage: 'I have sent you the document.',
    avatar:
      'https://example.com/avatar2.png',
  },
  {
    id: 5,
    name: 'Uday ',
    lastMessage: 'Hey, how are you?',
    avatar:
      'https://example.com/avatar1.png',
  },
  {
    id: 6,
    name: 'Amit ',
    lastMessage: 'I have sent you the document.',
    avatar:
      'https://example.com/avatar2.png',
  },
];

export default function Home() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chatId) => {
    setSelectedChat(chatId);
  };


  return (
    <>
     <HomeNav/>
      <Flex justifyContent={"space-between"} mt='-20' h="93vh" 
       gap={"5"} bg="#F0F2F5"  boxShadow={"lg"}
      >

           {/* --------------------- Chat box Side ------------------- */}

         <Flex w={{md:"40vw",lg:"25vw"}} 
          flexDirection={"column"} border={"1px solid gray"}
      
         >
         <Userbio/>

         <Flex  h="80vh" mt="1" overflow={"scroll"} 
         boxShadow={"2xl"} bg="#fff"
          scrollBehavior={"smooth"}
         >
      <Box w={{md:"30vw",lg:"25vw"}} bg="#fff"  boxShadow={"2xl"} padding="4">
        {chats.map((chat) => (
          <Flex
            key={chat.id}
            alignItems="center"
            cursor="pointer"
            p="2"
            borderRadius="md"
            // border="2px solid green" 
            mb="2"
            backgroundColor={
              selectedChat === chat.id ? 'white' : 'transparent'
            }
            _hover={{ backgroundColor: 'white' }}
            onClick={() => handleChatClick(chat.id)}
          >
            <Avatar src={chat.avatar} name={chat.name} size="sm" />
            <Box ml="3">
              <Text fontWeight="bold">{chat.name}</Text>
              <Text fontSize="sm" color="gray.500">
                {chat.lastMessage}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>

         </Flex>
            
          
         </Flex>

         
          {/* --------------------- Web --------------------- */}

        <Flex  w={{md:"80vw",lg:"70vw"}} >
           
          { !selectedChat &&
            
           <Flex width="90%" h="90vh"
           flexDirection={"column"}
            m="auto" >
                
                 <Box  w="70%" m="auto"  gap="5"
                 display={"flex"} justifyContent={"space-between"}
                 h="40vh" >
                    <Box mt="5">
                    <Image h="140px" src={whatsappmob}  borderRadius={"lg"} m="auto" mt="5" />
                    </Box>
                    <Box>
                    <Image src={what}  borderRadius={"lg"} m="auto" mt="5" />
                    </Box>

                 </Box>

                 <Box w="70%" m="auto" h="30vh" >
                   <Heading fontWeight={"300"} textAlign={"center"} > WhatsApp Web   </Heading>

                   <Text textAlign={"center"} mt="5">Send and receive messages without keeping your phone online, 
                         Use WhasApp on up to 4linked devices and 1phone at the same time.   
                    </Text>
                </Box>

                
                <Flex w="40%" m="auto" justifyContent={"space-between"}>
                    <Flex>  
                      <Text mt="10">
                    <AiFillLock/>
                      </Text>
                    </Flex>
                     <Flex>  
                     <Text textAlign={"center"} mt="10"> End-To-end encrypted   </Text>
                     </Flex>      
                </Flex>


           </Flex>
          }

             {/* -------------- ^^^^^^^^^^^^ when user is not started chat show ^^^^^  */}

        {selectedChat && (
        <Flex flex="1" flexDirection="column">
          <Box
            flex="1"
            overflowY="auto"
            p="4"
            backgroundColor="gray.200"
          >
          </Box>
            
          <Divider />

          <Flex p="2">
            <Input placeholder="Type a message..." />
            <IconButton
              ml="2"
              icon={<FiSend />}
              aria-label="Send"
            />
          </Flex>
        </Flex>
      )}


      {/* -------- Chat send box --------- */}


        </Flex>


           {/* -------- Chat side  --------- */}

        
        
      
      
      </Flex>
         


     
    </>
  )
}
