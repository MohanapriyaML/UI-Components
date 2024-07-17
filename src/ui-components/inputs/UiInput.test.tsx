import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UiInput from './UiInputs';


describe('UiInput Component', () => {
    it('renders input with correct placeholder', () => {
        render(<UiInput placeholder="Test Placeholder" />);
        const inputElement = screen.getByPlaceholderText('Test Placeholder');
        expect(inputElement).toBeInTheDocument();
    });

    it('calls onInputHandler when input value changes', () => {
        const onInputHandler = jest.fn();
        render(<UiInput onInputHandler={onInputHandler} />);
        const inputElement = screen.getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: 'test' } });
        expect(onInputHandler).toHaveBeenCalled();
    });

    it('displays helper text when provided', () => {
        const helperText = 'This is a helper text';
        render(<UiInput helperText={helperText} />);
        const helperTextElement = screen.getByText(helperText);
        expect(helperTextElement).toBeInTheDocument();
    });

    it('sets the correct width when fullWidth is true', () => {
        const { container } = render(<UiInput fullWidth />);
        const formControlElement = container.querySelector('.MuiFormControl-root');
        expect(formControlElement).toHaveStyle('width: 100%');
    });

    it('sets the correct width when width prop is provided', () => {
        const width = 50;
        const { container } = render(<UiInput width={width} />);
        const formControlElement = container.querySelector('.MuiFormControl-root');
        expect(formControlElement).toHaveStyle(`width: ${width}%`);
    });

    it('renders start and end adornments when provided', () => {
        render(<UiInput startAdornment={<span>Start</span>} endAdornment={<span>End</span>} />);
        const startAdornment = screen.getByText('Start');
        const endAdornment = screen.getByText('End');
        expect(startAdornment).toBeInTheDocument();
        expect(endAdornment).toBeInTheDocument();
    });
});
