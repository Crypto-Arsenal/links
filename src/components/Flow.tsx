import { Center, Text, Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const flowList = [
    {
        number: '2k',
        name: 'stats.Trading Bots',
    },
    {
        number: '6k',
        name: 'stats.Users',
    },
    {
        number: '120M',
        name: 'stats.Trading Volume',
    },
];

export default function Flow() {
    const { t } = useTranslation();
    return (
        <Center mt={4}>
            <Stack direction={'row'} justify={'center'} spacing={4} ml='15px'>
                {flowList.map((flow) => (
                    <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>{flow.number}</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            {t(flow.name)}
                        </Text>
                    </Stack>
                ))}
            </Stack>
        </Center>
    );
}
