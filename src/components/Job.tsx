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
    { name: 'job.Backend Internship' },
    { name: 'job.Frontend Internship' },
    { name: 'job.Marketing Internship' },
];

const Position = () => {
    const { t } = useTranslation();
    return (
        <>
            {positionList.map((position) => (
                <ListItem>
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
            <ExpandableButton style={style}>
                <Position />
            </ExpandableButton>
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
        </>
    );
}
