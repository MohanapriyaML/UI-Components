import React from 'react';

import { UpButtonProps } from '../button/types';

export interface EcDropdownProps {
    items: dropdownProps[];
    button: buttonProp;
}

export interface dropdownProps {
    name: string;
    children: string | React.ReactNode;
}

export interface buttonProp extends UpButtonProps {
    children: string | React.ReactNode;
  
}

