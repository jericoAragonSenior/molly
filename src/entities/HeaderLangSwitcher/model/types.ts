import { LocaleType } from '@/shared/config/i18n/config'
import { HeaderSelectItem } from '@/shared/ui/HeaderSelect/HeaderSelect'

export interface ILanguageItem extends HeaderSelectItem {
	value: LocaleType
}
