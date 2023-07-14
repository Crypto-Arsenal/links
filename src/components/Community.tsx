import {
    Center,
    Text,
    Button,
    useColorModeValue,
    Wrap,
} from '@chakra-ui/react';
import {
    FaDiscord,
    FaLinkedin,
    FaMediumM,
    FaReddit,
    FaTwitter,
} from 'react-icons/fa';
import { BsInstagram, BsTelegram } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const communityList = [
    {
        href: 'https://discord.gg/DfVSwYprvK',
        icon: <FaDiscord />,
        text: 'Discord',
    },
    {
        href: 'links.twitter',
        icon: <FaTwitter />,
        text: 'Twitter',
    },
    {
        href: 'https://t.me/TG_Crypto_Arsenal',
        icon: <BsTelegram />,
        text: 'Telegram',
    },
    {
        href: 'links.instagram',
        icon: <BsInstagram />,
        text: 'Instagram',
    },
    {
        href: 'links.medium',
        icon: <FaMediumM />,
        text: 'Medium',
    },
    {
        href: 'https://www.linkedin.com/company/crypto-arsenal',
        icon: <FaLinkedin />,
        text: 'LinkedIn',
    },
    {
        href: 'https://www.reddit.com/r/CryptoArsenal',
        icon: <FaReddit />,
        text: 'Reddit',
    },
    {
        href: 'https://www.tradingview.com/u/Crypto-Arsenal/',
        icon: (
            <>
                <svg
                    width='20'
                    height='20'
                    viewBox='0 0 36 27'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M14 22H7V11H0V4h14v18zM28 22h-8l7.5-18h8L28 22z'
                        fill='currentColor'
                    ></path>
                    <circle cx='20' cy='8' r='4' fill='currentColor'></circle>
                </svg>
            </>
        ),
        text: 'TradingView',
    },
];

export default function Community() {
    const { t } = useTranslation();
    return (
        <Wrap spacing='2px' justify='center' mt={6}>
            {communityList.map((community, i) => (
                <Button
                    key={i}
                    as='a'
                    href={t(community.href)}
                    target='_blank'
                    variant={'outline'}
                    leftIcon={community.icon}
                    bg="gray.50"
                    _dark={{ bg: "gray.800" }}
                    size={'sm'}
                >
                    <Center>
                        <Text>{community.text}</Text>
                    </Center>
                </Button>
            ))}
        </Wrap>
    );
}
