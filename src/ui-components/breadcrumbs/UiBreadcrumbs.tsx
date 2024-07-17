'use client';
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { UiBreadcrumbsProps } from './types';


const UiBreadcrumbs = (props: UiBreadcrumbsProps) => {
    const {
        separator = '/',
        ariaLabel = 'breadcrumb',
        children 
    } = props;


    return (
        <Breadcrumbs separator={separator} aria-label={ariaLabel}>
             {children}
        </Breadcrumbs>
    );
};

export default UiBreadcrumbs;
