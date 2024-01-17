import createMiddleware from 'next-intl/middleware';
import {ALL_LOCALES, DEFAULT_LOCALE} from '@/tolgee/shared';

export default createMiddleware({
    locales: ALL_LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    localePrefix: 'as-needed',
});

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ['/((?!api|_next|.*\\..*).*)'],
    unstable_allowDynamic: [
        '/node_modules/@tolgee/**', // use a glob to allow anything in the function-bind 3rd party module
    ],
};