import React from 'react';
import { screen,render, fireEvent, waitFor } from '@testing-library/react';
import UiCheckbox from './UiCheckbox';

describe('UiCheckbox', () => {
    it('renders checkbox with label', () => {
        const handleChange = jest.fn();
        render(
            <UiCheckbox label="Test Checkbox" checked={false} onChange={handleChange} />
        );

        const checkbox = screen.getByLabelText('Test Checkbox') as HTMLInputElement;
        expect(checkbox).toBeInTheDocument();
        expect(checkbox.checked).toBe(false);

        fireEvent.click(checkbox);
        waitFor(() => {
            expect(handleChange).toHaveBeenCalled();
            expect(checkbox.checked).toBe(true);
        })
    });
});
