import LanguagesButton from '@/components/languages-button';
import ThemeButton from '@/components/theme-button';
import { HStack, Flex, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import {
    Box,
    Avatar,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Icon,
    Center
} from '@chakra-ui/react';
import { BsFillHeartPulseFill } from 'react-icons/bs';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

const Links = [
  {
    name: 'tabs.Home',
    icon: '🏠',
  },
  {
    name: 'tabs.Quantitative Internship Program',
    icon: '👩‍💻',
  },
  {
    name: 'tabs.Status',
    icon: <Icon as={BsFillHeartPulseFill} color='red.500'/>,
  },
];
const LinksURL = ['/', '/internship', 'https://status.crypto-arsenal.io/'];

const NavLink = ({ children, idx }: { children: ReactNode; idx: number }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        fontWeight={800}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={LinksURL[idx]}
    >
        {children}
    </Link>
);

function WithAction() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { t } = useTranslation();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            {Links.map((link, idx) => (
                                <NavLink key={link.name} idx={idx}>
                                    {t(link.name)}{' '}
                                    {link.icon}
                                </NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <HStack
                            as='header'
                            // position='fixed'
                            // top='0'
                            // pt={3}
                            // px={5}
                            zIndex='tooltip'
                            justify='space-between'
                            align='center'
                            w='100%'
                        >
                            {/* <Flex>
        <Text> Crypto Arsenal</Text>
      </Flex> */}
                            {/* <Flex> */}
                            <ThemeButton />
                            <LanguagesButton />
                            {/* </Flex> */}
                        </HStack>
                    </Flex>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link, idx) => (
                                <NavLink key={link.name} idx={idx}>
                                    {t(link.name)}{' '}
                                    {link.icon}
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

const Header = () => {
    return <WithAction />;
};

export default Header;
