import App, { AppProps } from 'next/app';
import Head from 'next/head';
import { BaseProvider, LightTheme } from 'baseui';
import { NextPage } from 'next/types';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../styletron';
import type { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="description"
            content="This ultimate guide cover all the important aspects of blogging. Find out how to set up a succesful blog or to make yours even better!"
          />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </BaseProvider>
    </StyletronProvider>
  );
};

export default MyApp;
