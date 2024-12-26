// A list of all locales that are supported
export const locales = ['en', 'ru'] as const;
export type LocaleType = typeof locales[number];