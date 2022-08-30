import styled from 'styled-components';

export const Card = styled.div`
  background: ${(props) => {
      if (props.mode === 'light') return '#ffffff'; 
      if (props.mode === 'dark') return '#373f68'; 
      if (props.mode === 'colored') return 'radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)'; 
      return '#ffffff';
  }};
  border-radius: 10px;
  padding: ${(props) => {
    if (props.padding === 'small') return '14px 16px';
    if (props.padding === 'medium') return '24px';
    if (props.padding === 'large') return '24px 32px';
    return '24px';
  }};
  flex-direction: ${(props) => {
    if(props.direction === 'column') return "column"
    return "row"
  }};
  margin: ${(props) => {
    if (props.margin === 'small') return '14px 16px';
    if (props.margin === 'medium') return '0 0 48px 0';
    if (props.margin === 'large') return '28px 32px';
    return '0 0 24px 0';
  }};
  display: flex;
  justify-content: ${(props) => {
    if (props.justify === 'around') return 'space-around';
    if (props.justify === 'between') return 'space-between';
    if (props.justify === 'center') return 'center';
    if (props.justify === 'end') return 'end';
    return 'start';
  }};
  align-items: ${(props) => {
    if (props.align === 'around') return 'space-around';
    if (props.align === 'between') return 'space-between';
    if (props.align === 'center') return 'center';
    if (props.align === 'end') return 'end';
    return 'start';
  }};
`;
