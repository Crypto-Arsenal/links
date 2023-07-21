import {
    Heading,
    Box,
    useColorModeValue,
    Flex,
    useTheme,
    Tooltip,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Collaborator from './theme-button/collaborator';

const colabList = [
    {
        src: '/assets/images/colab/binance.png',
        name: 'Binance',
        link: 'https://accounts.binance.com/en/register-person?gclid=CjwKCAjwtuOlBhBREiwA7agf1hvxohDmlgwjZDrlnTKblFLLTLI-1MKSZ0-aLnm00qJktl7hxO1SRxoCsLoQAvD_BwE&ref=PV44VRAY',
    },
    {
        src: '/assets/images/colab/crypto.jpeg',
        name: 'Crypto.com',
        link: 'https://accounts.binance.com/en/register-person?gclid=CjwKCAjwtuOlBhBREiwA7agf1hvxohDmlgwjZDrlnTKblFLLTLI-1MKSZ0-aLnm00qJktl7hxO1SRxoCsLoQAvD_BwE&ref=PV44VRAY',
    },
    {
        src: '/assets/images/colab/bitfinex.png',
        name: 'Bitfinex',
        link: 'https://accounts.binance.com/en/register-person?gclid=CjwKCAjwtuOlBhBREiwA7agf1hvxohDmlgwjZDrlnTKblFLLTLI-1MKSZ0-aLnm00qJktl7hxO1SRxoCsLoQAvD_BwE&ref=PV44VRAY',
    },
    {
        src: '/assets/images/colab/bitget.png',
        name: 'Bitget',
        link: 'https://accounts.binance.com/en/register-person?gclid=CjwKCAjwtuOlBhBREiwA7agf1hvxohDmlgwjZDrlnTKblFLLTLI-1MKSZ0-aLnm00qJktl7hxO1SRxoCsLoQAvD_BwE&ref=PV44VRAY',
    },
    {
        src: '/assets/images/colab/kraken.jpeg',
        name: 'Kraken',
        link: 'https://accounts.binance.com/en/register-person?gclid=CjwKCAjwtuOlBhBREiwA7agf1hvxohDmlgwjZDrlnTKblFLLTLI-1MKSZ0-aLnm00qJktl7hxO1SRxoCsLoQAvD_BwE&ref=PV44VRAY',
    },
    {
        src: '/assets/images/colab/okx.png',
        name: 'OKX',
        link: 'https://accounts.binance.com/en/register-person?gclid=CjwKCAjwtuOlBhBREiwA7agf1hvxohDmlgwjZDrlnTKblFLLTLI-1MKSZ0-aLnm00qJktl7hxO1SRxoCsLoQAvD_BwE&ref=PV44VRAY',
    },
    {
        src: '/assets/images/colab/bybit.png',
        name: 'Bybit',
        link: 'https://accounts.binance.com/en/register-person?gclid=CjwKCAjwtuOlBhBREiwA7agf1hvxohDmlgwjZDrlnTKblFLLTLI-1MKSZ0-aLnm00qJktl7hxO1SRxoCsLoQAvD_BwE&ref=PV44VRAY',
    },
    {
        src: '/assets/images/colab/huobi.jpeg',
        name: 'Huobi',
        link: 'https://accounts.binance.com/en/register-person?gclid=CjwKCAjwtuOlBhBREiwA7agf1hvxohDmlgwjZDrlnTKblFLLTLI-1MKSZ0-aLnm00qJktl7hxO1SRxoCsLoQAvD_BwE&ref=PV44VRAY',
    },
];

export default function Partner() {
    const { t } = useTranslation();
    const theme = useTheme();
    const spacing = theme.space[5];

    return (
        <Flex
            textAlign={'center'}
            justifyContent={'center'}
            direction={'column'}
            width={'full'}
            maxW={'900px'}
            overflow={'hidden'}
        >
            <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
                <Tooltip
                    label={t('colab.Register With Invitation Code!')}
                    placement='top'
                >
                    <Heading
                        py={4}
                        fontSize={30}
                        fontFamily={'body'}
                        fontWeight={'bold'}
                        color={useColorModeValue('gray.700', 'gray.50')}
                    >
                        {' '}
                        {t('colab.Partners')}{' '}
                    </Heading>
                </Tooltip>
            </Box>
            <Flex
                width={{ base: 'full', sm: 'xl', lg: '4xl' }}
                margin={'auto'}
                flexWrap='wrap'
                justifyContent='center'
                marginX={`calc(${spacing} / -2)`}
            >
                {colabList.map((colab, i) => (
                    <Collaborator
                        key={i}
                        bgSrc={colab.src}
                        name={colab.name}
                        link={colab.link}
                    />
                ))}
            </Flex>
        </Flex>
    );
}
