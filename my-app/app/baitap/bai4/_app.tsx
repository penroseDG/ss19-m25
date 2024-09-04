import { ClerkProvider } from '@clerk/nextjs';
import type { AppProps } from 'next/app';
import Navbar from './components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ClerkProvider>
            <Navbar />
            <Component {...pageProps} />
        </ClerkProvider>
    );
}

export default MyApp;