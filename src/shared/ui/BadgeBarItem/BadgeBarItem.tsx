import { TitleType } from "@/widgets/Profile/model/types"
import { CircularProgress } from "@nextui-org/react"
import clsx from "clsx"

interface BadgeBarItemProps {
    title: string
    content: string
    icon?: React.FC<React.SVGProps<SVGSVGElement>>
    titleIcon?: React.FC<React.SVGProps<SVGSVGElement>>
    titleType?: TitleType
    isUpperContent?: boolean
}

const BadgeBarItem = ({ title, content, icon: Icon, titleType = "bg", titleIcon: TitleIcon, isUpperContent = false }: BadgeBarItemProps) => {
    return (
        <div className={clsx("h-full bg-[#22293A] p-[1px] rounded-xl ")}>
            <div className={clsx("h-full bg-[#1D2332] rounded-xl items-center relative flex gap-4", Icon ? "p-4 sm:!px-0" : "py-2 px-4")}>
                {
                    Icon ?
                        <div className="flex gap-4 sm:flex sm:justify-center sm:items-center sm:w-full sm:h-full">
                            <div className='w-auto sm:absolute sm:-top-1/2 sm:z-10 sm:translate-y-1/2'>
                                <div className='bg-[#242C3E] rounded-[10px] p-[1px]'>
                                    <div className='bg-[#1A202E] rounded-[10px] p-3 sm:p-2'>
                                        {<Icon className='w-6 h-6 fill-[#5A6786]' />}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-0.5 sm:text-center sm:mt-3'>
                                <span className='text-white text-[16px] font-[Gotham Medium]'>{title}</span>
                                <span className={clsx('text-[#5A6786] text-[12px]', isUpperContent == true && "uppercase")}>{content}</span>
                            </div>
                        </div>

                        :
                        <div className="h-full w-full flex-col flex items-center justify-center">
                            <div className="w-full flex items-center justify-center flex-col gap-1">
                                {
                                    titleType == "bg" &&
                                    <div className={clsx("bg-[#252C3D] w-[69px] py-[10px] rounded-md flex justify-center items-center gap-1", TitleIcon && "!w-[83px]")}>
                                        {
                                            TitleIcon &&
                                            <TitleIcon className="fill-white w-4 h-4" />
                                        }
                                        <span className="text-white text-[12px] font-primary-med">{title}</span>
                                    </div>
                                }
                                {
                                    titleType == "level" &&
                                    <div className="w-auto h-auto relative">
                                        <CircularProgress
                                            color="success"
                                            size="lg"
                                            value={30}
                                            classNames={{
                                                svg: "w-[40px] h-[40px] rotate-90",
                                                indicator: "stroke-[#10AA7C]",
                                                track: "stroke-[#2C354A]"
                                            }}
                                            strokeWidth={2}
                                        >
                                        </CircularProgress>
                                        <span className="flex flex-col absolute w-full h-full top-0 left-0 justify-center items-center">
                                            <span className="text-white text-[9px] font-[700]">{title}</span>
                                            <span className="text-[#7082B0] uppercase text-[6px]">lvl</span>
                                        </span>
                                    </div>
                                }
                                <span className={clsx("text-[#5A6786] text-[10px] font-primary-med text-center", isUpperContent == true && "uppercase")}>
                                    {content}
                                </span>
                            </div>

                        </div>
                }
            </div>
        </div>
    )
}


export default BadgeBarItem;