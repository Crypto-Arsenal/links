import { ReactNode } from 'react';
import {
    Stack,
    Container,
    Box,
    Flex,
    Text,
    Heading,
    SimpleGrid,
} from '@chakra-ui/react';

export default function StatsGridWithImage() {
    return (
        <Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {stats.map((stat) => (
                    <Box key={stat.title}>
                        <Text
                            fontFamily={'heading'}
                            fontSize={'3xl'}
                            color={'white'}
                            mb={3}>
                            {stat.title}
                        </Text>
                        <Text fontSize={'xl'} color={'gray.400'}>
                            {stat.content}
                        </Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box >
    );
}

const StatsText = ({ children }: { children: ReactNode }) => (
    <Text as={'span'} fontWeight={700} color={'white'}>
        {children}
    </Text>
);

const stats = [
    {
        title: '10+',
        content: (
            <>
                <StatsText>Software modules</StatsText> for detailed monitoring and
                real-time analytics
            </>
        ),
    },
    {
        title: '24/7',
        content: (
            <>
                <StatsText>Analytics</StatsText> enabled right in your dashboard without
                history limitations
            </>
        ),
    },
    {
        title: '13%',
        content: (
            <>
                <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
                their management solution
            </>
        ),
    },
    {
        title: '250M+',
        content: (
            <>
                <StatsText>Plants</StatsText> currently connected and monitored by the
                NewLife™ software
            </>
        ),
    },
];
