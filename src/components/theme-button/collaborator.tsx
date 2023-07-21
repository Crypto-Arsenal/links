import {
    Heading,
    Box,
    Center,
    Stack,
    useColorModeValue,
    Image,
    useTheme,
    Link,
} from '@chakra-ui/react';

type CollaboratorType = {
    bgSrc: string;
    name: string;
    link: string;
};

const Collaborator = ({ bgSrc, name, link }: CollaboratorType) => {
    const theme = useTheme();
    const spacing = theme.space[5];
    return (
        <Center
            py={12}
            marginBottom={spacing}
            _even={{
                marginX: spacing,
            }}
        >
            <Link href='https://chakra-ui.com' isExternal>
                <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'200px'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}
                >
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'115px'}
                        width={'155px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: bgSrc,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}
                    >
                        <Image
                            rounded={'lg'}
                            height={115}
                            width={155}
                            objectFit={'cover'}
                            src={bgSrc}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Heading
                            fontSize={'2xl'}
                            fontFamily={'body'}
                            fontWeight={500}
                        >
                            {name}
                        </Heading>
                    </Stack>
                </Box>
            </Link>
        </Center>
    );
};

export default Collaborator;
