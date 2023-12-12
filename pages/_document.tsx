// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Favicon  */}
                <link rel="icon" type="icon" href="/assets/images/favicon.ico" />
                {/* Fonts  */}
                <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700;800&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KPK8837Q" height="0" width="0" style="display:none;visibility:hidden"></iframe>
                </noscript>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
