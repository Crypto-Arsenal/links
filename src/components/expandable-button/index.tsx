import {
    Box,
    Center,
    Text,
    useColorModeValue,
    Flex,
    Divider,
    useDisclosure,
    Collapse,
    List,
} from '@chakra-ui/react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';

type ExpandableButtonProps = {
    children: ReactNode,
    style: {
        boxShadow: string,
        border: string,
        bg: string,
        icon: JSX.Element,
        text: string,
        listSpacing: number,
    }
}
const ExpandableButton = ({ children, style }: ExpandableButtonProps) => {
    const { isOpen, onToggle } = useDisclosure();
    const { t } = useTranslation();

    return (
        <Box
            boxShadow={style.boxShadow}
            // _hover={{
            //     bg: 'blue.500',
            // }}
            // _focus={{
            //     bg: 'blue.500',
            // }}
            // as='button'
            w={'full'}
            // boxShadow={'md'}
            p={'10px'}
            rounded={'lg'}
            // align={{ base: null, md: 'center' }}
            border={style.border}
        >
            <Flex
                as='button'
                onClick={onToggle}
                align={{ base: 'center', md: 'center' }}
                // flexDir={{ base: 'column', md: 'row' }}
                w={'full'}
            >
                <Center>
                    <Flex
                        bg={style.bg}
                        width={{ base: '40px', md: '50px' }}
                        height={{ base: '40px', md: '50px' }}
                        rounded='md'
                        justifyContent='center'
                        alignItems={'center'}
                    >
                        {' '}
                        {style.icon}{' '}
                    </Flex>
                </Center>
                <Box w='full'>
                    <Flex
                        justifyContent='center'
                        alignItems={'center'}
                        textAlign='center'
                    >
                        <Text fontWeight={'bold'} color='#3F73FF'>
                            {t(style.text)}{' '}
                        </Text>
                    </Flex>
                </Box>
                <Box mr={2}>{isOpen ? <FaCaretUp /> : <FaCaretDown />}</Box>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <Box mt={3}>
                    <Divider />
                    <Box m={1}>
                        <Box
                            bg={useColorModeValue('gray.50', 'gray.900')}
                            px={2}
                            py={3}
                        >
                            <List spacing={style.listSpacing}>
                                {children}
                            </List>
                        </Box>
                    </Box>
                </Box>
            </Collapse>
        </Box>
    );
};

export default ExpandableButton;
