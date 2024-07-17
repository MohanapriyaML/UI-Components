import React from 'react';

export interface UiLinkProps {
    underlineOnHover?: boolean;
    className?: string;
    children: string | React.ReactNode;
    href: string;
    disabled?: boolean;
}