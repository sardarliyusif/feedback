
import React from 'react';
import styled from 'styled-components';

export const Typography = styled.span`
  font-family: 'Jost', sans-serif;
  font-style: normal;
  font-weight: ${(props) => {
    if (props.weight === 'small') return '400';
    if (props.weight === 'medium') return '500';
    if (props.weight === 'bold') return '700';
    return '500'
  }};
  font-size: ${(props) => {
    if (props.size === 'small') return '14px';
    if (props.size === 'medium') return '16px';
    if (props.size === 'large') return '18px';
    return '18px'
  }};
  line-height: 1.6;
  color: #F2F4FE;
`;

export const Title = styled.h1`
  font-family: 'Jost', sans-serif;
  margin: 0;
  font-style: normal;
  font-size: ${(props) => {
    if (props.size === 'small') return '16px';
    if (props.size === 'medium') return '18px';
    if (props.size === 'large') return '24px';
    return '24px';
}};
  font-weight: ${(props) => {
    if (props.weight === 'small') return '400';
    if (props.weight === 'medium') return '500';
    if (props.weight === 'bold') return '700';
    return '500'
  }};
  line-height: 1.6;
  color: #F2F4FE;
`;

Typography.Title = Title;

// <Typography.Title>
// <Typography.Text>
// <Typography.Link>
