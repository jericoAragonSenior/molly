import { IMetadata } from '@/shared/types/metadata'
import GameHistoryMain from '@/widgets/Profile/ui/GameHistory/GameHistoryMain';

export async function generateMetadata({ params: { locale } }: IMetadata) {
    // const t = await getTranslations({ locale, namespace: 'Main' })

    return {
        title: {
            default: 'Profile/History-game'
        },
        description: ''
    }
}


const GameHistory = () => {
    return (
        <div className='w-full h-full px-4  lg:!p-0'>
            <div className='w-full h-full'>
                <GameHistoryMain />
            </div>
        </div>
    )
}

export default GameHistory;