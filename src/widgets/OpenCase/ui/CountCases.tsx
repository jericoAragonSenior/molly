"use client"
import CaseSection from "@/shared/ui/CaseSection/ui/CaseSection";
import { caseItems } from "../model/items";

import clsx from "clsx";
import cls from "./OpenCase.module.sass"
import { useCommonStore } from "@/entities/Common/model/store";
import React, { useEffect, useState } from "react";

const CountCases = () => {


    const caseCount = useCommonStore(state => state.caseCount)



    const [cases, setCases] = useState<React.ReactNode[]>([]);

    // Case count hook
    useEffect(() => {

        switch (caseCount) {
            case 1:
                const newCase1 = [(
                    <div className="flex w-auto h-auto" key={1}>
                        <div className={clsx("w-[990px] h-auto relative overflow-hidden flex justify-center items-center 3md:w-[720px]", cls.section)}>
                            <CaseSection className="h-auto" items={caseItems} />
                        </div>
                        <div className={clsx("w-[4px] bg-[#FFC600] h-full absolute", cls.center, cls.pointer_shadow)}>
                        </div>
                    </div>

                )]


                setCases(newCase1)
                break;

            case 2:

                let newCase2 = []
                for (let i = 0; i < 2; i++) {
                    newCase2.push(
                        <div className="flex w-auto h-auto py-2 relative" key={i}>
                            <div className={clsx("w-[555px] h-auto relative overflow-hidden flex justify-center items-center md:w-[310px]", cls.section)}>
                                <CaseSection className="h-auto" items={caseItems} />
                            </div>
                            <div className={clsx("w-[4px] bg-[#FFC600] h-full absolute", cls.center, cls.pointer_shadow)}>
                            </div>
                        </div>
                    )
                }


                setCases(newCase2);

                break;

            case 3:
                let newCase3 = []
                for (let i = 0; i < 3; i++) {
                    newCase3.push(
                        <div className="flex w-auto h-auto py-2 relative" key={i}>
                            <div className={clsx("w-[361px] h-auto relative overflow-hidden flex justify-center items-center md:w-[310px]", cls.section)}>
                                <CaseSection className="h-auto" items={caseItems} isBig={false} />
                            </div>
                            <div className={clsx("w-[4px] bg-[#FFC600] h-full absolute", cls.center, cls.pointer_shadow)}>
                            </div>
                        </div>
                    )
                }

                setCases(newCase3);

                break;

            case 4:
                let newCase4 = []
                for (let i = 0; i < 4; i++) {
                    newCase4.push(
                        <div className="flex w-auto h-auto py-2 relative" key={i}>
                            <div className={clsx("w-[279px] h-auto relative overflow-hidden flex justify-center items-center md:w-[310px]", cls.section)}>
                                <CaseSection className="h-auto" items={caseItems} isBig={false} />
                            </div>
                            <div className={clsx("w-[4px] bg-[#FFC600] h-full absolute", cls.center, cls.pointer_shadow)}>
                            </div>
                        </div>
                    )
                }

                setCases(newCase4);

                break;

            case 5:
                let newCase5 = []
                for (let i = 0; i < 5; i++) {
                    newCase5.push(
                        <div className="flex w-auto h-auto py-2 relative" key={i}>
                            <div className={clsx("w-[220px] h-auto relative overflow-hidden flex justify-center items-center md:w-[310px]", cls.section)}>
                                <CaseSection className="h-auto" items={caseItems} isBig={false} />
                            </div>
                            <div className={clsx("w-[4px] bg-[#FFC600] h-full absolute", cls.center, cls.pointer_shadow)}>
                            </div>
                        </div>
                    )
                }

                setCases(newCase5);

                break;

            case 10:
                let newCase10 = []
                for (let i = 0; i < 10; i++) {
                    newCase10.push(
                        <div className="flex w-auto h-auto py-2 relative" key={i}>
                            <div className={clsx("w-[220px] h-auto relative overflow-hidden flex justify-center items-center md:w-[310px]", cls.section)}>
                                <CaseSection className="h-auto" items={caseItems} isBig={false} />
                            </div>
                            <div className={clsx("w-[4px] bg-[#FFC600] h-full absolute", cls.center, cls.pointer_shadow)}>
                            </div>
                        </div>
                    )
                }

                setCases(newCase10);

                break;

            default:
                break;

        }
    }, [caseCount])

    return (
        <div className="w-full h-auto flex justify-center gap-3 items-center flex-wrap">
            {
                cases.map((item) => item)
            }
        </div>
    )
}

export default CountCases; 