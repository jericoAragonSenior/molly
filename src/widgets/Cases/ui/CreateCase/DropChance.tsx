import clsx from "clsx";
import cls from "../Cases.module.sass";
import Image from "next/image";

const DropChance = () => {




    return (
        <div className={clsx(cls.chance_item)}>
            <div className={clsx(cls.chance_item_inner, "p-[10px] flex gap-[10px]")}>
                <div className="w-[100px]">
                    <div className={clsx("rounded-md bg-[#121721] w-full py-1")}>
                        <div className={clsx("py-2 px-3", cls.chance_item_bg)}>
                            <Image src={'/images/livefeed/skin-8.png'} width={75} height={55} alt="skin" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between flex-1 gap-0.5">
                    <div className="flex flex-col gap-[2px]">
                        <span className="text-[10px] font-[500] text-[#576386]">P2000</span>
                        <span className="text-[12px] font-[500] text-white">Blue Laminate</span>
                        <div className="flex gap-0.5">
                            <span className="text-[11px] font-[600] text-[#17E2A5]">$</span>
                            <span className="text-[11px] font-[600] text-white">13.35</span>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full">
                        <div className={clsx(cls.chance_item_btn, "w-[90px] sm:w-auto")}>
                            <div className={clsx(cls.chance_item_btn_inner, "p-1.5 flex items-center sm:py-2.5 sm:px-2")}>
                                <div className="bg-[#17E2A5] rounded-md text-[#141925] text-[14px] font-[900] py-[5px] px-[9px] sm:hidden flex">
                                    <div>%</div>
                                </div>
                                <div className="flex-1 flex justify-center items-center sm:gap-1">
                                    <span className="text-white text-[14px] font-[700] hidden sm:flex">%</span>
                                    <span className="text-white text-[14px] font-[700]">14</span>
                                </div>
                            </div>
                        </div>
                        <div className={clsx(cls.chance_item_active, "flex flex-1")}>
                            <div className={clsx(cls.chance_item_active_inner, "w-full flex justify-center py-2.5 items-center")}>
                                <div className="flex gap-0.5">
                                    <span className="text-white text-[14px] font-[700]">
                                        +
                                    </span>
                                    <span className="text-[11px] font-[600] text-[#17E2A5]">$</span>
                                    <span className="text-white text-[14px] font-[700]">
                                        400.33
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropChance;