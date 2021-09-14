import '../styles/globals.css'
import type {AppProps} from 'next/app'
import UI from "@tolgee/ui";
import enLocale from "../i18n/en.json";
import csLocale from "../i18n/cs.json";
import {useRouter} from "next/router";
import {TolgeeProvider} from "@tolgee/react";

function MyApp({Component, pageProps}: AppProps) {
    const {locale: activeLocale} = useRouter()

    return <TolgeeProvider
        ui={UI}
        forceLanguage={activeLocale}
        apiKey={process.env.NEXT_PUBLIC_TOLGEE_API_KEY}
        apiUrl={process.env.NEXT_PUBLIC_TOLGEE_API_URL}
        staticData={{
            en: enLocale,
            cs: csLocale
        }}
    >
        <Component {...pageProps} />
    </TolgeeProvider>
}

export default MyApp
