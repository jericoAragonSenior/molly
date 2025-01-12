"use client"
import React, { useEffect, useState } from "react";

import CaseSection from "@/shared/ui/CaseSection/ui/CaseSection";

import { selectItems } from "../model/items";
import { ICaseItemType } from "../model/types";

import clsx from "clsx";
import cls from "./OpenCase.module.sass"
import { useCommonStore } from "@/entities/Common/model/store";

const CountCases = () => {


    const caseCount = useCommonStore(state => state.caseCount)

    const [cases, setCases] = useState<React.ReactNode[]>([]);

    // Selected cases
    const setSelectedCaseItems = useCommonStore(state => state.setSelectedCaseItems)

    // Generate random number
    function getRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Case count hook
    useEffect(() => {
        switch (caseCount) {
            case 1:
                {
                    let newCase1: any[] = [];
                    let selected: ICaseItemType[] = [];
                    for (let i = 0; i < 1; i++) {
                        const selectedItem = getRandomNumber(0, selectItems.length - 1)
                        selected.push(selectItems[selectedItem]);
                        newCase1.push(
                            <div className="flex w-auto relative h-auto py-2 justify-center items-center" key={'case1' + i}>
                                <div className=" absolute w-full h-full bg-black z-[1] opacity-0">
                                </div>
                                <div className={clsx("w-[990px] h-auto relative overflow-hidden flex justify-center items-center 3md:w-[720px]", cls.section)}>
                                    <CaseSection selectedItem={selectedItem} className="h-auto" items={selectItems} />
                                </div>
                                <div className={clsx("w-[4px] bg-[#FFC600] h-full absolute z-[2]", cls.center, cls.pointer_shadow)}>
                                </div>
                            </div>
                        )
                    }

                    setSelectedCaseItems(selected);
                    setCases(newCase1)
                }
                break;


            case 2:
                {
                    let newCase2 = []
                    let selected: ICaseItemType[] = [];
                    for (let i = 0; i < 2; i++) {
                        const selectedItem = getRandomNumber(0, selectItems.length - 1)
                        selected.push(selectItems[selectedItem]);
                        newCase2.push(
                            <div className="flex w-auto h-auto py-2 relative" key={'case2' + i}>
                                <div className=" absolute w-full h-full bg-black z-[1] opacity-0">
                                </div>
                                <div className={clsx("w-[555px] h-auto relative overflow-hidden flex justify-center items-center md:w-[310px]", cls.section)}>
                                    <CaseSection selectedItem={selectedItem} className="h-auto" items={selectItems} />
                                </div>
                                <div className={clsx("w-[2px] bg-[#FFC600] h-full absolute  z-[1]", cls.center, cls.pointer_shadow)}>
                                </div>
                            </div>
                        )
                    }
                    setSelectedCaseItems(selected);
                    setCases(newCase2);

                }
                break;


            case 3:
                {
                    let newCase3 = []
                    let selected: ICaseItemType[] = [];
                    for (let i = 0; i < 3; i++) {
                        const selectedItem = getRandomNumber(0, selectItems.length - 1)
                        selected.push(selectItems[selectedItem]);
                        newCase3.push(
                            <div className="flex w-auto h-auto py-2 relative" key={'case3' + i}>
                                <div className=" absolute w-full h-full bg-black z-[1] opacity-0">
                                </div>
                                <div className={clsx("w-[361px] h-auto relative overflow-hidden flex justify-center items-center md:w-[310px]", cls.section)}>
                                    <CaseSection selectedItem={selectedItem} className="h-auto" items={selectItems} isBig={false} />
                                </div>
                                <div className={clsx("w-[1.3px] bg-[#FFC600] h-full absolute  z-[1]", cls.center, cls.pointer_shadow)}>
                                </div>
                            </div>
                        )
                    }
                    setSelectedCaseItems(selected);
                    setCases(newCase3);
                }
                break;

            case 4:
                {
                    let newCase4 = []
                    let selected: ICaseItemType[] = [];
                    for (let i = 0; i < 4; i++) {
                        const selectedItem = getRandomNumber(0, selectItems.length - 1)
                        selected.push(selectItems[selectedItem]);
                        newCase4.push(
                            <div className="flex w-auto h-auto py-2 relative" key={'case4' + i}>
                                <div className=" absolute w-full h-full bg-black z-[1] opacity-0">
                                </div>
                                <div className={clsx("w-[279px] h-auto relative overflow-hidden flex justify-center items-center md:w-[310px]", cls.section)}>
                                    <CaseSection selectedItem={selectedItem} className="h-auto" items={selectItems} isBig={false} />
                                </div>
                                <div className={clsx("w-[1px] bg-[#FFC600] h-full absolute  z-[1]", cls.center, cls.pointer_shadow)}>
                                </div>
                            </div>
                        )
                    }

                    setSelectedCaseItems(selected);
                    setCases(newCase4);
                }

                break;

            case 5:
                {
                    let newCase5 = []
                    let selected: ICaseItemType[] = [];
                    for (let i = 0; i < 5; i++) {
                        const selectedItem = getRandomNumber(0, selectItems.length - 1)
                        selected.push(selectItems[selectedItem]);
                        newCase5.push(
                            <div className="flex w-auto h-auto py-2 relative" key={'case5' + i}>
                                <div className=" absolute w-full h-full bg-black z-[1] opacity-0">
                                </div>
                                <div className={clsx("w-[220px] h-auto relative overflow-hidden flex justify-center items-center md:w-[310px]", cls.section)}>
                                    <CaseSection selectedItem={selectedItem} className="h-auto" items={selectItems} isBig={false} />
                                </div>
                                <div className={clsx("w-[0.8px] bg-[#FFC600] h-full absolute  z-[1]", cls.center, cls.pointer_shadow)}>
                                </div>
                            </div>
                        )
                    }
                    setSelectedCaseItems(selected);
                    setCases(newCase5);
                }


                break;

            case 10:
                {
                    let newCase10 = []
                    let selected: ICaseItemType[] = [];
                    for (let i = 0; i < 10; i++) {
                        const selectedItem = getRandomNumber(0, selectItems.length - 1)
                        selected.push(selectItems[selectedItem]);
                        newCase10.push(
                            <div className="flex w-auto h-auto py-2 relative" key={'case10' + i}>
                                <div className=" absolute w-full h-full bg-black z-[1] opacity-0">
                                </div>
                                <div className={clsx("w-[220px] h-auto relative overflow-hidden flex justify-center items-center md:w-[310px]", cls.section)}>
                                    <CaseSection selectedItem={selectedItem} className="h-auto" items={selectItems} isBig={false} />
                                </div>
                                <div className={clsx("w-[0.8px] bg-[#FFC600] h-full absolute z-[1]", cls.center, cls.pointer_shadow)}>
                                </div>
                            </div>
                        )
                    }

                    setSelectedCaseItems(selected);
                    setCases(newCase10);
                }

                break;

            default:
                break;

        }
    }, [caseCount])

    return (
        <div className="w-full h-auto flex relative justify-center gap-3 items-center flex-wrap">
            {
                cases.map((item) => item)
            }
        </div>
    )
}

export default CountCases; 