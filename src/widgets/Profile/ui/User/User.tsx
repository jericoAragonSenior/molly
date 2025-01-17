"use client"

import clsx from "clsx"
import cls from "./User.module.sass"
import { useAppResponsive } from "@/shared/lib/useResponsive";
import UserHeader from "./UserHeader";

const User = () => {

    // For responsive
    const breakpoints = useAppResponsive();

    return (
        <div className="w-full flex flex-col gap-4 px-2">
            <div className={clsx("w-full flex-wrap lg:!bg-none lg:!p-0", cls.user_main)}>
                <div className={clsx("w-full p-5 3sm:!p-1.5 flex flex-col lg:!bg-none lg:p-2", cls.user_main_inner)}>
                    <UserHeader />
                </div>
                
            </div>
        </div>
    )
}

export default User;