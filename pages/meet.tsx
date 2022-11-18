import PageLayout from '@/components/page-layout';
import { Box, Button, Center, Code, Divider, Editable, EditableInput, EditablePreview, Flex, Heading, Input, Link, List, ListItem, Text, useClipboard, useColorModeValue, VStack } from '@chakra-ui/react';
import { t } from 'i18next';
import NextLink from 'next/link';
import { BsInstagram, BsLink, BsTelegram } from 'react-icons/bs';
import { FaDiscord, FaRobot, FaTwitter } from 'react-icons/fa';

const Meet = () => {
  const placeholder = "text to be copied...";
  const { onCopy, value, setValue, hasCopied } = useClipboard("meettaipei2022");
  return (
    <PageLayout title='Meet CA' description='Meet CA'>
      <Box textAlign="center">
        <Box p={3} rounded={'xl'} bg={useColorModeValue('gray.50', 'gray.900')} px={2} py={3}>
          <List spacing={5}>
            <ListItem mt={4}>
              <Text fontWeight={'bold'}> Step 1️⃣: {t("meetTaipei.Join Discord and Receive Gift Code")}</Text>
              <Box my={3}>
                <Button
                  as="a"
                  href="https://discord.gg/7CceNxrPbw"
                  target="_blank"
                  variant={'outline'} leftIcon={<FaDiscord />} bg={useColorModeValue('gray.50', 'gray.800')} size={'sm'}>
                  <Center>
                    <Text>Discord</Text>
                  </Center>
                </Button>
                <Button
                  as="a"
                  href="https://twitter.com/_cryptoarsenal_"
                  target="_blank"
                  variant={'outline'} leftIcon={<FaTwitter />} bg={useColorModeValue('gray.50', 'gray.800')} size={'sm'}>
                  <Center>
                    <Text>Twitter</Text>
                  </Center>
                </Button>
                <Button
                  as="a"
                  href="https://t.me/TG_Crypto_Arsenal"
                  target="_blank"

                  variant={'outline'} leftIcon={<BsTelegram />} bg={useColorModeValue('gray.50', 'gray.800')} size={'sm'}>
                  <Center>
                    <Text>Telegram</Text>
                  </Center>
                </Button>
                <Button
                  as="a"
                  href="https://www.instagram.com/crypto_arsenal/?hl=en"
                  target="_blank"
                  variant={'outline'} leftIcon={<BsInstagram />} bg={useColorModeValue('gray.50', 'gray.800')} size={'sm'}>
                  <Center>
                    <Text>Instagram</Text>
                  </Center>
                </Button>
              </Box>
              <Text fontWeight={'normal'} fontSize={'md'}>  {t("meetTaipei.to receive steps & gift code")}  </Text>
              🎁 <Code>meettaipei2022</Code>
              <Button size="sm" onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>

            </ListItem>
            <ListItem>
              <Text fontWeight={'bold'} fontSize={'md'}> Step 2️⃣:  {t("meetTaipei.Sign Up and Unlock Starter Plan")} </Text>

              {/* <ListIcon as={TbNumber1} color="green.400" fontWeight={'bold'} bg="green" /> */}
              <Button
                mt={2}
                mb={1}
                as="a"
                href="https://crypto-arsenal.io/?ref=Trader-Alex"
                target="_blank"
                colorScheme={'green'}
                boxShadow={'0 5px 20px 0px rgb(154 230 180 / 43%)'}
                // variant={'outline'}
                leftIcon={<BsLink />}
                // bg={useColorModeValue('gray.50', 'gray.800')}
                size={'sm'}>
                <Center>
                  <Text> {t("meetTaipei.Your Sign Up Link")} </Text>
                </Center>
              </Button>
              <Text fontWeight={'normal'} fontSize={'md'}> {t("meetTaipei.Register and redeem the Gift Code")}  (<Link target="_blank" href="https://help.crypto-arsenal.io/en/articles/6576020-how-to-redeem-gift-code" color={'yellow'}>{t("meetTaipei.see tutorial")}</Link>)  </Text>

            </ListItem>
            <ListItem>
              <Text fontWeight={'bold'} fontSize={'md'}> Step 3️⃣: {t("meetTaipei.Trade with the Pros")}   </Text>

              {/* <ListIcon as={TbNumber1} color="green.400" fontWeight={'bold'} bg="green" /> */}
              <Button
                mt={2}
                mb={1}
                as="a"
                href="https://crypto-arsenal.io/arena?tab=Trader%20Alex"
                target="_blank"
                colorScheme={'pink'}
                boxShadow={'0 5px 20px 0px rgb(251 182 206 / 43%)'}
                // variant={'outline'}
                leftIcon={<FaRobot />}
                // bg={useColorModeValue('gray.50', 'gray.800')}
                size={'sm'}>
                <Center>
                  <Text>{t("meetTaipei.Visit Arena")}</Text>
                </Center>
              </Button>
              <Text fontWeight={'normal'} fontSize={'md'}> {t("meetTaipei.Trade with the best strategies from Alex's Trading League")}  (<Link target="_blank" href="https://youtu.be/RCni_smvI90" color={'pink'}>{t("meetTaipei.see tutorial")}</Link>) </Text>

            </ListItem>


            {/* 


                                <ListItem>
                                    Recieve Gift Code for Free Starter subscription ($29 USD value) 🎁
                                 
                                </ListItem>
                                3️⃣ On Arena, you will find exclusive access to strategies from Alex's Trading League 🤖

                                <Button
                                    ml={2}
                                    as="a"
                                    href="https://t.me/c/1474644917/948185"
                                    target="_blank"
                                    colorScheme={'blue'}
                                    variant={'outline'} leftIcon={<BsTelegram />} bg={useColorModeValue('gray.50', 'gray.800')} size={'xs'}>
                                    <Center>
                                        <Text>Alex&apos;s Telegram</Text>
                                    </Center>
                                </Button> */}
          </List>
          {/* <Button
                                as="a"
                                href="https://discord.gg/7CceNxrPbw"
                                target={"_blank"}
                                mt={10}
                                w={'full'}
                                bg={'rgb(114,137,218)'}
                                color={'white'}
                                rounded={'xl'}
                                boxShadow={'0 5px 20px 0px rgb(114 137 218 / 43%)'}
                                _hover={{
                                    bg: '#637ddb',
                                }}
                                _focus={{
                                    bg: '#637ddb',
                                }}
                                leftIcon={<FaDiscord />}
                            >
                                {t("meetTaipei.Join Discord")}
                            </Button> */}
          {/* <Button
                                as="a"
                                href="https://www.yourator.co/companies/Crypto-Arsenal"
                                target={"_blank"}
                                mt={3}
                                w={'full'}
                                bg={'blue.400'}
                                color={'white'}
                                rounded={'xl'}
                                boxShadow={'0 5px 20px 0px rgb(63 115 255 / 43%)'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                _focus={{
                                    bg: 'blue.500',
                                }}
                                rightIcon={<ExternalLinkIcon />}
                            >
                                Sign Up with Alex's referral code
                            </Button> */}
        </Box>
      </Box>

      <Divider my={4} />

      <NextLink href='/' passHref >
        <Button colorScheme='brand' size='md'>
          Return to home
        </Button>
      </NextLink>

    </PageLayout>
  );
};

export default Meet;
