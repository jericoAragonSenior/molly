"use client"
import { useCommonStore } from "@/entities/Common/model/store";
import CaseLiveFeed from "../CaseLiveFeed"

const FarmLiveFeed = () => {

    const openFarm = useCommonStore(state => state.openFarm)
    
    return (
        openFarm == true && <CaseLiveFeed />
    )
}

export default FarmLiveFeed;