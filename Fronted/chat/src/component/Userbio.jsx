import React from 'react'
import { Avatar, Flex, Input, Text } from '@chakra-ui/react'
import {HiUserGroup} from "react-icons/hi"
import {PiCircleDashedLight} from "react-icons/pi"
import {MdOutlineMessage} from "react-icons/md"
import {BsSearch, BsThreeDotsVertical} from "react-icons/bs"
import { IoMdArchive} from "react-icons/io"
const Userbio = () => {


  return (
    <>
    <Flex  h="10vh" w="100%" gap="2" p="2">

{/* -------- Chat box user ------- */}

   <Flex  w="30%"> 
   <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' 
     m="auto"
   />
   </Flex>

   <Flex  w="70%"
    justifyContent={"space-between"} gap="2" 
   >
       <Flex mt="5">
      <HiUserGroup fontSize={"1.5rem"}/>
       </Flex>
       <Flex mt="5">
      <PiCircleDashedLight fontSize={"1.5rem"}/>
       </Flex>
       <Flex mt="5">
      <MdOutlineMessage fontSize={"1.5rem"} />
       </Flex>
       <Flex mt="5">
      <BsThreeDotsVertical fontSize={"1.5rem"}/>
       </Flex>
    </Flex>

</Flex> 

    {/* ------------------------  user details  --------------------------  */}


<Flex  h="15vh" flexDirection={"column"} mt="5">

   {/*----------  serchbar ------------*/}

 <Flex h="7vh" width={{base : '100%', md : '100%', lg :'100%'}} 
     borderRadius={"20"}   bg="#e0e0de" 
   padding='5px' justifyContent={"center"} alignItems='center'>
   <Text ml='10px'><BsSearch/></Text>
   <Input borderRadius='10px'
    border='0px' placeholder='Search and Start new Chat ' variant="unstyled" padding='5px'/>
  </Flex>
  
  {/*---------    end of search bar ----------*/}

  <Flex flexDirection={"row"} gap="5" p="5">
     
     <Flex>
     <IoMdArchive color='#00a884' fontSize={"1.2rem"}/>
     </Flex>
     <Flex>
       <Text fontWeight={"500"}> Archived </Text>
     </Flex>

  </Flex>
  

</Flex>
    
    
    </>
  )
}

export default Userbio