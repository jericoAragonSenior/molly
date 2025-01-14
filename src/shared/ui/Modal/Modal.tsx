"use client"
import React, { useRef } from 'react';

import Button from '@/shared/ui/Button/Button';
import Close from '@/shared/assets/icons/icon-modal-close.svg';

import clsx from 'clsx';
import cls from "./Modal.module.sass";

interface ClassNamesConfig {
    body?: string
    modal?: string
}

interface ModalProps {
    onClose: () => void;
    isOpen: boolean;
    autoClose?: boolean;
    children: React.ReactNode;
    headerIcon: React.ReactNode;
    headerTitle: string;
    classNames: ClassNamesConfig;
}

export const Modal: React.FC<ModalProps> = ({
    onClose,
    isOpen,
    children,
    headerIcon,
    headerTitle,
    autoClose,
    classNames
}) => {
    // Optionally handle autoClose logic here
    if (!isOpen) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const modalRef = useRef<HTMLDivElement | null>(null);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target != modalRef.current && autoClose == true) {
            onClose();
        }
    };

    return (
        <>
            <div className={clsx('fixed w-screen h-screen z-[302] overflow-y-auto', classNames.body)}>
                <div className={clsx(classNames.modal)}>
                    <div onClick={handleBackdropClick} className={clsx('fixed w-screen h-screen duration-150 top-0 left-0', cls.blur_background, isOpen ? 'visible bg-[#0D1018D9]' : 'invisible bg-none')}></div>
                    <div className="relative border-none p-6" ref={modalRef}>
                        <div className={clsx(cls.modal)}>
                            <div className={clsx(cls.header, 'flex justify-between items-center w-auto h-auto p-1 gap-4 min-h-[30px]')}>
                                <div className={clsx('flex gap-3 items-center')}>
                                    <div className={clsx(cls.header_maxWidth)}>
                                        {headerIcon}
                                    </div>
                                    <span>
                                        {headerTitle}
                                    </span>
                                </div>
                                <Button
                                    startContent={<Close />}
                                    className={clsx('flex justify-center items-center min-w-[30px] min-h-[30px]', cls.header_content)}
                                    onPress={onClose}
                                />
                            </div>
                            <div className={clsx(cls.body)}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};