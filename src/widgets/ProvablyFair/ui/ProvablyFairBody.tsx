"use client"
import { useTranslations } from "next-intl";

import clsx from "clsx";

import { useEffect, useRef, useState } from "react";

import { ClickSide } from "../model/type";
import SelectGame from "./SelectGame";
import cls from "./ProvavlyFair.module.sass"
import { bodyData, code, listItems } from "../model/item";

import { Input } from "@/shared/ui/Input/Input";
import IconCopy from '@/shared/assets/icons/icon-copy.svg'
import IconCheck from '@/shared/assets/icons/icon-check-2.svg'
import { useAppResponsive } from "@/shared/lib/useResponsive";
import { useRouter } from "@/shared/config/i18n/navigation";
import IconScrollTop from '@/shared/assets/icons/icon-scroll-top.svg'
import SvgFooterBtn from '@/shared/assets/provably-fair-footer-btn.svg'
import List from "@/shared/ui/List/List";

import { useCommonStore } from "@/entities/Common/model/store";


const ProvablyFairBody = () => {

    // For translation
    const t = useTranslations();
    // For router
    const router = useRouter();

    // For "set scroll top" state
    const isScrollTop = useCommonStore(state => state.isScrollTop)
    const setIsScrollTop = useCommonStore(state => state.setIsScrollTop)

    const [clickSide, setClickSide] = useState<ClickSide>('right');
    const [clientSeed, setClientSeed] = useState<string>('7e2d8926de5f4df1e1205f28cc022bb2');
    const [serverSeed, setServerSeed] = useState<string>('7e2d8926de5f4df1e1205f28cc022bb2');
    // To get isCopy state
    const [isCopy, setIsCopy] = useState<boolean>(false)
    // To get active number in list
    const [activeNumber, setActiveNumber] = useState<number>(-1)
    // On the top button state
    const [isTop, setIsTop] = useState<boolean>(false)

    // For responsive
    const breakpoints = useAppResponsive()

    // Create an array of refs
    const refs = useRef<(HTMLDivElement | null)[]>([]);


    const leftClick = () => {
        setClickSide('left')
    }

    const rightClick = () => {
        setClickSide('right')
    }

    const copyText = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopy(true)
            setTimeout(() => {
                setIsCopy(false)
            }, 2000);
        } catch (error) {
            alert("Error!!!")
        }
    }

    // The function to click list item
    const clickListItem = (index: number) => {
        const element = refs.current[index + 3];
        // Check if the element exists and is an instance of HTMLElement
        if (element instanceof HTMLElement) {
            const topOffset = 100; // The offset you want to apply
            const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Get the element's position relative to the document
            const offsetPosition = elementPosition - topOffset; // Calculate the target scroll position

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth', // Smooth scrolling
            });
            setActiveNumber(index)
        } else {
            console.error("Element not found or is not an HTML element.");
        }
    }

    // update list item active state
    const updateActiveState = (id: string) => {
        let newIndex = -1;
        for (let i = 0; i < bodyData.length; i++) {
            if (bodyData[i].id == id) {
                newIndex = i;
                i = bodyData.length
            }
        }
        setActiveNumber(newIndex)
    }


    // Move scroll top of screen
    const topScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    // Toggle button visibility based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            // Show the button if scrolled down more than 300 pixels
            if (window.scrollY > 10) {
                setIsTop(true);
            } else {
                setIsTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        setIsScrollTop(true)
        return () => {
            window.removeEventListener('scroll', handleScroll);
            setIsScrollTop(false)
        };
    }, []);


    // Hook function
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    console.log(id, entry.target.getBoundingClientRect().top)

                    updateActiveState(id);
                }
            });
        }, {
            threshold: 1 // Adjust threshold as needed
        });

        // Observe each section
        refs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            // Clean up the observer on component unmount
            observer.disconnect();
        };
    }, [router]);

    return (
        <div className="h-auto w-full relative flex lg:flex-col flex-row px-5 lg:px-0">
            <div className={clsx("min-w-[237px] h-full sticky top-[30px] lg:w-auto lg:overflow-auto")}>
                <List items={listItems} active={activeNumber} axis={breakpoints.lg ? "y" : "x"} onClickItem={(index: number) => clickListItem(index)} />
            </div>
            <div className="flex flex-col gap-4 w-full px-4 flex-1 h-auto">
                <div className={clsx(cls.body)} id="fairly" ref={(el) => { refs.current[0] = el }}>
                    <span className={clsx(cls.body_title)}>{t('fair_body_data1.title')}</span>
                    <span className={clsx(cls.body_content)}>{t('fair_body_data1.content1')}</span>
                    <span className={clsx(cls.body_content)}>{t('fair_body_data1.content2')}</span>
                    <span className={clsx(cls.body_title)}>{t('fair_body_data1.footer')}</span>
                </div>
                <div className={clsx(cls.body)} id="overview" ref={(el) => { refs.current[1] = el }}>
                    <span className={clsx(cls.body_title)}>{t('fair_body_data2.title')}</span>
                    <span className={clsx(cls.body_content)}>{t('fair_body_data2.content')}</span>
                    <div className={clsx("bg-[#121722] overflow-auto text-[#AEB2C0] p-4 rounded-lg shadow-md relative")}>
                        <div className="absolute top-2 right-2 w-5 h-5" onClick={copyText}>
                            {
                                isCopy == false ?
                                    <IconCopy />
                                    :
                                    <IconCheck className="fill-white" />
                            }
                        </div>
                        <pre className={clsx("break-words whitespace-pre-wrap")}>
                            <code className={clsx("w-full block whitespace-pre-wrap overflow-auto !font-normal")}>
                                {code}
                            </code>
                        </pre>
                    </div>
                </div>
                {
                    bodyData.map((item, index) => (
                        <div className={clsx(cls.body)} key={index}
                            id={item.id}
                            ref={(el) => { refs.current[3 + index] = el }}
                        >
                            <span className={clsx(cls.body_title)}>{item.title}</span>
                            {
                                item.contents.map((content, index) => (
                                    <span className={clsx(cls.body_content)} key={index}>{content}</span>
                                ))
                            }
                        </div>
                    ))
                }
                <div className={clsx(cls.body)} ref={(el) => { refs.current[2] = el }} id="footer">
                    <div className={'flex justify-center w-full'}>
                        <div className={clsx(cls.footer_btn_left, clickSide == 'left' ? 'z-[30] text-[#121722]' : 'text-[#D1D9EB40]', ' hover:cursor-pointer text-[12px] font-[900]')} onClick={leftClick}>
                            <div className={clsx(cls.footer_btn_left_inner)}>
                                <div className={clsx(clickSide == 'left' && cls.footer_btn_left_inner_active)}>
                                    {t('fair_footer.seed')}
                                </div>
                            </div>
                        </div>
                        <div className={clsx(cls.footer_btn_right, clickSide == 'right' ? 'z-[30] text-[#121722]' : 'text-[#D1D9EB40]', '-ml-4 hover:cursor-pointer text-[12px] font-[900]')} onClick={rightClick}>
                            <div className={cls.footer_btn_right_inner}>
                                <div className={clsx(clickSide == 'right' && cls.footer_btn_right_inner_active)}>
                                    {t('fair_footer.verification')}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className=" uppercase text-[12px] text-[#5F6C87]">{t('fair_footer.game')}</span>
                        <SelectGame />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className=" uppercase text-[12px] text-[#5F6C87]">{t('fair_footer.client_seed')}</span>
                        <Input
                            value={clientSeed}
                            onChange={v => {
                                setClientSeed(v)
                            }}
                            theme='theme-1'
                            placeholder={t('create_new_ticket.subject_placeholder')}
                            classNames={{
                                inputWrapper: [cls.box, '!bg-[#121722] !border-0 !rounded-[8px] !p-6'],
                                input: [cls.box_value, 'w-full text-[14px] !text-white'],
                                label: ['text-[10px]'],
                                mainWrapper: "w-full",
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className=" uppercase text-[12px] text-[#5F6C87]">{t('fair_footer.server_seed')}</span>
                        <Input
                            value={serverSeed}
                            onChange={v => {
                                setServerSeed(v)
                            }}
                            theme='theme-1'
                            placeholder={t('create_new_ticket.subject_placeholder')}
                            classNames={{
                                inputWrapper: [cls.box, '!bg-[#121722] !rounded-[8px] !border-0 ] !p-6'],
                                input: [cls.box_value, 'w-full text-[14px] !text-white'],
                                label: ['text-[10px]'],
                                mainWrapper: "w-full",
                            }}
                        />
                    </div>
                    <div className="flex relative justify-center">
                        <div className="relative w-full h-full sm:w-auto flex justify-center hover:cursor-pointer">
                            <span className="text-[#121722] text-center w-full text-[14px] uppercase font-[900] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                {t('fair_footer.show_result')}
                            </span>
                            <SvgFooterBtn />
                        </div>

                    </div>
                </div>
            </div>
            {
                isTop &&
                <div onClick={topScroll} className='fixed min-w-[40px] min-h-[40px] top-scroll bottom-20 left-5 rounded-full flex justify-center items-center hover:cursor-pointer'>
                    <IconScrollTop className="h-[30px] w-[30px]" />
                </div>
            }
        </div>
    )
}

export default ProvablyFairBody;