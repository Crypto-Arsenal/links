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

const jobWebList = [
    {
        href: '/internship',
        color: 'purple',
        text: '量化實習生計畫👩‍💻',
        openings: '1 NEW',
    },
    {
        href: 'https://www.104.com.tw/job/81xca?jobsource=checkc',
        color: 'orange',
        text: '104',
        openings: '1 NEW',
    },
    {
        href: 'https://www.cakeresume.com/companies/crypto-arsenal/jobs',
        color: 'green',
        text: 'Cakeresume',
        openings: '3 NEW',
    },
    {
        href: 'https://www.yourator.co/companies/Crypto-Arsenal',
        color: 'blue',
        text: 'Yourator',
        openings: '4 NEW',
    },
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

const JobWeb = () => {
    return (
        <>
            {jobWebList.map((web, i) => (
                <Button
                    key={i}
                    as='a'
                    href={web.href}
                    target={'_blank'}
                    mt={10}
                    w={'full'}
                    bg={web.color + '.400'}
                    color={'white'}
                    rounded={'xl'}
                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                    _hover={{
                        bg: web.color + '.500',
                    }}
                    _focus={{
                        bg: web.color + '.500',
                    }}
                    rightIcon={<ExternalLinkIcon />}
                >
                    {web.text}{' '}
                    <Badge colorScheme={web.color} ml={2}>
                        {' '}
                        {web.openings}{' '}
                    </Badge>
                </Button>
            ))}
        </>
    );
};

export default function Job() {
    return (
        <>
            <ExpandableButton style={style}>
                <Position />
                <JobWeb />
            </ExpandableButton>
        </>
    );
}
