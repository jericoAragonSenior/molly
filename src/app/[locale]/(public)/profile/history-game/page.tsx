import { IMetadata } from '@/shared/types/metadata'

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
                
            </div>
        </div>
    )
}

export default GameHistory;