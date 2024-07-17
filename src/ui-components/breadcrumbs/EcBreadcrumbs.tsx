'use client';
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { EcBreadcrumbsProps } from './types';


const EcBreadcrumbs = (props: EcBreadcrumbsProps) => {
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

export default EcBreadcrumbs;
