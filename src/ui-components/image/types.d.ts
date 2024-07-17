
export type ImageSizeProps = Omit<'width' | 'height'> & {
    width?: number | string;
    height?: number | string;
};

export type EcImageProps = {
    alt: string;
    className?: string;
    fill?: boolean;
    height?: number | string;
    id?: string;
    src: string;
    variant?: 'product' | 'award' | 'icon' | 'fill';
    width?: number | string;
} & ImageSizeProps;
