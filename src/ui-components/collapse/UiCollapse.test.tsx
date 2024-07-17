import React from 'react';
import { screen,render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import EcCollapse from './UiCollapse';

describe('EcCollapse component', () => {
    it('renders collapsed initially', () => {
        render(
            <EcCollapse title="Test Collapse">
                <div>Content</div>
            </EcCollapse>
        );

        expect(screen.getByText('Test Collapse')).toBeInTheDocument();
        expect(screen.queryByText('Content')).not.toBeInTheDocument();
    });

    it('expands when clicked', () => {
        render(
            <EcCollapse title="Test Collapse">
                <div>Content</div>
            </EcCollapse>
        );

        fireEvent.click(screen.getByText('Test Collapse'));
        waitFor(() => {
            expect(screen.queryByText('Content')).toBeInTheDocument();
        })
        fireEvent.click(screen.getByText('Test Collapse'));
        waitFor(() => {
            expect(screen.queryByText('Content')).not.toBeInTheDocument();
        })
    });

    it('renders with secondary action', () => {
        render(
            <EcCollapse
                title="Test Collapse"
                secondaryAction={<button data-testid="secondary-action">Secondary</button>}
            >
                <div>Content</div>
            </EcCollapse>
        );

        expect(screen.getByTestId('secondary-action')).toBeInTheDocument();
    });
});
