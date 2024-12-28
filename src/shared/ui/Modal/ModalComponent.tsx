"use client"
import { Modal } from '@/shared/ui/Modal/Modal';
import { useModal } from '@/shared/context/ModalContext';


const ModalComponent: React.FC = () => {
    const { isOpen, closeModal, content, options, headerIcon, headerTitle, classNames } = useModal();

    return (
        <Modal onClose={closeModal} autoClose={options.autoClose} isOpen={isOpen} headerIcon={headerIcon} headerTitle={headerTitle} classNames={classNames}>
            {content}
        </Modal>
    );
};

export default ModalComponent;