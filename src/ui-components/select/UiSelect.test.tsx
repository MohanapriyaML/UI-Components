import React from 'react';
import {screen, render, fireEvent } from '@testing-library/react';
import UiSelect from './UiSelect';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

it('renders with options and handles click events', () => {
  const handleChange = jest.fn();
  const onClose = jest.fn();
  render(
    <UiSelect
      id="test-select"
      options={options}
      handleChange={handleChange}
      selectedValues="option1"
      open={false}
      onOpen={() => {}}
      onClose={onClose}
    />
  );

  const select = screen.getByTestId('test-select');
  fireEvent.mouseDown(select);
  
});
