import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    SimpleGrid,
    StackDivider,
    ButtonGroup,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverFooter,
    PopoverHeader,
    PopoverTrigger,
    Center,
    List,
    ListIcon,
    ListItem,

} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { FaInstagram } from 'react-icons/fa';
import { ReactElement } from 'react';
import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoLogoInstagram,
    IoSearchSharp,
} from 'react-icons/io5';
import { EmailIcon, TimeIcon } from '@chakra-ui/icons';
import { BsCheckCircle, BsLightbulb, BsLightbulbFill, BsPencilFill, BsPeople, BsPeopleFill } from 'react-icons/bs';
import Link from 'next/link';
import { ApplyButtonWithPopover } from './ApplyButton';

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}
const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export function SplitWithImage() {

    return (
        <Box py={6}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'purple.400'}
                        fontWeight={680}
                        fontSize={'sm'}
                        bg={useColorModeValue('purple.50', 'purple.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Crypto Arsenal 2023
                    </Text>
                    <Heading textAlign={'left'}>校園量化團隊計畫</Heading>
                    <Text textAlign={'left'} color={useColorModeValue('gray.500', 'gray.300')} fontSize={'lg'}>
                        想學習量化，但沒有資源和不知道從何開始嗎？
                        讓我們帶著你，踏上你的量化旅程！
                    </Text>
                    <ApplyButtonWithPopover />
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={
                                <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'參與量化課程和比賽'}
                        />
                        <Feature
                            icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'團隊研究和開發策略'}
                        />
                        <Feature
                            icon={
                                <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={'分享和推廣CA平台及活動'}
                        />
                    </Stack>

                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}>
                    <Box
                        position={'relative'}
                        height={'100%'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}>
                        {/* <IconButton
                            aria-label={'Play Button'}
                            variant={'ghost'}
                            _hover={{ bg: 'transparent' }}
                            icon={<PlayIcon w={12} h={12} />}
                            size={'lg'}
                            color={'white'}
                            position={'absolute'}
                            left={'50%'}
                            top={'50%'}
                            transform={'translateX(-50%) translateY(-50%)'}
                        /> */}
                        <Image
                            alt={'Hero Image'}
                            // fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src={
                                '/assets/images/CA實習生文宣 (1).png'
                            }
                        />
                    </Box>
                </Flex>
            </SimpleGrid>
        </Box>
    );
}

export default function CallToActionWithVideo() {
    return (
        <Container >
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 10, md: 18 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '1xl', sm: '2xl', lg: '4xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '30%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'purple.400',
                                zIndex: -1,
                            }}>
                            CA 2023
                        </Text>
                        <br />
                        <Text as={'span'} color={'purple.400'} fontWeight={800}>
                            校園量化團隊
                        </Text>
                    </Heading>
                    <Text color={'gray.500'}>
                        開啟你的量化事業  創造穩定被動收入
                        想學習量化，但沒有資源和不知道從何開始嗎？
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                    // direction={{ base: 'column', sm: 'row' }}
                    >
                        <Button
                            as='a'
                            href='mailto:mkrt.crypto.arsenal@gmail.com?subject=校園大使_姓名XXX&body=Tell Us About Yourself'
                            target={'_blank'}
                            mt={1}
                            mb={5}
                            w={'full'}
                            maxW={'3xs'}
                            bg={'blue.400'}
                            color={'white'}
                            rounded={'lg'}
                            boxShadow={'0 5px 20px 0px rgb(63 115 255 / 43%)'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            _focus={{
                                bg: 'blue.500',
                            }}
                        >
                            Apply Now
                        </Button>

                        {/* <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}>
                            How It Works
                        </Button> */}
                    </Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'full'}>
                    <Blob
                        w={'150%'}
                        h={'150%'}
                        position={'absolute'}
                        top={'-20%'}
                        left={0}
                        zIndex={-1}
                        color={useColorModeValue('red.50', 'red.400')}
                    />
                    <Box
                        position={'relative'}
                        height={'300px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}>
                        <IconButton
                            aria-label={'Play Button'}
                            variant={'ghost'}
                            _hover={{ bg: 'transparent' }}
                            icon={<PlayIcon w={12} h={12} />}
                            size={'lg'}
                            color={'white'}
                            position={'absolute'}
                            left={'50%'}
                            top={'50%'}
                            transform={'translateX(-50%) translateY(-50%)'}
                        />
                        <Image
                            alt={'Hero Image'}
                            // fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src={
                                '/assets/images/ca_scene.jpg'
                            }
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}

const PlayIcon = createIcon({
    displayName: 'PlayIcon',
    viewBox: '0 0 58 58',
    d:
        'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});

export const Blob = (props: IconProps) => {
    return (
        <Icon
            width={'100%'}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    );
};