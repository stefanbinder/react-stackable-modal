declare module 'react-stackable-modal';

export interface ReactStackableModalProps {
    name: string;
    age: number;
    person: {
        id: number;
        onClick: (id: number) => string;
    }
}

export declare const ReactStackableModal: React.FC<ReactStackableModalProps>;
