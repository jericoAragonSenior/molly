import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

import { locales } from './shared/config/i18n/config'

export default async function middleware(req: NextRequest) {
	const handleI18nRouting = createMiddleware({
		// A list of all locales that are supported
		locales,
		// Used when no locale matches
		defaultLocale: 'en'
	})

	const response = handleI18nRouting(req)

	return response
}

export const config = {
	// Match only internationalized pathnames
	matcher: [
		// '/',
		'/(en|ru)/:path*',
		'/((?!api|_next|_vercel|.*\\..*).*)',
		'/([\\w-]+)?/users/(.+)'
	]
}
