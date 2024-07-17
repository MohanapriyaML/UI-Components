"use client"
import React from 'react'
import { UiLinkProps } from './types';
import { StyledNextLink } from './UiLink.styled';

const UiLinks = (props: UiLinkProps) => {
  const { children, className, underlineOnHover, href } = props;
  return (
    <StyledNextLink href={href}
      className={className}
      $underlineOnHover={underlineOnHover}
    >
      {children}
    </StyledNextLink>
  )
}

export default UiLinks;
