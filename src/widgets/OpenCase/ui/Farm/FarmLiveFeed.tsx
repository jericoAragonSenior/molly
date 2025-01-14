"use client"
import { useCommonStore } from "@/entities/Common/model/store";
import CaseLiveFeed from "../CaseLiveFeed"

const FarmLiveFeed = () => {

    const openFarm = useCommonStore(state => state.openFarm)
    
    return (
        openFarm == true &&
        <div className={'w-full overflow-hidden flex justify-start'}>
            <CaseLiveFeed />
        </div>
    )
}

export default FarmLiveFeed;