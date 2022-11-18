import PageLayout from '@/components/page-layout';
import { Button, Code, Divider, Editable, EditableInput, EditablePreview, Flex, Heading, Input, Text, useClipboard, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

const Meet = () => {
  const placeholder = "text to be copied...";
  const { onCopy, value, setValue, hasCopied } = useClipboard("meettaipei2022");
  return (
    <PageLayout title='Meet CA' description='Meet CA'>
      <VStack spacing={2} justify='center' h='100vh'>
        <Heading>Giftcode</Heading>
        <Divider />
        <Code>meettaipei2022</Code>
        <Flex mb={2}>
          <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
        </Flex>

        <NextLink href='/' passHref>
          <Button colorScheme='brand' size='md'>
            Return to home
          </Button>
        </NextLink>
      </VStack>
    </PageLayout>
  );
};

export default Meet;
