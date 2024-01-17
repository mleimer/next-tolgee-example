import { DevTools, Tolgee, FormatSimple } from '@tolgee/web';
// import {InContextTools} from "@tolgee/web/tools";

export const ALL_LOCALES = ['en', 'de'];

export const DEFAULT_LOCALE = 'en';

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL;

export async function getStaticData(languages: string[]) {
    const result: Record<string, any> = {};
    for (const lang of languages) {
        result[lang] = (await import(`../i18n/${lang}.json`)).default;
    }
    return result;
}

export function TolgeeBase() {
    return (
        Tolgee()
            .use(FormatSimple())
            .use(DevTools())
            /*.use(InContextTools({
                credentials: {
                    apiKey: apiKey,
                    apiUrl: apiUrl,
                    projectId: "4834",
                }
            }))*/
            // Preset shared settings
            .updateDefaults({
                apiKey,
                apiUrl,
            })
    );
}