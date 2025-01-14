"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalOptions {
    autoClose?: boolean;
    onClose?: () => void;
}

interface ClassNamesConfig {
    body?: string
    modal?: string
}

interface ModalContextType {
    openModal: (
        content: ReactNode,
        options?: ModalOptions,
        headerIcon?: ReactNode,
        headerTitle?: string,
        classNames?: ClassNamesConfig,
        closeButton?: boolean
    ) => void;
    closeModal: () => void;
    isOpen: boolean;
    content: ReactNode;
    options: ModalOptions;
    headerIcon: ReactNode | null;
    headerTitle: string;
    classNames: ClassNamesConfig;
    isCloseButton?: boolean
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [content, setContent] = useState<ReactNode>(null);
    const [options, setOptions] = useState<ModalOptions>({});
    const [headerIcon, setHeaderIcon] = useState<ReactNode | null>(null);
    const [headerTitle, setHeaderTitle] = useState<string>('');
    const [classNames, setClassNames] = useState<ClassNamesConfig>({ body: "", modal: "" });
    const [isCloseButton, setIsCloseButton] = useState<boolean>(true);

    const openModal = (
        content: ReactNode,
        options: ModalOptions = {},
        headerIcon: ReactNode | null = null,
        headerTitle: string = '',
        classNames: ClassNamesConfig = { body: "", modal: "" },
        closeButton?: boolean
    ) => {
        setContent(content);
        setOptions(options);
        setHeaderIcon(headerIcon);
        setHeaderTitle(headerTitle);
        setIsOpen(true);
        setClassNames(classNames)
        if (closeButton == true || closeButton == false) {
            setIsCloseButton(closeButton);
        }
    };

    const closeModal = () => {
        if (options.onClose) options.onClose();
        setIsOpen(false);
        setContent(null);
        setHeaderIcon(null);
        setHeaderTitle('');
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal, isOpen, content, options, headerIcon, headerTitle, classNames, isCloseButton }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};