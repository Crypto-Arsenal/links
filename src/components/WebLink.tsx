import {
    Center,
    Text,
    Button,
    useColorModeValue,
    Wrap,
} from '@chakra-ui/react';
import { BsGlobe2 } from 'react-icons/bs';
import { FaCode, FaInfoCircle } from 'react-icons/fa';

const webList = [
    {
        href: 'https://crypto-arsenal.io',
        icon: <BsGlobe2 />,
        text: 'Website',
    },
    {
        href: 'https://help.crypto-arsenal.io',
        icon: <FaInfoCircle />,
        text: 'Help Center',
    },
    {
        href: 'https://docs.crypto-arsenal.io/',
        icon: <FaCode />,
        text: 'Documentation',
    },
];

export default function WebLink() {
    return (
        <Wrap spacing='2px' justify='center' mt={6}>
            {webList.map((web) => (
                <Button
                    as='a'
                    href={web.href}
                    target='_blank'
                    variant={'outline'}
                    leftIcon={web.icon}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    size={'sm'}
                >
                    <Center>
                        <Text>{web.text}</Text>
                    </Center>
                </Button>
            ))}
        </Wrap>
    );
}
