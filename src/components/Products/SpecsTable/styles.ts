import styled from 'styled-components';

export const TableContainer = styled.div`
  margin: 1.5rem 0;
  overflow-x: auto;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${props => props.theme.colors.cardBg};
  border-radius: 12px;
  overflow: hidden;
`;

export const TableTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.royal};
  margin-bottom: 0.75rem;
  padding-left: 0.5rem;
`;

export const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.royal};
  border-bottom: 2px solid ${props => props.theme.colors.vibrant};
  
  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export const TableRow = styled.tr`
  transition: background 0.2s ease;
  
  &:hover {
    background: ${props => props.theme.colors.gray};
  }
  
  &:nth-child(even) {
    background: ${props => props.theme.colors.gray}40;
  }
`;

export const TableCell = styled.td`
  padding: 0.75rem 1rem;
  color: ${props => props.theme.colors.text};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;