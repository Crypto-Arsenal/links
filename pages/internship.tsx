import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Flex,
  Divider,
  Wrap,
  ListItem,
  UnorderedList,
  OrderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  SimpleGrid,
  Image,
  useTheme,
} from '@chakra-ui/react';

import { FaCode, FaInfoCircle } from 'react-icons/fa';

import { BsGlobe2 } from 'react-icons/bs';

import { ChevronDownIcon, ExternalLinkIcon, EmailIcon } from '@chakra-ui/icons';

import PageLayout from '@/components/page-layout';
import Community from '@/components/Community';
import { useEffect } from 'react';
import { useAnalytics } from '../src/utils/analytics';
import { useTranslation } from 'react-i18next';

const InternshipPage = () => {
  const { t } = useTranslation();
  const banner = '/assets/images/banner.png';
  const { analytics } = useAnalytics();
  const theme = useTheme();
  const spacing = theme.space[5];

  useEffect(() => {
    analytics.page('Links/Intern');
  }, []);

  return (
    <PageLayout title='Internship' description='CA Internship Opportunity'>
      <Center py={3}>
        <Box
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={4}
          pb={8}
          textAlign={'center'}
        >
          <Box
            bg={`url(${banner})`}
            bgSize='cover'
            borderRadius='16px'
            h='131px'
            w='100%'
          />
          <Avatar
            mt='-42px'
            border='4px solid'
            size={'xl'}
            src={'/assets/images/ca1.png'}
            mb={4}
            pos={'relative'}
          />

          <Heading fontSize={'2xl'} fontFamily={'body'}>
            <Flex
              justify={'center'}
              align='center'
              letterSpacing={'wide'}
              fontWeight='bold'
            >
              Crypto Arsenal
              <Box ml='1'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M8.5247 15.1234C8.203 14.9251 7.797 14.9251 7.4753 15.1234L7.14873 15.3247C6.6942 15.6048 6.09974 15.4785 5.79845 15.0377L5.58199 14.721C5.36875 14.409 4.99785 14.2438 4.62332 14.2941L4.24311 14.3452C3.71392 14.4162 3.22226 14.059 3.12631 13.5338L3.05737 13.1564C2.98947 12.7847 2.7178 12.483 2.35519 12.3766L1.98709 12.2686C1.47475 12.1182 1.17088 11.5919 1.29687 11.0731L1.38738 10.7003C1.47655 10.333 1.35109 9.94692 1.0631 9.70224L0.770757 9.45385C0.363852 9.10813 0.300327 8.50373 0.626462 8.08096L0.860777 7.77722C1.0916 7.47801 1.13404 7.07424 0.970468 6.73358L0.804424 6.38776C0.573314 5.90643 0.761114 5.32844 1.23101 5.07488L1.56861 4.8927C1.90117 4.71324 2.10417 4.36164 2.0933 3.9839L2.08227 3.60044C2.06692 3.06672 2.47357 2.61509 3.00597 2.57457L3.38848 2.54546C3.76529 2.51678 4.09375 2.27814 4.23746 1.92864L4.38335 1.57385C4.5864 1.08002 5.1416 0.832836 5.64445 1.01237L6.00573 1.14135C6.36163 1.26842 6.75875 1.18401 7.03219 0.923173L7.30978 0.658391C7.69613 0.289852 8.30387 0.289852 8.69022 0.658392L8.96781 0.923173C9.24125 1.18401 9.63837 1.26842 9.99427 1.14135L10.3555 1.01237C10.8584 0.832836 11.4136 1.08002 11.6167 1.57385L11.7625 1.92864C11.9063 2.27814 12.2347 2.51678 12.6115 2.54546L12.994 2.57457C13.5264 2.61509 13.9331 3.06672 13.9177 3.60044L13.9067 3.9839C13.8958 4.36164 14.0988 4.71324 14.4314 4.8927L14.769 5.07488C15.2389 5.32844 15.4267 5.90643 15.1956 6.38776L15.0295 6.73358C14.866 7.07424 14.9084 7.47801 15.1392 7.77722L15.3735 8.08096C15.6997 8.50373 15.6361 9.10813 15.2292 9.45385L14.9369 9.70224C14.6489 9.94692 14.5234 10.333 14.6126 10.7003L14.7031 11.0731C14.8291 11.5919 14.5253 12.1182 14.0129 12.2686L13.6448 12.3766C13.2822 12.483 13.0105 12.7847 12.9426 13.1564L12.8737 13.5338C12.7777 14.059 12.2861 14.4162 11.7569 14.3452L11.3767 14.2941C11.0021 14.2438 10.6313 14.409 10.418 14.721L10.2015 15.0377C9.90026 15.4785 9.3058 15.6048 8.85127 15.3247L8.5247 15.1234Z'
                    fill='#00B6FF'
                  />
                  <path
                    d='M5.06998 7.56265L7.1913 9.68397L11.4339 5.44133'
                    stroke='white'
                    strokeWidth='2'
                  />
                </svg>
              </Box>
            </Flex>
          </Heading>
          <Box mb={4}>
            <Text
              fontWeight={'semibold'}
              color={'gray.500'}
              as='a'
              href='https://twitter.com/_cryptoarsenal_'
            >
              @CryptoAsrsena1
            </Text>
          </Box>
          <Text
            fontSize={'sm'}
            fontWeight={'thin'}
            textAlign={'center'}
            letterSpacing={'wide'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            Web2 & Web3 Crypto Bot Marketplace that Bridges the Gap Between
            Strategy Creators and Traders
          </Text>
          <Center mt={4}>
            <Stack direction={'row'} justify={'center'} spacing={4} ml='15px'>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>2k</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  {t('stats.Trading Bots')}
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>6k</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  {t('stats.Users')}
                </Text>
              </Stack>

              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>120M</Text>
                <Text fontSize={'sm'} color={'gray.500'} fontWeight={'normal'}>
                  {t('stats.Trading Volume')}
                </Text>
              </Stack>
            </Stack>
          </Center>

          <Wrap spacing='2px' justify='center' mt={6}>
            <Button
              as='a'
              href='https://crypto-arsenal.io'
              target='_blank'
              variant={'outline'}
              leftIcon={<BsGlobe2 />}
              bg={useColorModeValue('gray.50', 'gray.800')}
              size={'sm'}
            >
              <Center>
                <Text>Website</Text>
              </Center>
            </Button>
            <Button
              as='a'
              href='https://help.crypto-arsenal.io'
              target='_blank'
              variant={'outline'}
              leftIcon={<FaInfoCircle />}
              bg={useColorModeValue('gray.50', 'gray.800')}
              size={'sm'}
            >
              <Center>
                <Text>Help Center </Text>
              </Center>
            </Button>
            <Button
              as='a'
              href={'https://docs.crypto-arsenal.io/'}
              target='_blank'
              variant={'outline'}
              leftIcon={<FaCode />}
              bg={useColorModeValue('gray.50', 'gray.800')}
              size={'sm'}
            >
              <Center>
                <Text>Documentation</Text>
              </Center>
            </Button>
          </Wrap>
          <Community />
          <Box m={6}>
            <Divider />
          </Box>
          <Flex
            textAlign={'center'}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}
            overflow={'hidden'}
          >
            <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
              <Heading
                py={5}
                fontSize={34}
                fontFamily={'body'}
                fontWeight={'bold'}
                color={useColorModeValue('gray.700', 'gray.50')}
              >
                Quantitative Trading Internship
              </Heading>
            </Box>
            <Accordion
              defaultIndex={[0]}
              width='100%'
              maxW='lg'
              rounded='lg'
              mx={'auto'}
            >
              <AccordionItem>
                <AccordionButton
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                  p={4}
                >
                  <Text fontSize='md' display='flex' alignItems='center'>
                    {t('internship.Recruitment Plan.title')} 🗓
                  </Text>
                  <ChevronDownIcon fontSize='24px' />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}
                    align={'left'}
                  >
                    {t('internship.Recruitment Plan.content')}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                  p={4}
                >
                  <Text fontSize='md'>
                    {t('internship.Company Profile.title')} 🏢
                  </Text>
                  <ChevronDownIcon fontSize='24px' />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}
                    align={'left'}
                  >
                    {t('internship.Company Profile.content')}
                    <UnorderedList>
                      <ListItem mt={2}>
                        2023 {t('internship.Year')}:
                        <OrderedList>
                          <ListItem>
                            {t('internship.Company Profile.year.2023.0')}
                          </ListItem>
                        </OrderedList>
                      </ListItem>
                      <ListItem mt={2}>
                        2022 {t('internship.Year')}:
                        <OrderedList>
                          <ListItem>
                            {t('internship.Company Profile.year.2022.0')}
                          </ListItem>
                          <ListItem>
                            {t('internship.Company Profile.year.2022.1')}
                          </ListItem>
                        </OrderedList>
                      </ListItem>
                      <ListItem mt={2}>
                        2021 {t('internship.Year')}:
                        <OrderedList>
                          <ListItem>
                            {t('internship.Company Profile.year.2021.0')}
                          </ListItem>
                          <ListItem>
                            {t('internship.Company Profile.year.2021.1')}
                          </ListItem>
                        </OrderedList>
                      </ListItem>
                      <ListItem mt={2}>
                        2020 {t('internship.Year')}:
                        <OrderedList>
                          <ListItem>
                            {t('internship.Company Profile.year.2020.0')}
                          </ListItem>
                        </OrderedList>
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                  p={4}
                >
                  <Text fontSize='md'>
                    {t('internship.Internship Content.title')} 💼
                  </Text>
                  <ChevronDownIcon fontSize='24px' />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}
                    align={'left'}
                  >
                    <UnorderedList>
                      <ListItem>
                        {t('internship.Internship Content.list.0')}
                      </ListItem>
                      <ListItem>
                        {t('internship.Internship Content.list.1')}
                      </ListItem>
                      <ListItem>
                        {t('internship.Internship Content.list.2')}
                      </ListItem>
                      <ListItem>
                        {t('internship.Internship Content.list.3')}
                      </ListItem>
                      <ListItem>
                        {t('internship.Internship Content.list.4')}
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                  p={4}
                >
                  <Text fontSize='md'>
                    {t('internship.Internship Benefit.title')} 🎁
                  </Text>
                  <ChevronDownIcon fontSize='24px' />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}
                    align={'left'}
                  >
                    {t('internship.Internship Benefit.content')}
                    <UnorderedList>
                      <ListItem>
                        {t('internship.Internship Benefit.list.0')}
                      </ListItem>
                      <ListItem>
                        {t('internship.Internship Benefit.list.1')}
                      </ListItem>
                      <ListItem>
                        {t('internship.Internship Benefit.list.2')}
                      </ListItem>
                      <ListItem>
                        {t('internship.Internship Benefit.list.3')}
                      </ListItem>
                      <ListItem>
                        {t('internship.Internship Benefit.list.4')}
                      </ListItem>
                      <ListItem>
                        {t('internship.Internship Benefit.list.5')}
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                  p={4}
                >
                  <Text fontSize='md'>
                    {t('internship.About The Internship.title')} 📋
                  </Text>
                  <ChevronDownIcon fontSize='24px' />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}
                    align={'left'}
                  >
                    <UnorderedList>
                      <ListItem>
                        {t('internship.About The Internship.list.0')}
                      </ListItem>
                      <ListItem>
                        {t('internship.About The Internship.list.1')}
                      </ListItem>
                      <ListItem>
                        {t('internship.About The Internship.list.2')}
                      </ListItem>
                      <ListItem>
                        {t('internship.About The Internship.list.3')}
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                  p={4}
                >
                  <Text fontSize='md'>
                    {t('internship.Required Skills.title')} 🔑
                  </Text>
                  <ChevronDownIcon fontSize='24px' />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}
                    align={'left'}
                  >
                    <UnorderedList>
                      <ListItem>
                        {t('internship.Required Skills.list.0')}
                      </ListItem>
                      <ListItem>
                        {t('internship.Required Skills.list.1')}
                      </ListItem>
                      <ListItem>
                        {t('internship.Required Skills.list.2')}
                      </ListItem>
                      <ListItem>
                        {t('internship.Required Skills.list.3')}
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                  p={4}
                >
                  <Text fontSize='md'>
                    {t('internship.Internship Details.title')} 📝
                  </Text>
                  <ChevronDownIcon fontSize='24px' />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    fontSize={'15px'}
                    pb={4}
                    align={'left'}
                  >
                    <UnorderedList>
                      <ListItem>
                        {t('internship.Internship Details.list.0')}
                      </ListItem>
                      <ListItem>
                        {t('internship.Internship Details.list.1')}
                      </ListItem>
                      <ListItem>
                        {t('internship.Internship Details.list.2')}
                      </ListItem>
                      <ListItem>
                        {t('internship.Internship Details.list.3')}
                      </ListItem>
                    </UnorderedList>
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
          <Box m={6}>
            <Divider />
          </Box>
          <Flex
            textAlign={'center'}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}
            maxW={'900px'}
            overflow={'hidden'}
          >
            <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
              <Heading
                py={5}
                fontSize={34}
                fontFamily={'body'}
                fontWeight={'bold'}
                color={useColorModeValue('gray.700', 'gray.50')}
              >
                {t('internship.Program Partners')}
              </Heading>
            </Box>
            <Flex
              flexWrap='wrap'
              justifyContent='center'
              marginX={`calc(${spacing} / -2)`}
            >
              <Center
                py={12}
                marginBottom={spacing}
                _even={{
                  marginX: spacing,
                }}
              >
                <Box
                  role={'group'}
                  p={6}
                  maxW={'330px'}
                  w={'200px'}
                  bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  pos={'relative'}
                  zIndex={1}
                >
                  <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'115px'}
                    width={'155px'}
                    _after={{
                      transition: 'all .3s ease',
                      content: '""',
                      w: 'full',
                      h: 'full',
                      pos: 'absolute',
                      top: 5,
                      left: 0,
                      backgroundImage: '/assets/images/leadCapital.jpeg',
                      filter: 'blur(15px)',
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: 'blur(20px)',
                      },
                    }}
                  >
                    <Image
                      rounded={'lg'}
                      height={115}
                      width={155}
                      objectFit={'cover'}
                      src={'/assets/images/leadCapital.jpeg'}
                    />
                  </Box>
                  <Stack pt={10} align={'center'}>
                    <Heading
                      fontSize={'2xl'}
                      fontFamily={'body'}
                      fontWeight={500}
                    >
                      Lead Capital
                    </Heading>
                  </Stack>
                </Box>
              </Center>
              <Center
                py={12}
                marginBottom={spacing}
                _even={{
                  marginX: spacing,
                }}
              >
                <Box
                  role={'group'}
                  p={6}
                  maxW={'330px'}
                  w={'200px'}
                  bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  pos={'relative'}
                  zIndex={1}
                >
                  <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'115px'}
                    width={'155px'}
                    _after={{
                      transition: 'all .3s ease',
                      content: '""',
                      w: 'full',
                      h: 'full',
                      pos: 'absolute',
                      top: 5,
                      left: 0,
                      backgroundImage: '/assets/images/builderDao.png',
                      filter: 'blur(15px)',
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: 'blur(20px)',
                      },
                    }}
                  >
                    <Image
                      rounded={'lg'}
                      height={115}
                      width={155}
                      objectFit={'cover'}
                      src={'/assets/images/builderDao.png'}
                    />
                  </Box>
                  <Stack pt={10} align={'center'}>
                    <Heading
                      fontSize={'2xl'}
                      fontFamily={'body'}
                      fontWeight={500}
                    >
                      Builder DAO
                    </Heading>
                  </Stack>
                </Box>
              </Center>
              <Center
                py={12}
                marginBottom={spacing}
                _even={{
                  marginX: spacing,
                }}
              >
                <Box
                  role={'group'}
                  p={6}
                  maxW={'330px'}
                  w={'200px'}
                  bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  pos={'relative'}
                  zIndex={1}
                >
                  <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'115px'}
                    width={'155px'}
                    _after={{
                      transition: 'all .3s ease',
                      content: '""',
                      w: 'full',
                      h: 'full',
                      pos: 'absolute',
                      top: 5,
                      left: 0,
                      backgroundImage: '/assets/images/leapFi.jpeg',
                      filter: 'blur(15px)',
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: 'blur(20px)',
                      },
                    }}
                  >
                    <Image
                      rounded={'lg'}
                      height={115}
                      width={155}
                      objectFit={'cover'}
                      src={'/assets/images/leapFi.jpeg'}
                    />
                  </Box>
                  <Stack pt={10} align={'center'}>
                    <Heading
                      fontSize={'2xl'}
                      fontFamily={'body'}
                      fontWeight={500}
                    >
                      LeapFi
                    </Heading>
                  </Stack>
                </Box>
              </Center>
              <Center
                py={12}
                marginBottom={spacing}
                _even={{
                  marginX: spacing,
                }}
              >
                <Box
                  role={'group'}
                  p={6}
                  maxW={'330px'}
                  w={'200px'}
                  bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  pos={'relative'}
                  zIndex={1}
                >
                  <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'115px'}
                    width={'155px'}
                    _after={{
                      transition: 'all .3s ease',
                      content: '""',
                      w: 'full',
                      h: 'full',
                      pos: 'absolute',
                      top: 5,
                      left: 0,
                      backgroundImage: '/assets/images/taiwanBuilderHouse.svg',
                      filter: 'blur(15px)',
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: 'blur(20px)',
                      },
                    }}
                  >
                    <Image
                      rounded={'lg'}
                      height={115}
                      width={155}
                      objectFit={'contain'}
                      src={'/assets/images/taiwanBuilderHouse.svg'}
                    />
                  </Box>
                  <Stack pt={10} align={'center'}>
                    <Heading
                      fontSize={'2xl'}
                      fontFamily={'body'}
                      fontWeight={500}
                    >
                      Taiwan Builder House
                    </Heading>
                  </Stack>
                </Box>
              </Center>
              <Center
                py={12}
                marginBottom={spacing}
                _even={{
                  marginX: spacing,
                }}
              >
                <Box
                  role={'group'}
                  p={6}
                  maxW={'330px'}
                  w={'200px'}
                  bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  pos={'relative'}
                  zIndex={1}
                >
                  <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'115px'}
                    width={'155px'}
                    _after={{
                      transition: 'all .3s ease',
                      content: '""',
                      w: 'full',
                      h: 'full',
                      pos: 'absolute',
                      top: 5,
                      left: 0,
                      backgroundImage: '/assets/images/tradingTrain.jpeg',
                      filter: 'blur(15px)',
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: 'blur(20px)',
                      },
                    }}
                  >
                    <Image
                      rounded={'lg'}
                      height={115}
                      width={155}
                      objectFit={'contain'}
                      src={'/assets/images/tradingTrain.jpeg'}
                    />
                  </Box>
                  <Stack pt={10} align={'center'}>
                    <Heading
                      fontSize={'2xl'}
                      fontFamily={'body'}
                      fontWeight={500}
                    >
                      TradingTrain
                    </Heading>
                  </Stack>
                </Box>
              </Center>
              <Center
                py={12}
                marginBottom={spacing}
                _even={{
                  marginX: spacing,
                }}
              >
                <Box
                  role={'group'}
                  p={6}
                  maxW={'330px'}
                  w={'200px'}
                  bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  pos={'relative'}
                  zIndex={1}
                >
                  <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'115px'}
                    width={'155px'}
                    _after={{
                      transition: 'all .3s ease',
                      content: '""',
                      w: 'full',
                      h: 'full',
                      pos: 'absolute',
                      top: 5,
                      left: 0,
                      backgroundImage: '/assets/images/aceExchange.jpeg',
                      filter: 'blur(15px)',
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: 'blur(20px)',
                      },
                    }}
                  >
                    <Image
                      rounded={'lg'}
                      height={115}
                      width={155}
                      objectFit={'contain'}
                      src={'/assets/images/aceExchange.jpeg'}
                    />
                  </Box>
                  <Stack pt={10} align={'center'}>
                    <Heading
                      fontSize={'2xl'}
                      fontFamily={'body'}
                      fontWeight={500}
                    >
                      Ace Exchange
                    </Heading>
                  </Stack>
                </Box>
              </Center>
            </Flex>
          </Flex>
          <Box m={6}>
            <Divider />
          </Box>
          <Center>
            <Stack
              spacing={'40px'}
              align={'center'}
              w={'full'}
              justify='center'
            >
              <Box w={'full'}>
                <Box fontWeight='extrabold' fontSize={'xl'}>
                  <Text color='#3F73FF'>
                    {t('internship.How To Register.title')}
                  </Text>
                  <Text
                    fontSize={'sm'}
                    color={'gray.500'}
                    whiteSpace={'pre-line'}
                  >
                    {t('internship.How To Register.content')}
                  </Text>
                </Box>
                <Button
                  as='a'
                  href='mailto:mkrt.crypto.arsenal@gmail.com'
                  target={'_blank'}
                  mt={5}
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
                  leftIcon={<EmailIcon />}
                  rightIcon={<ExternalLinkIcon />}
                >
                  mkrt.crypto.arsenal@gmail.com
                </Button>
              </Box>
            </Stack>
          </Center>
        </Box>
      </Center>
    </PageLayout>
  );
};

export default InternshipPage;
