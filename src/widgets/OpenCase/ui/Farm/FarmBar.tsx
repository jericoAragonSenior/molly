

import CaseBar from '../CaseBar';
import { useTranslations } from 'next-intl';

const FarmBar = () => {

    // For translation
    const t = useTranslations();

    return (
        <CaseBar title={t('case_farm.title')} />
    )
}

export default FarmBar;