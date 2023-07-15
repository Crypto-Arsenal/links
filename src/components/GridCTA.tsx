import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
} from '@chakra-ui/react';
import { } from '@chakra-ui/react';
import SimpleThreeColumns from './FeatureRow';
import { ApplyButtonWithPopover } from './ApplyButton';

interface FeatureProps {
    heading: string;
    text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
    return (
        <GridItem>
            <chakra.h3 fontSize="xl" fontWeight="600">
                {heading}
            </chakra.h3>
            <chakra.p>{text}</chakra.p>
        </GridItem>
    );
};

export default function GridListWithCTA() {
    return (
        <Box width={'full'} mt={8} p={2}>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(2, 1fr)',
                }}
                gap={2}>
                <GridItem colSpan={1}>
                    <VStack alignItems="flex-start" spacing="20px" >
                        <chakra.h2 fontSize="3xl" fontWeight="700">
                            開啟你的量化事業
                        </chakra.h2>
                        <Box w={'80%'}>
                            <ApplyButtonWithPopover />
                        </Box>
                    </VStack>
                </GridItem>
                <GridItem>
                    <Flex>
                        <chakra.p textAlign={'left'}>
                            我們提供一個難得機會讓你能與加密貨幣造市商、專業選擇權團隊、主觀交易大神和資深量化交易工程師...等交流，並在他們領導下學習和開發自己的策略！並透過CA平台提供的交易俱樂部計畫，讓你開啟你的量化事業、創造被動收入。
                        </chakra.p>
                    </Flex>
                </GridItem>
            </Grid>
            <Divider mt={12} mb={6} />
            {/* <SimpleThreeColumns /> */}
            {/* <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }}
                gap={{ base: '8', sm: '12', md: '16' }}>
                <Feature
                    heading={'First Feature'}
                    text={'Short text describing one of you features/service'}
                />
                <Feature
                    heading={'Second Feature'}
                    text={'Short text describing one of you features/service'}
                />
                <Feature
                    heading={'Third Feature'}
                    text={'Short text describing one of you features/service'}
                />
                <Feature
                    heading={'Fourth Feature'}
                    text={'Short text describing one of you features/service'}
                />
            </Grid> */}
        </Box>
    );
}