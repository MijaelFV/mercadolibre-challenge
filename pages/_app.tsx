import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import lightTheme from '../themes/light-theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ColorModeScript initialColorMode={lightTheme.config.initialColorMode} />
      <ChakraProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
