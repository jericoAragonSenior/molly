import TopBarLeftNav from "./TopBarLeftNav"
import TopBarRightNav from "./TopBarRightNav"

const TopBar = () => {
    return (
        <div className='w-full h-[48px] pb-[1px] bg-[#161C28]'>
            <div className='w-full h-full bg-[#10151E] flex justify-between items-center px-[40px]'>
                <TopBarLeftNav />
                <TopBarRightNav />
            </div>
        </div>
    )
}

export default TopBar