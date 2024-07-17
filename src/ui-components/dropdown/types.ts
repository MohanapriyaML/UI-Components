import React from 'react';

import { UiButtonProps } from '../button/types';

export interface UiDropdownProps {
    items: dropdownProps[];
    button: buttonProp;
}

export interface dropdownProps {
    name: string;
    children: string | React.ReactNode;
}

export interface buttonProp extends UiButtonProps {
    children: string | React.ReactNode;
  
}

