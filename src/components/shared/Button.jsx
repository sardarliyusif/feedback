import styled from 'styled-components';

export const Button = styled.button`
  background: #AD1FEA;
  border-radius: 10px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => {
    if (props.background === 'primary') return '#4661E6';            
    if (props.background === 'danger') return '#D73737';            
    if (props.background === 'blue') return '#3A4374';
    return '#AD1FEA'            
  }};
  &:hover{
    opacity: 0.8;
  }
`;
