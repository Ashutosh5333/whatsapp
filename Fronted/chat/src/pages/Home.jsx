import React from 'react'
import HomeNav from '../component/HomeNav'
import { Avatar, Flex } from '@chakra-ui/react'
import {HiUserGroup} from "react-icons/hi"
import {PiCircleDashedLight} from "react-icons/pi"
import {MdOutlineMessage} from "react-icons/md"
import {BsThreeDotsVertical} from "react-icons/bs"


export default function Home() {


  return (
    <>
     <HomeNav/>
      <Flex border={"2px solid red"} justifyContent={"space-between"} mt='-20' h="93vh" 
       gap={"5"} bg="#F0F2F5"  boxShadow={"lg"}
      >

           {/* --------------------- Chat box Side ------------------- */}

         <Flex border={"2px solid black"} w={{md:"40vw",lg:"30vw"}}
          flexDirection={"column"}
         >
            
            <Flex  h="10vh" w="100%" gap="2" >

             {/* -------- Chat box data ------- */}
            
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

               {/*   -------   --------   */}

            </Flex> 
            
            <Flex border={"2px solid green"} h="82vh">

            </Flex>

         </Flex>

         
          {/* -------- Web --------- */}


         <Flex border={"2px solid black"} w={{md:"60vw",lg:"70vw"}} >
         
         </Flex>
         


      </Flex>
    
    </>
  )
}
