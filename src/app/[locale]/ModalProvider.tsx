import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
    openModal: (content: React.ReactNode, options?: ModalOptions) => void;
    closeModal: () => void;
    isOpen: boolean;
    content: React.ReactNode;
    options: ModalOptions;
}

interface ModalOptions {
    autoClose?: boolean;
    onClose?: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState<React.ReactNode>(null);
    const [options, setOptions] = useState<ModalOptions>({});

    const openModal = (content: React.ReactNode, options: ModalOptions = {}) => {
        setContent(content);
        setOptions(options);
        setIsOpen(true);
    };

    const closeModal = () => {
        if (options.onClose) options.onClose(); // Call the onClose callback if provided
        setIsOpen(false);
        setContent(null);
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal, isOpen, content, options }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};