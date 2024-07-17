"use client"
import { Alert, AlertTitle } from '@mui/material'
import React from 'react'
import { UiAlertProps } from './types'

const UiAlert = (props: UiAlertProps) => {
  const { title, children, variant = 'outlined', severity = 'info', color='success',onClose} = props;
  return (
    <Alert variant={variant} severity={severity} color={color as any}  onClose={onClose}>
       <AlertTitle>{title}</AlertTitle>
       {children}
    </Alert>
  )
}

export default UiAlert;
