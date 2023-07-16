import { Button, Badge, ListIcon, ListItem } from '@chakra-ui/react';
import { BsPeopleFill } from 'react-icons/bs';
import { CheckIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';
import ExpandableButton from './expandable-button';

const style = {
    boxShadow:
        '0px 1px 25px -5px rgb(63 115 255 / 49%), 0 10px 10px -5px rgb(63 115 255 / 49%)',
    border: '1px solid #3F73FF',
    bg: '#3F73FF',
    icon: <BsPeopleFill color='white' />,
    text: 'job.Join our Wordclass Team',
    listSpacing: 3,
};

const positionList = [
    { name: 'job.Quant Intership' },
    // { name: 'job.Backend Internship' },
    // { name: 'job.Frontend Internship' },
    { name: 'job.Marketing Internship' },
];

const Position = () => {
    const { t } = useTranslation();
    return (
        <>
            {positionList.map((position, i) => (
                <ListItem key={i}>
                    <ListIcon as={CheckIcon} color='green.400' />
                    {t(position.name)}
                </ListItem>
            ))}
        </>
    );
};

export default function Job() {
    return (
        <>
            <ExpandableButton style={style} >
                <Position />
                <Button
                    as='a'
                    href='/internship'
                    // target={'_blank'}ss
                    mt={10}
                    w={'full'}
                    bg={'purple.400'}
                    color={'white'}
                    rounded={'xl'}
                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                    _hover={{
                        bg: 'purple.500',
                    }}
                    _focus={{
                        bg: 'purple.500',
                    }}
                    rightIcon={<ExternalLinkIcon />}
                >
                    量化實習生計畫👩‍💻 {' '}
                    <Badge colorScheme='purple' ml={2}>
                        {' '}
                        1 NEW{' '}
                    </Badge>
                </Button>
                <Button
                    as='a'
                    href='https://www.104.com.tw/job/81xca?jobsource=checkc'
                    target={'_blank'}
                    mt={10}
                    w={'full'}
                    bg={'orange.400'}
                    color={'white'}
                    rounded={'xl'}
                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                    _hover={{
                        bg: 'orange.500',
                    }}
                    _focus={{
                        bg: 'orange.500',
                    }}
                    rightIcon={<ExternalLinkIcon />}
                >
                    104 {' '}
                    <Badge colorScheme='orange' ml={2}>
                        {' '}
                        1 NEW{' '}
                    </Badge>
                </Button>
                <Button
                    as='a'
                    href='https://www.cakeresume.com/companies/crypto-arsenal/jobs'
                    target={'_blank'}
                    mt={10}
                    w={'full'}
                    bg={'green.400'}
                    color={'white'}
                    rounded={'xl'}
                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                    _hover={{
                        bg: 'green.500',
                    }}
                    _focus={{
                        bg: 'green.500',
                    }}
                    rightIcon={<ExternalLinkIcon />}
                >
                    Cakeresume{' '}
                    <Badge colorScheme='green' ml={2}>
                        {' '}
                        3 NEW{' '}
                    </Badge>
                </Button>
                <Button
                    as='a'
                    href='https://www.yourator.co/companies/Crypto-Arsenal'
                    target={'_blank'}
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
                    Yourator{' '}
                    <Badge colorScheme='green' ml={2}>
                        {' '}
                        4 NEW{' '}
                    </Badge>
                </Button>
            </ExpandableButton>

        </>
    );
}
