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
        classNames?: ClassNamesConfig
    ) => void;
    closeModal: () => void;
    isOpen: boolean;
    content: ReactNode;
    options: ModalOptions;
    headerIcon: ReactNode | null;
    headerTitle: string;
    classNames: ClassNamesConfig;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [content, setContent] = useState<ReactNode>(null);
    const [options, setOptions] = useState<ModalOptions>({});
    const [headerIcon, setHeaderIcon] = useState<ReactNode | null>(null);
    const [headerTitle, setHeaderTitle] = useState<string>('');
    const [classNames, setClassNames] = useState<ClassNamesConfig>({ body: "", modal: "" });

    const openModal = (
        content: ReactNode,
        options: ModalOptions = {},
        headerIcon: ReactNode | null = null,
        headerTitle: string = '',
        classNames: ClassNamesConfig = { body: "", modal: "" }
    ) => {
        setContent(content);
        setOptions(options);
        setHeaderIcon(headerIcon);
        setHeaderTitle(headerTitle);
        setIsOpen(true);
        setClassNames(classNames)
        console.log(classNames)
    };

    const closeModal = () => {
        if (options.onClose) options.onClose();
        setIsOpen(false);
        setContent(null);
        setHeaderIcon(null);
        setHeaderTitle('');
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal, isOpen, content, options, headerIcon, headerTitle, classNames }}>
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