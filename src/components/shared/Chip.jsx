import styled from 'styled-components';

export const Chip = styled.span`
  background: ${(props) => props.selected ? '#4661E6' : '#F2F4FF'};
  color: ${(props) => props.selected ? '#ffffff' : '#4661E6'};
  border-radius: 10px;
  padding: 6px 16px;
  max-width: max-content;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;
