import React from 'react';

export interface UiAccordionProps {
    id: string;
    expanded: boolean;
    title: string;
    children: string | React.ReactNode;
    // eslint-disable-next-line no-unused-vars
    onAccordionHandler: (expanded: boolean) => void;
}
