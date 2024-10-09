import React from "react";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
// import type { Metadata } from "next";
import Navbar from "@/shared/components/layouts/Navbar";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './globals.css';
import { isMobileDevice } from "@/shared/helpers/utils";

// export const metadata: Metadata = {
//     title: "Evermos - Pusat Reseller Elektronik Online Terpercaya",
//     description: "Pusat Reseller barang elektronik online terpercaya se Indonesia",
// };

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f4f4f4;
  }

  * {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={{}}>
                <GlobalStyle />
                <Navbar />
                <main style={{ marginTop: isMobileDevice() ? 65 : 86 }}>
                    <Component {...pageProps} />
                </main>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
