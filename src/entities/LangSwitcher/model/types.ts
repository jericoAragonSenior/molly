import { LocaleType } from '@/shared/config/i18n/config'
import { ISelectItem } from '@/shared/ui/Select/Select'

export interface ILanguageItem extends ISelectItem {
	value: LocaleType
	icon: string
}
