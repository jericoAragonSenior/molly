import clsx from "clsx";
import cls from "./Main.module.sass";
import MainHeader from "./MainHeader";
import MainTrader from "./MainTrader";
import MainBestDrop from "./MainBestDrop";
import MainInventory from "./MainInventory";

const Main = () => {
    return (
        <div className="w-full flex flex-col gap-4 px-2">
            <div className={clsx("w-full flex-wrap lg:!bg-none lg:!p-0", cls.user_main)}>
                <div className={clsx("w-full p-5 3sm:!p-1.5 flex flex-col lg:!bg-none lg:p-2", cls.user_main_inner)}>
                    <MainHeader />
                    <MainTrader />
                    <MainBestDrop />
                </div>
            </div>
            <MainInventory />
        </div>

    )
}

export default Main;