import {Tolgee, FormatSimple, DevTools, BrowserExtensionPlugin, DevBackend} from '@tolgee/web';

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
            .use(DevBackend())
            .use(BrowserExtensionPlugin())
            // Preset shared settings
            .updateDefaults({
                apiKey,
                apiUrl,
            })
    );
}