import { AdditionalProps } from '../common.types';

export type Variants =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'sub-h-l'
    | 'sub-h-m'
    | 'sub-h-s'
    | 'p-l'
    | 'p-m'
    | 'p-s'
    | 'p-xs'
    | 'p-xxs'
    | 'CTA';

export type EcTypographyProps = {
    variant: Variants;
    decoration?: 'underline' | 'none';
    fontStyle?: 'italic' | 'normal';
    weight?: 'bold' | 'normal' | 'light';
    component?: 'div' | 'span' | 'p';
    className?: string;
    colorOverride?: string;
} & AdditionalProps;
