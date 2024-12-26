'use client'

import { languages } from '../model/items'
import { ILanguageItem } from '../model/types'
import { useLocale } from 'next-intl'
import { FC } from 'react'

import { LocaleType } from '@/shared/config/i18n/config'
import { usePathname, useRouter } from '@/shared/config/i18n/navigation'
import HeaderSelect from '@/shared/ui/HeaderSelect/HeaderSelect'

interface HeaderLangSwitcherProps {
	className?: string
}

const HeaderLangSwitcher: FC<HeaderLangSwitcherProps> = ({ className }) => {
	const router = useRouter()
	const pathname = usePathname()

	const locale = useLocale()

	const changeLocale = (value: string) => {
		router.replace(pathname, { locale: value as LocaleType })
	}

	const getLanguageObject = (value: string): ILanguageItem => {
		const languageObj = languages.find(language => language.value === value) || languages[0]
		return languageObj
	}

	return (
		<HeaderSelect
			value={getLanguageObject(locale)}
			items={languages}
			onChangeValue={changeLocale}
			className={className}
		/>
	)
}

export default HeaderLangSwitcher
