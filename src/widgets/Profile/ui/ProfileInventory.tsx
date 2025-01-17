"use client"
import { useState } from "react"
import cls from "./Profile.module.sass"
import { IInvestoryItemType } from "../model/types"

import Button from "@/shared/ui/Button/Button"
import IconUpgrade from "@/shared/assets/icons/icon-upgrade.svg"
import IconShopping from "@/shared/assets/icons/icon-shopping.svg"
import IconBlod from "@/shared/assets/icons/icon-blod.svg"

import CaseItem from "@/entities/CaseItem/ui/CaseItem"

interface ProfileInventoryProps {
    items: IInvestoryItemType[]
}

const ProfileInventory = ({ items }: ProfileInventoryProps) => {



    // Selected item id
    const [selectedId, setSelectedId] = useState<string[]>([]);

    // Click handle function
    const handleClick = (id: string) => {
        setSelectedId((prev) => {
            if (prev.includes(id)) {
                // Remove the id if it already exists
                return prev.filter(existingId => existingId !== id);
            } else {
                // Add the id if it does not exist
                return [...prev, id];
            }
        });
    }

    // Build item list
    const cases = items.map((item, index) => (
        <CaseItem isHover={true} key={item.id} title={item.title} content={item.content} price={item.price} picUrl={item.picUrl} type={item.type} name={item.name} percent={item.percent}
            isActive={selectedId.includes(item.id) ? true : false}
            hoverContent={
                <div className="flex gap-2 w-full h-full justify-center items-center">
                    <Button
                        onClick={() => handleClick(item.id)}
                        startContent={
                            <IconShopping className="w-4 h-4 fill-[#292D32]" />
                        }
                        classNames={{
                            base: [cls.shopping_btn],
                            content: [cls.shopping_btn_inner, 'p-2']
                        }}
                    ></Button>
                    <Button
                        onClick={() => handleClick(item.id)}
                        startContent={
                            <IconUpgrade className="w-4 h-4 fill-[#292D32]" />
                        }
                        classNames={{
                            base: [cls.upgrade_btn],
                            content: [cls.upgrade_btn_inner, 'p-2']
                        }}
                    ></Button>
                    <Button
                        onClick={() => handleClick(item.id)}
                        startContent={
                            <IconBlod className="w-4 h-4 fill-[#292D32]" />
                        }
                        classNames={{
                            base: [cls.blod_btn],
                            content: [cls.blod_btn_inner, 'p-2']
                        }}
                    ></Button>
                </div>
            }
        />
    ))

    return (
        <div className="w-full flex flex-wrap justify-between gap-0.5 mt-2">
            {cases}
        </div>
    )
}

export default ProfileInventory;