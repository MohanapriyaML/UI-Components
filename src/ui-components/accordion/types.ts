import React from 'react';

export interface EcAccordionProps {
    id: string;
    expanded: boolean;
    title: string;
    children: string | React.ReactNode;
    // eslint-disable-next-line no-unused-vars
    onAccordionHandler: (expanded: boolean) => void;
}
