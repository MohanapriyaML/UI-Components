import React from 'react';

export interface EcLinkProps {
    underlineOnHover?: boolean;
    className?: string;
    children: string | React.ReactNode;
    href: string;
    disabled?: boolean;
}