import Layout from '@/components/layout';
import '@/internationalization/i18n';
import theme from '@/theme';
import { AnalyticsProvider } from '@/utils/analytics';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/josefin-sans/700.css';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <AnalyticsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnalyticsProvider>
    </ChakraProvider>
  );
};

export default App;
