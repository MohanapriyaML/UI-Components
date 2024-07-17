import React from 'react';

export interface UiModalProps {
  handleClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}
