import data from '@/data/data.json';
import '@/styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    if (typeof window === 'object') {
        AOS.init();
    }

    return (
        <>
            <NextSeo
                canonical={data.website}
                defaultTitle={data.name}
                description={data.about}
                openGraph={{
                    url: data.website,
                    title: data.name,
                    description: data.about,
                    images: [
                        {
                            url: `${data.website}/og-image.png`,
                            width: 800,
                            height: 420,
                            alt: data.name,
                        },
                    ],
                    profile: {
                        firstName: 'Avneesh',
                        gender: 'Male',
                        lastName: 'Agarwal',
                        username: 'avneesh0612',
                    },
                }}
                title={data.name}
                titleTemplate={data.name}
                twitter={{
                    handle: '@avneesh0612',
                    site: '@avneesh0612',
                    cardType: 'summary_large_image',
                }}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
