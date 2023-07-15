import { EmailIcon, TimeIcon } from "@chakra-ui/icons"
import { Popover, PopoverTrigger, Button, Flex, PopoverContent, PopoverHeader, PopoverArrow, PopoverCloseButton, PopoverBody, List, ListItem, ListIcon, PopoverFooter, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"
import { BsLightbulbFill, BsPencilFill, BsPeopleFill } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io5"
import React from 'react';

export const ApplyButtonWithPopover = () => {
    const initialFocusRef = React.useRef()

    return (
        <Popover
            initialFocusRef={initialFocusRef}
            placement='bottom'
            closeOnBlur={false}
        >
            <PopoverTrigger>
                <Button
                    // mt={1}
                    // mb={5}
                    w={'full'}
                    // maxW={'3xs'}
                    bg={'purple.400'}
                    color={'white'}
                    rounded={'lg'}
                    boxShadow={'0 5px 20px 0px rgb(159 122 234 / 43%)'}
                    _hover={{
                        bg: 'purple.500',
                    }}
                    _focus={{
                        bg: 'purple.500',
                    }}
                >
                    <Flex alignItems={'center'}>
                        立刻用 <Flex px={1} alignItems={'center'}> IG <FaInstagram />  </Flex> 或  <Flex px={1} alignItems={'center'}>  Email <EmailIcon /> </Flex> 申請
                    </Flex>
                </Button>
            </PopoverTrigger>
            <PopoverContent color='white' bg='blue.800' borderColor='blue.800' textAlign={'left'}>
                <PopoverHeader pt={4} fontWeight='bold' border='0'>
                    報名方式
                </PopoverHeader>
                <PopoverArrow bg='blue.800' />
                <PopoverCloseButton />
                <PopoverBody>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={BsLightbulbFill} color='green.500' />
                            標題「量化Intern_姓名XXX」
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsPencilFill} color='green.500' />
                            內容可以包含履歷，相關經驗，作品集等
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsPeopleFill} color='yellow.500' />
                            可以團隊方式報名，內容需介紹成員、團隊經歷。
                        </ListItem>
                        <ListItem>
                            <ListIcon as={IoLogoInstagram} color='red.500' />
                            IG 私訊至 <Link href="asdf"> @official_crypto_arsenal </Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={EmailIcon} color='blue.500' />
                            Email 至 <Link href="asdf"> mkrt.crypto.arsenal@gmail.com </Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={TimeIcon} color='green.500' />
                            我們將會與您聯絡(採先報名先面試)
                        </ListItem>
                    </List>
                </PopoverBody>
                <PopoverFooter
                    border='0'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    pb={4}
                >
                    {/* <Box fontSize='sm'>Step 2 of 4</Box>
                                <ButtonGroup size='sm'>
                                    <Button colorScheme='green'>Setup Email</Button>
                                    <Button colorScheme='blue' ref={initialFocusRef}>
                                        Next
                                    </Button>
                                </ButtonGroup> */}
                    <Stack direction={['column', 'row']} spacing='6px'>
                        <Button
                            leftIcon={<EmailIcon />}
                            as='a'
                            href='mailto:mkrt.crypto.arsenal@gmail.com'
                            target={'_blank'}
                            // mt={1}
                            // mb={5}
                            w={'full'}
                            // maxW={'3xs'}
                            bg={'blue.400'}
                            color={'white'}
                            rounded={'lg'}
                            boxShadow={'0 5px 20px 0px rgb(159 122 234 / 43%)'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            _focus={{
                                bg: 'blue.500',
                            }}
                        >
                            使用 Email
                        </Button>
                        <Flex alignItems={'center'}>
                            <Text> 或 </Text>
                        </Flex>
                        <Button
                            as='a'
                            href='https://www.instagram.com/crypto_arsenal_official'
                            target={'_blank'}
                            // mt={1}
                            // mb={5}
                            w={'full'}
                            // maxW={'3xs'}
                            bg={'red.400'}
                            color={'white'}
                            rounded={'lg'}
                            leftIcon={<IoLogoInstagram />}
                            boxShadow={'0 5px 20px 0px rgb(159 122 234 / 43%)'}
                            _hover={{
                                bg: 'red.500',
                            }}
                            _focus={{
                                bg: 'red.500',
                            }}
                        >
                            使用 IG
                        </Button>
                    </Stack>

                </PopoverFooter>
            </PopoverContent>
        </Popover>
    )
}