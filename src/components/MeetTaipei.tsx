import {
    Box,
    Center,
    Text,
    Button,
    Link,
    useColorModeValue,
    Flex,
    Code,
    Divider,
    Wrap,
    useBoolean,
    useDisclosure,
    Collapse,
    List,
    ListItem,
    useClipboard,
} from '@chakra-ui/react';
import {
    BsGiftFill,
    BsInstagram,
    BsLink,
    BsTelegram,
} from 'react-icons/bs';
import {
    FaCaretDown,
    FaCaretUp,
    FaDiscord,
    FaRobot,
    FaTwitter,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ExpandableMeetTaipieButton = () => {
    const { isOpen, onToggle } = useDisclosure();
    const [isClicked, { on }] = useBoolean();

    const { t } = useTranslation();
    const { onCopy, value, setValue, hasCopied } =
        useClipboard('meettaipei2022');

    return (
        <Box
            boxShadow={
                '0px 1px 25px -5px rgb(227 0 127 / 49%), 0 10px 10px -5px rgb(227 0 127 / 49%)'
            }
            // _hover={{
            //     bg: 'blue.500',
            // }}
            // _focus={{
            //     bg: 'blue.500',
            // }}
            // as='button'
            w={'full'}
            // boxShadow={'md'}
            p={'10px'}
            rounded={'lg'}
            // align={{ base: null, md: 'center' }}
            border='1px solid #e3007f'
        >
            <Flex
                as='button'
                onClick={onToggle}
                align={{ base: 'center', md: 'center' }}
                // flexDir={{ base: 'column', md: 'row' }}
                w={'full'}
            >
                <Center>
                    <Flex
                        bg='#e3007f'
                        width={{ base: '40px', md: '50px' }}
                        height={{ base: '40px', md: '50px' }}
                        rounded='md'
                        justifyContent='center'
                        alignItems={'center'}
                    >
                        {' '}
                        <BsGiftFill color='white' />{' '}
                    </Flex>
                </Center>
                <Box w='full'>
                    <Flex
                        justifyContent='center'
                        alignItems={'center'}
                        textAlign='center'
                    >
                        <Text fontWeight={'bold'} color='#e3007f'>
                            {' '}
                            {t('meetTaipei.title')}
                        </Text>
                    </Flex>
                </Box>
                <Box mr={2}>{isOpen ? <FaCaretUp /> : <FaCaretDown />}</Box>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <Box mt={3}>
                    <Divider />
                    <Box m={1}>
                        <Box
                            bg={useColorModeValue('gray.50', 'gray.900')}
                            px={2}
                            py={3}
                        >
                            <List spacing={5}>
                                <ListItem mt={4}>
                                    <Text fontWeight={'bold'}>
                                        {' '}
                                        Step 1️⃣:{' '}
                                        {t(
                                            'meetTaipei.Join Discord and Receive Gift Code'
                                        )}
                                    </Text>
                                    <Button
                                        size={'sm'}
                                        // variant={'outline'}
                                        as='a'
                                        href='https://discord.gg/DfVSwYprvK'
                                        target={'_blank'}
                                        mt={2}
                                        mb={1}
                                        onClick={on}
                                        // w={'full'}
                                        bg={'rgb(114,137,218)'}
                                        color={'white'}
                                        rounded={'md'}
                                        boxShadow={
                                            '0 5px 20px 0px rgb(114 137 218 / 43%)'
                                        }
                                        _hover={{
                                            bg: '#637ddb',
                                        }}
                                        _focus={{
                                            bg: '#637ddb',
                                        }}
                                        leftIcon={<FaDiscord />}
                                    >
                                        {t('meetTaipei.Join Discord')}{' '}
                                        {t('meetTaipei.and Text')}{' '}
                                        <Code
                                            fontWeight={'semibold'}
                                            color='white'
                                        >
                                            /meetca{' '}
                                        </Code>
                                    </Button>

                                    {/* <Text fontWeight={'normal'} fontSize={'md'}>  {t("meetTaipei.to receive steps & gift code")}  </Text> */}
                                    <Wrap spacing={1} justify='center' mt={1}>
                                        <Button
                                            mr={1}
                                            rounded={'md'}
                                            onClick={on}
                                            as='a'
                                            href={t('links.twitter')}
                                            target='_blank'
                                            colorScheme={'twitter'}
                                            // variant={'outline'}
                                            leftIcon={<FaTwitter />}
                                            size={'sm'}
                                        >
                                            <Center>
                                                <Text>Twitter</Text>
                                            </Center>
                                        </Button>
                                        <Button
                                            mr={1}
                                            rounded={'md'}
                                            onClick={on}
                                            as='a'
                                            href='https://t.me/TG_Crypto_Arsenal'
                                            target='_blank'
                                            colorScheme={'telegram'}
                                            // variant={'outline'}
                                            leftIcon={<BsTelegram />}
                                            // bg={useColorModeValue('gray.50', 'gray.800')}
                                            size={'sm'}
                                        >
                                            <Center>
                                                <Text>Telegram</Text>
                                            </Center>
                                        </Button>
                                        <Button
                                            mr={1}
                                            rounded={'md'}
                                            onClick={on}
                                            as='a'
                                            href={t('links.instagram')}
                                            target='_blank'
                                            colorScheme={'red'}
                                            // variant={'outline'}
                                            leftIcon={<BsInstagram />}
                                            // bg={useColorModeValue('gray.50', 'gray.800')}
                                            size={'sm'}
                                        >
                                            <Center>
                                                <Text>Instagram</Text>
                                            </Center>
                                        </Button>
                                    </Wrap>
                                    <Box>
                                        {isClicked ? '🎁' : '🔐'}{' '}
                                        <Code>
                                            {isClicked
                                                ? 'meettaipei2022'
                                                : '********'}{' '}
                                        </Code>
                                        <Button
                                            size='sm'
                                            onClick={onCopy}
                                            disabled={!isClicked}
                                        >
                                            {hasCopied
                                                ? 'Copied!'
                                                : isClicked
                                                ? 'Copy'
                                                : 'Follow to unlock 👆'}
                                        </Button>
                                    </Box>
                                    <Text fontWeight={'normal'} fontSize={'md'}>
                                        {' '}
                                        {t(
                                            'meetTaipei.to receive steps & gift code'
                                        )}{' '}
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight={'bold'} fontSize={'md'}>
                                        {' '}
                                        Step 2️⃣:{' '}
                                        {t(
                                            'meetTaipei.Sign Up and Unlock Starter Plan'
                                        )}{' '}
                                    </Text>

                                    {/* <ListIcon as={TbNumber1} color="green.400" fontWeight={'bold'} bg="green" /> */}
                                    <Button
                                        mt={2}
                                        mb={1}
                                        as='a'
                                        href='https://crypto-arsenal.io/?ref=Trader-Alex'
                                        target='_blank'
                                        colorScheme={'green'}
                                        boxShadow={
                                            '0 5px 20px 0px rgb(154 230 180 / 43%)'
                                        }
                                        // variant={'outline'}
                                        leftIcon={<BsLink />}
                                        // bg={useColorModeValue('gray.50', 'gray.800')}
                                        size={'sm'}
                                    >
                                        <Center>
                                            <Text>
                                                {' '}
                                                {t(
                                                    'meetTaipei.Your Sign Up Link'
                                                )}{' '}
                                            </Text>
                                        </Center>
                                    </Button>
                                    <Text fontWeight={'normal'} fontSize={'md'}>
                                        {' '}
                                        {t(
                                            'meetTaipei.Register and redeem the Gift Code'
                                        )}{' '}
                                        (
                                        <Link
                                            target='_blank'
                                            href='https://help.crypto-arsenal.io/en/articles/6576020-how-to-redeem-gift-code'
                                            color={'yellow'}
                                        >
                                            {t('meetTaipei.see tutorial')}
                                        </Link>
                                        ){' '}
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text fontWeight={'bold'} fontSize={'md'}>
                                        {' '}
                                        Step 3️⃣:{' '}
                                        {t(
                                            'meetTaipei.Trade with the Pros'
                                        )}{' '}
                                    </Text>

                                    {/* <ListIcon as={TbNumber1} color="green.400" fontWeight={'bold'} bg="green" /> */}
                                    <Button
                                        mt={2}
                                        mb={1}
                                        as='a'
                                        href='https://crypto-arsenal.io/arena?tab=Trader%20Alex'
                                        target='_blank'
                                        colorScheme={'pink'}
                                        boxShadow={
                                            '0 5px 20px 0px rgb(251 182 206 / 43%)'
                                        }
                                        // variant={'outline'}
                                        leftIcon={<FaRobot />}
                                        // bg={useColorModeValue('gray.50', 'gray.800')}
                                        size={'sm'}
                                    >
                                        <Center>
                                            <Text>
                                                {t('meetTaipei.Visit Arena')}
                                            </Text>
                                        </Center>
                                    </Button>
                                    <Text fontWeight={'normal'} fontSize={'md'}>
                                        {' '}
                                        {t(
                                            "meetTaipei.Trade with the best strategies from Alex's Trading League"
                                        )}{' '}
                                        (
                                        <Link
                                            target='_blank'
                                            href='https://youtu.be/RCni_smvI90'
                                            color={'pink'}
                                        >
                                            {t('meetTaipei.see tutorial')}
                                        </Link>
                                        ){' '}
                                    </Text>
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
                </Box>
            </Collapse>
        </Box>
    );
};