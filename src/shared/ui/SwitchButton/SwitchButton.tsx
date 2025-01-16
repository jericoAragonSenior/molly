"use client"

import { useState } from "react";

interface SwitchButtonProps {
    prevClick?: () => void
    nextClick?: () => void
}


const SwitchButton = ({ prevClick, nextClick }: SwitchButtonProps) => {
    

    const [isPrev, setIsPrev] = useState<boolean>(true)

    const switchHandle = () => {
        if (isPrev) {
            if (nextClick)
                nextClick();
        }
        else {
            if (prevClick)
                prevClick();
        }
        setIsPrev(!isPrev);
    }

    return (
        <label className="inline-flex items-center cursor-pointer border-none">
            <input type="checkbox" value="" className="sr-only peer" onClick={() => switchHandle()}  />
            <div style={{ boxShadow: "none" }} className="border-none relative w-11 h-6 bg-[#22bb55] rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#E2B617]"></div>
        </label>
    )
}

export default SwitchButton;