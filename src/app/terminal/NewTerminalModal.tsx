import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalFooter, Button, Input } from '@nextui-org/react';

interface NewTerminalModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (name: string) => void;
}

const NewTerminalModal: React.FC<NewTerminalModalProps> = ({ isOpen, onClose, onSave }) => {
    const [terminalName, setTerminalName] = React.useState('');

    const handleSave = () => {
        onSave(terminalName);
        onClose();
    };

    return (
        <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} className='bg-blue p-3'>
            <ModalContent className='flex flex-col gap-3'>
                <ModalHeader className="flex flex-col gap-1 text-cyan text-center">Name Your New Terminal</ModalHeader>
                <Input
                    placeholder="Enter terminal name"
                    value={terminalName}
                    onChange={(e) => setTerminalName(e.target.value)}
                />
                <div className='flex justify-center items-center gap-2 pt-3'>
                    <Button color="primary" onPress={handleSave}>
                        Save
                    </Button>
                    <Button color="danger" variant="light" onPress={onClose}>
                        Cancel
                    </Button>
                </div>

            </ModalContent>
            <ModalFooter>

            </ModalFooter>
        </Modal>
    );
};

export default NewTerminalModal;
