"use client"
import React from 'react'
import { EcLinkProps } from './types';
import { StyledNextLink } from './EcLink.styled';

const EcLinks = (props: EcLinkProps) => {
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

export default EcLinks;
