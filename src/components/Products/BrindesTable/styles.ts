import styled from 'styled-components';

export const TableWrapper = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid ${props => props.theme.colors.border};
  width: 100%;
  overflow-x: auto;
`;

export const TableTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${props => props.theme.colors.royal};
  margin-bottom: 1.5rem;
  text-align: center;
  letter-spacing: 1px;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 500px;
  border-collapse: collapse;
  background: ${props => props.theme.colors.cardBg};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

export const TableHead = styled.thead`
  background: ${props => props.theme.colors.royal};
  color: ${props => props.theme.colors.white};
`;

export const TableHeader = styled.th<{ align?: string }>`
  padding: 1rem 0.8rem;
  text-align: ${props => props.align || 'left'};
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  transition: background 0.2s ease;
  
  &:nth-child(even) {
    background: ${props => props.theme.colors.gray};
  }
  
  &:hover {
    background: ${props => props.theme.colors.vibrant}20;
  }
`;

export const TableCell = styled.td<{ align?: string }>`
  padding: 0.8rem;
  text-align: ${props => props.align || 'left'};
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  
  &:first-child {
    font-weight: 600;
    color: ${props => props.theme.colors.royal};
    width: 50px;
    text-align: center;
  }
`;

export const TableNote = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.6;
  text-align: center;
  font-style: italic;
`;