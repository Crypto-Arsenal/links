import LanguagesButton from '@/components/languages-button';
import ThemeButton from '@/components/theme-button';
import { HStack, Flex, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <HStack
      as='header'
      // position='fixed'
      // top='0'
      pt={3}
      px={5}
      zIndex='tooltip'
      justify='space-between'
      align='center'
      w='100%'
    >
      {/* <Flex>
        <Text> Crypto Arsenal</Text>
      </Flex> */}
      {/* <Flex> */}
      <ThemeButton />
      <LanguagesButton />
      {/* </Flex> */}
    </HStack>
  );
};

export default Header;
