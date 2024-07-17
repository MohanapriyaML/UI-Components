import React from 'react';
import { screen,fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import EcButton from './UiButton';
import UiButton from './UiButton';

describe('EcButton component', () => {
    it('renders with children', () => {
        render(<UiButton variant="contained">Click me</UiButton>);
        const button = screen.getByText('Click me');
        expect(button).toBeInTheDocument();
    });

    it('renders with specified variant', () => {
        render(<UiButton variant="outlined">Outline Button</UiButton>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('MuiButton-outlined');
    });

    it('renders with custom color', () => {
        render(<UiButton variant="contained" color="success">Success Button</UiButton>);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('MuiButton-containedSuccess');
    });
    it('disables ripple effect', () => {
        render(<UiButton variant="contained">Disable Ripple</UiButton>);
        const button = screen.getByRole('button');

        fireEvent.click(button);
        waitFor(() => {
            expect(button).not.toHaveClass('MuiButtonBase-root');
        })
    });

    it('handles onClick event', () => {
        const handleClick = jest.fn();
        render(<EcButton variant="contained" onClick={handleClick}>Click me</EcButton>);
        const button = screen.getByText('Click me');
        button.click();
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
