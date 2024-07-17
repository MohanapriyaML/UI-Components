import React from 'react';

export interface EcModalProps {
  handleClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}
