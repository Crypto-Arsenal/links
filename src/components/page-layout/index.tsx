import { Container, ContainerProps } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: -40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: -0,
    y: 40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
};

type PageProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

const MotionContainer = motion<ContainerProps>(Container);

const PageLayout = ({ title, description, children }: PageProps) => {
  return (
    <>
      <NextSeo
        title={title + ' | Crypto Arsenal'}
        description={description}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@_cryptoarsenal_',
        }}
        openGraph={{
          url: 'https://links.crypto-arsenal.io',
          title: title + ' | Crypto Arsenal',
          description: description,
          locale: 'en_US',
          images: [
            {
              url: 'https://crypto-arsenal.io/_next/image?url=%2Fstatic%2Flanding-page-rwd%2Fmain-computer.png&w=1920&q=7',
              width: 1200,
              height: 630,
              alt: 'Links | Crypto Arsenal',
              type: 'image/png',
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'https://crypto-arsenal.io/static/favicon/dark-32.png',
          },
        ]}
      />
      <MotionContainer
        display='flex'
        maxW='container.lg'
        minH={{ base: 'auto', md: 'auto' }}
        px={{ base: 4, lg: 8 }}
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        centerContent
      >
        {children}
      </MotionContainer>
    </>
  );
};

export default PageLayout;
