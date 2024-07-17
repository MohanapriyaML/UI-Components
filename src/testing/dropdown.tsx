import React from 'react';
import { buttonProp } from '../ui-components/dropdown/types';
import EcDropDown from '../ui-components/dropdown/EcDropDown';

const Dropdown = () => {
    const dropdownItems = [
        { name: 'Option 1', children: 'Item 1' },
        { name: 'Option 2', children: 'Item 2' },
        { name: 'Option 3', children: 'Item 3' }
    ];

    const buttonData: buttonProp = {
        variant: 'contained',
        children: 'Menu'
    };

    return (
        <div>
            <h1>Drop Down</h1>
            <EcDropDown items={dropdownItems} button={buttonData} />
        </div>
    );
};

export default Dropdown;
