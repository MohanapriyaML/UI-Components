export type EcRadioProps = {
    className?: string;
    name: string;
    value: string;
    disabled?: boolean;
    isSelectedValue: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setSelectedValue: (params: string) => void;
};