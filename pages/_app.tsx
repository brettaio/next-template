// _app.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { sendGTMEvent } from '@next/third-parties/google';
import { Provider } from 'react-redux';
import store from '../store/index';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Suspense } from 'react';
import DefaultLayout from '../components/Layouts/DefaultLayout';

function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        // Trigger a pageLoaded event on component mount
        sendGTMEvent({ event: 'pageLoaded', pagePath: router.pathname });

        // Add event listener for route changes to trigger a pageView event
        const handleRouteChange = (url: string) => {
            sendGTMEvent({ event: 'pageView', pagePath: url });
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        // Remove event listener on component unmount
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events, router.pathname]); // Dependency on router.pathname ensures the effect runs when the route changes

    return (
        <Provider store={store}>
            <Suspense>
                <Head>
                    <title>Bretta Etc Ltd. Google Ad Management & Licensed Templates</title>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            </Suspense>
        </Provider>
    );
}

export default App;
