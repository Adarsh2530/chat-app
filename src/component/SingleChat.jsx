import { Box, IconButton, Text } from '@chakra-ui/react';
import React from 'react'
import { ChatState } from '../context/ChatProvider';
import { ArrowBackIcon } from "@chakra-ui/icons";
import UpdateGroupChatModel from './UpdateGroupChatModel';
import { getsender, getsenderFull } from '../config/chatlogic';
import ProfileModel from './miscellaneous/ProfileModel';
export const SingleChat = ({ fetchAgain, setFetchAgain }) => {

    const { user, selectedchat, setSelectedchat } = ChatState();

    return (
        <>
            {
                selectedchat ? (<>

                    <Text
                        fontSize={{ base: "28px", md: "30px" }}
                        pb={3}
                        px={2}
                        w="100%"
                        fontFamily="Work sans"
                        d="flex"
                        justifyContent={{ base: "space-between" }}
                        alignItems="center">


                        <IconButton
                            d={{ base: "flex", md: "none" }}
                            icon={<ArrowBackIcon />}
                            colorScheme="blue"
                            onClick={() => setSelectedchat("")}
                        />

                        {!selectedchat.isGroupChat ? (
                            <>
                                {getsender(user, selectedchat.users)}
                                <ProfileModel user={getsenderFull(user, selectedchat.users)} />
                            </>
                        ) : (
                            <>
                                {selectedchat.chatName.toUpperCase()}
                                <UpdateGroupChatModel
                                    fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
                                {/* <Box
                                    d="flex"
                                    flexDir="column"
                                    justifyContent="flex-end"
                                    p={3}
                                    bg="#E8E8E8"
                                    w="100%"
                                    h="100%"
                                    borderRadius="lg"
                                    // overflowY="hidden"
                                    bgColor={"#120e18"}
                                >

                                </Box> */}
                            </>

                        )
                        }

                    </Text>

                </>
                ) : (

                    <Box d="flex" alignItems={"center"} justifyContent="center" h="100%">
                        <Text fontSize={"3xl"} pb={3} fontFamily="Work sans" >
                            Click on a user to start chatting
                        </Text>
                    </Box>
                )
            }
        </>
    )
}
