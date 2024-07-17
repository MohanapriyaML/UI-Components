import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useForm } from 'react-hook-form';
import FormPhoneNumberInput from './input-phone-number';

const TestComponent = () => {
    const { control } = useForm();
    return (
        <FormPhoneNumberInput
            name="phoneNumber"
            control={control}
            label="Phone Number"
        />
    );
};

describe('FormPhoneNumberInput Component', () => {
    test('renders phone number input', () => {
        render(<TestComponent />);
        const phoneNumberInput = screen.getByLabelText('Phone Number');
        expect(phoneNumberInput).toBeInTheDocument();
    });
});
