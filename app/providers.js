'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { jost, clicker_script } from './font';

export const theme = extendTheme({
  fonts: {
    heading: 'var(--font-clicker_script)',
    body: 'var(--font-jost)',
  }
});

export function Providers({ children }) {
  return (
    <CacheProvider>
      <style jsx global>
      {`
        :root {
          --font-jost: ${jost.style.fontFamily};
          --font-clicker_script: ${clicker_script.style.fontFamily};
        }
      `}
    </style>
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
    </CacheProvider>
  )
}
