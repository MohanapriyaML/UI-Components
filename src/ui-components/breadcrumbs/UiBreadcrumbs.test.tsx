import React from 'react';
import { screen,render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UiBreadcrumbs from './UiBreadcrumbs';

describe('EcBreadcrumbs component', () => {
    it('renders with default separator and aria-label', () => {
        render(<UiBreadcrumbs separator="/" ariaLabel="breadcrumb">Test</UiBreadcrumbs>);
        const breadcrumb = screen.getByLabelText('breadcrumb');
        expect(breadcrumb).toBeInTheDocument();
    });

    it('renders with multiple children', () => {
        render(
            <UiBreadcrumbs separator="/" ariaLabel="breadcrumb">
                <span>Home</span>
                <span>Page</span>
                <span>Current</span>
            </UiBreadcrumbs>
        );
        expect(screen.getByText('Page')).toBeInTheDocument();
        expect(screen.getByText('Current')).toBeInTheDocument();
        expect(screen.getByText('Home')).toBeInTheDocument();
    });
});
