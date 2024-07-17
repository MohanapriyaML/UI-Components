import { SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import UiSelect from '../ui-components/select/UiSelect';

const SelectComponent = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>(['option1']);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const selectedOptions = event.target.value as string[];
    setSelectedValues(selectedOptions);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const options = [
    { value: 'option1', label: 'Option1' },
    { value: 'option2', label: 'Option2' },
    { value: 'option3', label: 'Option3' },
  ];

  return (
    <div>
      <h1>Select</h1>
      <UiSelect
        data-testid="select-menu"
        id="select-menu"
        options={options}
        open={isOpen}
        multiple={true}
        selectedValues={selectedValues}
        handleChange={handleSelectChange}
        onOpen={handleOpen}
        onClose={handleClose}
      />
    </div>
  );
};

export default SelectComponent;
