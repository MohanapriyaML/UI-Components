import { UiDropdownProps } from './types';
import React from 'react';

import Menu from '@mui/material/Menu';
import EcButton from '../button/UiButton';
import { MenuItemStyled } from './UiDropDown.styled';



const UiDropDown = (props: UiDropdownProps) => {
    const { items = [], button } = props;
    const { children, variant = 'text' } = button || {};

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event: React.MouseEvent<any>) => {
        event.stopPropagation();
        setAnchorEl(null);
    };

    const renderoption = () => {
        return items?.map((item) => {
            const { name, children: itemChildren } = item || {};
            return (
                <MenuItemStyled key={'dropdown' + name} onClick={handleClose}>
                    {itemChildren}
                </MenuItemStyled>
            );
        });
    };

    return (
        <>
            <EcButton variant={variant} onClick={handleClick}>
                {children}
            </EcButton>
            <Menu
                open={isOpen}
                anchorEl={anchorEl}
                onClick={handleClose}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                id="account-menu"
            >
                {renderoption()}
            </Menu>
        </>
    );
};
export default UiDropDown;
